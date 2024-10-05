"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const data = [
  { name: "North America", value: 400 },
  { name: "Europe", value: 300 },
  { name: "Asia Pacific", value: 300 },
  { name: "Middle East & Africa", value: 200 },
  { name: "Latin America", value: 100 },
];

const COLORS = ["#49e3bb", "#4c90fa", "#544fc5", "#b9c2fc", "#2c2cfe"];

const PieChartComponent = () => {
  const [radius, setRadius] = useState({ outer: 100, inner: 35 });

  const updateRadius = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setRadius({ outer: 100, inner: 20 });
    } else if (screenWidth === 768) {
      setRadius({ outer: 80, inner: 20 });
    } else if (screenWidth < 1024) {
      setRadius({ outer: 140, inner: 30 });
    } else {
      setRadius({ outer: 100, inner: 35 });
    }
  };

  useEffect(() => {
    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="p-4 shadow-xl shadow-gray-300 bg-white rounded-lg flex flex-col md:flex-row">
      <div className="w-full md:w-3/4">
        <h2 className="text-lg font-bold mb-4 text-center md:text-left">
          Market Share, By Region
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={radius.outer}
              innerRadius={radius.inner}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full md:w-2/4 mt-8 md:mt-0 md:ml-8 text-sm flex flex-col justify-center">
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="w-3 h-3 bg-blue-600 inline-block mr-2"></span>{" "}
            North America
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 inline-block mr-2"></span>{" "}
            Europe
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-yellow-400 inline-block mr-2"></span>{" "}
            Asia Pacific
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-orange-500 inline-block mr-2"></span>{" "}
            Middle East & Africa
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-purple-400 inline-block mr-2"></span>{" "}
            Latin America
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PieChartComponent;
