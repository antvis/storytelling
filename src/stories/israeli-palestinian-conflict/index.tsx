import React from "react";
import { Chart } from "@berryv/g2-rect";

const data = [
  {
    date: "2023-10-07",
    death: 300,
    injured: 2500,
    israelDeath: 100,
    hamasDeath: 198,
    israeInjured: 900,
    hamasInjured: 1610,
    event: "哈马斯火箭弹袭击以色列，造成双方超过 300 人死亡，超过 2500 人受伤",
  },
  {
    date: "2023-10-08",
    israelDeath: 300,
    hamasDeath: 400,
    israeInjured: 1500,
    hamasInjured: 1990,
    death: 600,
    injured: 4000,
    event:
      "以色列决定向哈马斯正式宣战，已造成双方超过 600 人死亡，近 4000 人受伤",
  },
  {
    date: "2023-10-09",
    death: 1300,
    injured: 5300,
    israelDeath: 800,
    hamasDeath: 508,
    israeInjured: 2506,
    hamasInjured: 2800,
    event:
      "以军全面封锁加沙地带，切断对加沙地带的供电供水，已造成双方超过 1300 人死亡，超过 5300 人受伤",
  },
  {
    date: "2023-10-10",
    death: 2300,
    israelDeath: 1000,
    hamasDeath: 788,
    israeInjured: 2700,
    hamasInjured: 4100,
    injured: 7800,
    event:
      "以色列宣布组建紧急政府应对战时事务，已造成双方超过 2300 人死亡，超过 7800 人受伤",
  },
  {
    date: "2023-10-12",
    death: 2700,
    injured: 10100,
    israelDeath: 1300,
    hamasDeath: 1448,
    israeInjured: 3297,
    hamasInjured: 6868,
    event:
      "以色列空袭叙利亚两个机场，准备对加沙地带发动大规模军事行动，外交部已确认有 3 名中国公民不幸遇难，2 人失联，已造成双方超过 2700 人死亡，超过 10100 人受伤",
  },
  {
    date: "2023-10-14",
    death: 3500,
    injured: 12198,
    israelDeath: 1300,
    hamasDeath: 2269,
    israeInjured: 3484,
    hamasInjured: 9814,
    event:
      "以军称在夜袭中打死了哈马斯空中负责人，即将对加沙发起强力进攻，已造成双方超过 3500 人死亡，超过 12198 人受伤",
  },
  {
    date: "2023-10-16",
    israelDeath: 1400,
    hamasDeath: 2808,
    israeInjured: 3484,
    hamasInjured: 10950,
    death: 4100,
    injured: 14434,
    event:
      "以军对加沙发动数十次袭击，以色列和哈马斯均否认拉法口岸重开，已造成双方超过 4100 人死亡，超过 14434 人受伤",
  },
  {
    date: "2023-10-17",
    death: 4200,
    injured: 14734,
    israelDeath: 1400,
    hamasDeath: 2837,
    israeInjured: 3484,
    hamasInjured: 11250,
    event:
      "由于美法英日四国投反对票，导致联合国安理会未能通过巴以相关决议，以军称已暗杀哈马斯情报局局长，已造成双方超过 4200 人死亡，超过 14734 人受伤",
  },
];

export const IsraeliPalestinianConflict: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Chart
        options={{
          type: "view",
          width: 800,
          height: 1200,
          insetTop: 15,
          insetRight: 10,
          marginRight: 150,
          data,
          title: {
            title: "巴以冲突时间线",
            subtitle: "数据来源：新华网｜统计时间：2023.10.17",
            titleFontWeight: "bolder",
            titleFontSize: 20,
          },
          coordinate: { transform: [{ type: "transpose" }] },
          encode: { x: "date", y: (d) => d.death + d.injured },
          axis: false,
          style: { viewFill: "rgb(253, 247, 239)" },
          children: [
            {
              type: "area",
              tooltip: false,
              style: { fillOpacity: 0.1, fill: "red" },
            },
            {
              type: "interval",
              scale: {
                x: { key: "interval", paddingInner: 0.15 },
                color: {
                  range: [
                    "rgba(0, 0, 0, 0.8)",
                    "rgba(0, 0, 0, 0.5)",
                    "rgba(236, 61, 11, 0.8)",
                    "rgba(236, 61, 11, 0.5)",
                  ],
                },
              },
              legend: {
                color: {
                  position: "bottom",
                  labelFormatter: (d) => {
                    const labelByValue = {
                      israelDeath: "以色列死亡人数",
                      hamasDeath: "哈马斯死亡人数",
                      israeInjured: "以色列受伤人数",
                      hamasInjured: "哈马斯受伤人数",
                    };
                    return labelByValue[d];
                  },
                },
              },
              data: {
                transform: [
                  {
                    type: "fold",
                    fields: [
                      "israelDeath",
                      "hamasDeath",
                      "israeInjured",
                      "hamasInjured",
                    ],
                    key: "type",
                    value: "value",
                  },
                ],
              },
              encode: { y: "value", color: "type", series: "type" },
            },
            {
              type: "line",
              style: {
                stroke: "black",
                shape: "smooth",
                strokeWidth: 10,
                lineCap: "round",
              },
              tooltip: false,
              labels: [
                {
                  text: (d) => {
                    const N = d.date.split("-");
                    return `${N[1]}.${N[2]}`;
                  },
                  fontFamily: "Alibaba Sans 102",
                  letterSpacing: -1,
                  fontSize: 32,
                  fontWeight: "bold",
                  dy: (d) => (+d.date.split("-").pop() === 17 ? -15 : 0),
                  dx: (d) => (+d.date.split("-").pop() < 13 ? 30 : -30),
                  textAnchor: (d) =>
                    +d.date.split("-").pop() < 13 ? "start" : "end",
                  fillOpacity: 1,
                },
                {
                  text: (d) => d.event,
                  render: (text, d) => {
                    const date = +d.date.split("-").pop();
                    const right = date < 13;
                    const dx = right ? 65 : -380;
                    const dy = right ? 15 : date === 17 ? -100 : -90;
                    const span = (text) => {
                      return `<span style="color:red;font-size:18px;font-weight:bold">${text}</span>`;
                    };
                    const textHtml = text
                      .replace(d.injured, span(d.injured))
                      .replace(d.death, span(d.death));
                    const width = date === 12 ? 250 : 300;
                    return `<div style="
                        width: ${width}px; 
                        font-size: 12px; 
                        transform: translate(${dx}px, ${dy}px);
                        padding: 5px;
                        color: black;
                        font-family: 'Alibaba Sans 102'"
                      >${textHtml}</div>`;
                  },
                },
              ],
            },
            {
              type: "point",
              encode: { size: 14 },
              style: {
                shape: "point",
                fill: "white",
                stroke: "red",
                strokeWidth: 3,
                fillOpacity: 1,
              },
              tooltip: false,
            },
            {
              type: "text",
              encode: { text: "date" },
              scale: {
                text: {
                  type: "ordinal",
                  range: ["🚀", "🔥", "⚡️", "🏠", "✈️", "👊", "👊", "🙅"],
                },
              },
              style: {
                textAlign: "center",
                textBaseline: "middle",
                dx: 2,
                fontSize: 15,
              },
            },
          ],
        }}
      />
      <div style={{ fontSize: 14 }}>
        <span>
          <a href="https://observablehq.com/@antv/g2-timeline" target="__blank">
            Code
          </a>
        </span>
        ,
        <span style={{ paddingLeft: 10 }}>
          Visualized by{" "}
          <a href="https://github.com/antvis/G2" target="__blank">
            G2
          </a>
        </span>
      </div>
    </div>
  );
};
