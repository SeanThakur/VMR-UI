import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for the chart
const data = [
  { year: "2021", value: 400, growth: 3.36 },
  { year: "2022", value: 460, growth: 8.68 },
  { year: "2023", value: 480, growth: 8.44 },
  { year: "2024", value: 500, growth: 8.58 },
  { year: "2025", value: 520, growth: 8.83 },
  { year: "2026", value: 540, growth: 8.01 },
  { year: "2027", value: 560, growth: 8.01 },
  { year: "2028", value: 580, growth: 8.06 },
  { year: "2029", value: 600, growth: 8.91 },
  { year: "2030", value: 620, growth: 8.85 },
];

const MarketSplitByType = () => {
  return (
    <div className="w-full h-full bg-white shadow-xl shadow-gray-300 rounded-lg p-6 flex flex-col">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            yAxisId="left"
            label={{
              value: "Value (in billions)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: "Growth (%)", angle: -90, position: "insideRight" }}
          />
          <Tooltip />
          <Legend />

          {/* Bar chart for values */}
          <Bar
            yAxisId="left"
            dataKey="value"
            fill="#3b4acc"
            name="Market Value"
          />

          {/* Line chart for growth percentage */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="growth"
            stroke="#82ca9d"
            strokeWidth={5}
            name="Growth (%)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketSplitByType;
