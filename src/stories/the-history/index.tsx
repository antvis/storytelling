import React from "react";
import * as d3 from "d3-array";
import { Chart } from "@berryv/g2-react";
import { HistoryData } from "./data";


function format(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const wrapper = (d) => (d <= 9 ? "0" + d : d);
  return `${year}${month == 1 ? "" : "." + wrapper(month)}`;
}

export const TheHistory: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Chart
        options={
          {
            type: "view",
            width: 900,
            insetBottom: 20,
            insetTop: 10,
            height: 1300,
            marginLeft: 30,
            marginRight: 30,
            data: HistoryData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
            scale: { y: { nice: true, range: [0, 1] } },
            axis: { y: { grid: true, label: false, tick: false }, x: { title: "时间" } },
            legend: { color: false },
            interaction: { tooltip: false },
            theme: { type: "dark" },
            title: {
              title: "小帅和他的朋友们",
              subtitle: "如有雷同，纯属巧合"
            },
            encode: {
              x: (d) => new Date(d.date),
              y: (_, i) => i + ""
            },
            children: [
              {
                type: "rangeX",
                data: d3
                  .groups(HistoryData, (d) => d.name)
                  .map(([name, events]) => ({
                    name,
                    start: events[0].date,
                    end: events[events.length - 1].date
                  })),
                encode: {
                  x: "start",
                  x1: "end",
                  color: "name"
                },
                style: { fillOpacity: 0.5 },
                labels: [
                  {
                    text: (d) => `${d.name}(${format(d.start)}~${format(d.end)})`,
                    position: "top",
                    dy: -20,
                    dx: (_, i) => (i === 2 ? 30 : 0)
                  }
                ]
              },
              {
                type: "line",
                style: { shape: "smooth", stroke: "orange", strokeWidth: 3 }
              },
              {
                type: "point",
                encode: { size: 12, color: "#fff" },
                style: {
                  shape: "point",
                  stroke: "orange",
                  strokeWidth: 3,
                  fillOpacity: 1
                }
              },
              {
                type: "text",
                encode: { text: "type" },
                scale: {
                  text: {
                    type: "ordinal",
                    domain: [0, 1, 2, 3, 4, 5],
                    range: ["🏊‍♀️", "🏀", "🏸️", "🏓️", "🥏", "🏈"],
                    independent: true
                  }
                },
                style: {
                  textAlign: "center",
                  textBaseline: "middle",
                  dx: 2,
                  fontSize: 15
                }
              },
              {
                type: "text",
                tooltip: false,
                encode: { text: "events" },
                labels: [
                  {
                    text: (d) => format(d.date),
                    position: "right",
                    textAlign: (_, i) => (i < HistoryData.length - 2 ? "start" : "end"),
                    dx: (_, i) => (i < HistoryData.length - 2 ? 0 : -20)
                  },
                  {
                    text: "image",
                    render: (_, d, i) => {
                      const { image } = d;
                      const dx = i === 0 ? 300 : i < HistoryData.length - 2 ? -180 : -120;
                      return `<img 
                                src="${image}" 
                                height="50" 
                                style="transform: translate(${dx}%, -20%);border-radius:10px"
                            />`;
                    },
                    style: { opacity: 1 },
                    position: "top-left"
                  }
                ],
                style: {
                  fill: "#eee",
                  fontSize: 14,
                  fontWeight: "bold",
                  dx: (_, i) => (i < HistoryData.length - 2 ? 30 : -70),
                  textAlign: (_, i) => (i < HistoryData.length - 2 ? "start" : "end")
                }
              }
            ]
          }
        }
      />
      <div style={{ fontSize: 14 }}>
        <span>
          Visualized by{" "}
          <a href="https://github.com/antvis/G2" target="__blank">
            G2
          </a>
        </span>
      </div>
    </div>
  );
};
