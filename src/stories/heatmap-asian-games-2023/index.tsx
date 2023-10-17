import React, { useEffect, useRef } from 'react';
import { getFrames } from './helper';
import { Data } from './data';
import styles from './index.module.less';

const { Scene, HeatmapLayer, PointLayer, GaodeMap } = (window as any).L7;

export const HeatmapAsianGames2023: React.FC = () => {
  const map = useRef<any>(null);
  const interval = useRef<any>(null);

  useEffect(() => {
    const frames = getFrames(Data);

    if (!map.current) {
      const scene = new Scene({
        id: 'l7-container',
        map: new GaodeMap({
          style: 'dark',
          center: [120.14165, 30.2743],
          zoom: 10,
          minZoom: 8
        })
      });

      map.current = scene;

      map.current.on('loaded', () => {
        const heatmapLayer = new HeatmapLayer({})
          .source(frames[0], {
            parser: {
              type: 'json',
              x: 'longitude',
              y: 'latitude'
            }
          })
          .shape('heatmap')
          .size('v', [0, 1]) // weight映射通道
          .scale('v', {
            type: 'linear',
            domain: [0, 120],
          })
          .style({
            intensity: 4,
            opacity: 0.7,
            radius: 90,
            rampColors: {
              colors: [
                '#FF4818',
                '#F7B74A',
                '#FFF598',
                '#91EABC',
                '#2EA9A1',
                '#206C7C'
              ].reverse(),
              positions: [0, 0.25, 0.45, 0.6, 0.8, 1.0]
            }
          });
        map.current.addLayer(heatmapLayer);

        const labelLayer = new PointLayer({})
          .source(frames[0].filter((d: any) => d.v > 25), {
            parser: {
              type: 'json',
              x: 'longitude',
              y: 'latitude'
            }
          })
          .shape('name', 'text')
          .size(10)
          .style({
            textAnchor: 'center',
            textOffset: [0, 0],
            // spacing: 2, // 字符间距
            // padding: [ 1, 1 ], // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
            // fill: 'red',
            // stroke: 'red',
            opacity: 1
            // strokeWidth: 0, // 描边宽度
          });

        map.current.addLayer(labelLayer);

        let i = 0;
        interval.current = setInterval(() => {
          heatmapLayer.setData(frames[i % frames.length]);
          scene.render()
          i++;
        }, 16)
      });
    }
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    }
  }, []);

  return (
    <div className={styles.container} id="l7-container">
      <div className={styles.title}>
        亚运期间，核心场馆周边消费最高涨 3 倍 
      </div>
      <div className={styles.power}>
        数据来源: 支付宝  |  统计周期: 9月1日-10月3日
      </div>
    </div>
  );
}
