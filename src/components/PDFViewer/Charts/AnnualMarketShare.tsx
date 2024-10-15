import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const AnnualMarketShare = () => {
  const pieData = [
    { name: "US", value: 30 },
    { name: "Canada", value: 15 },
    { name: "Mexico", value: 10 },
    { name: "United Kingdom", value: 20 },
    { name: "France", value: 25 },
    { name: "Spain", value: 10 },
    { name: "Italy", value: 12 },
    { name: "Rest of Europe", value: 18 },
  ];

  const COLORS = [
    "#2caffe",
    "#544fc5",
    "#00e272",
    "#fe6a35",
    "#6c8abc",
    "#d568fb",
    "#feb56a",
    "#fa4b43",
  ];

  return (
    <div className="p-4 shadow-xl shadow-gray-300 bg-white rounded-lg flex flex-col">
      <div className="w-full h-[500px] bg-white rounded-lg p-4">
        <h3 className="text-center text-xl mb-4 font-semibold">
          Countrywise Annual Market Share
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              innerRadius={30}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
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
    </div>
  );
};

export default AnnualMarketShare;
