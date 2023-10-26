import React, { useEffect, useRef } from 'react';
import styles from './index.module.less';

const { Scene, PolygonLayer, PointLayer, GaodeMap, LineLayer } = (window as any).L7;

export const Yidaiyilu: React.FC = () => {
  const map = useRef<any>(null);
  useEffect(() => {
    if (!map.current) {
      const scene = new Scene({
        id: 'l7-container',
        map: new GaodeMap({
          style: 'light',
          center: [60.268, 30.3628],
          zoom: 2,
        })
      });

      map.current = scene;

      scene.on('loaded', async () => {
        scene.addImage('local', 'https://gw.alipayobjects.com/zos/rmsportal/xZXhTxbglnuTmZEwqQrE.png');
        const belt = await (await fetch('https://gw.alipayobjects.com/os/rmsportal/UpapMomPYUeiBjbHNAma.json')).json();
        const line = await (await fetch('https://gw.alipayobjects.com/os/rmsportal/kwUdcXnxQtexeGRvTGtA.json')).json();
        const line2 = await (await fetch('https://gw.alipayobjects.com/os/rmsportal/dzpMOiLYBKxpdmsgBLoE.json')).json();
        const point = await (await fetch('https://gw.alipayobjects.com/os/rmsportal/opYqFyDGyGUAUXkLUhBV.json')).json();
        const fillLayer = new PolygonLayer({
            autoFit: false
        }).source(belt).color('cname', function (value) {
            return value == '中国' ? 'rgba(46,149,169,0.45)' : 'rgba(227,244,244,1)';
        }).shape('fill');

        const linelayer = new LineLayer().source(line).color('rgb(79,147,234)').size(1.5).shape('line');

        const linelayer2 = new LineLayer().source(line2).color('rgb(173,113,55)').size(1.5).shape('line').style({
            // 'lineType':'solid'
        })

        const pointlayer = new PointLayer({
        }).source(point).size(5.0).shape('circle').color('Id',(id)=>{
          return id < 30 ? '#027aff':'rgb(173,113,55)'

        }).style({
          stroke:'#000',
          strokeWidth:1
        });

        const textlayer = new PointLayer({
        }).source(point).size(12.0).shape('name', 'text').color('Id',(id)=>{
          return id < 29 ? '#027aff':'rgb(173,113,55)'

        }).style({
            textOffset: [0, -20],
            stroke: '#fff',
            strokeWidth: 2,
            textAnchor: 'bottom', 

        })
        scene.addLayer(fillLayer)
        scene.addLayer(linelayer)
        scene.addLayer(linelayer2)
        scene.addLayer(pointlayer)
        scene.addLayer(textlayer)
      });
    }
  }, []);

  return (
    <div className={styles.container} id="l7-container" />
  );
}
