"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2022",
    "USA-sourced": 2400,
    "South America-sourced": 1200,
    "Australia-sourced": 500,
    "Scientific Research": 3200,
    "Industrial Production": 1900,
  },
  {
    name: "2023",
    "USA-sourced": 3200,
    "South America-sourced": 2100,
    "Australia-sourced": 1000,
    "Scientific Research": 4100,
    "Industrial Production": 2500,
  },
];

const BarChartComponent = () => {
  return (
    <div className="p-4 shadow-lg bg-white rounded-lg flex flex-col md:flex-row">
      <div className="w-full md:w-3/4">
        <h2 className="text-lg font-bold mb-4 text-center md:text-left">
          Market Share, By Segment
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="USA-sourced" stackId="a" fill="#4287f5" />
            <Bar dataKey="South America-sourced" stackId="a" fill="#ffa500" />
            <Bar dataKey="Australia-sourced" stackId="a" fill="#00ff00" />
            <Bar dataKey="Scientific Research" stackId="b" fill="#ff4500" />
            <Bar dataKey="Industrial Production" stackId="b" fill="#8a2be2" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full md:w-1/4 mt-6 md:mt-0 md:ml-8 pb-8 text-sm flex flex-col justify-end md:align-left">
        <p className="font-semibold text-center md:text-left">By Type</p>
        <ul className="space-y-2 mb-6 text-center md:text-left">
          <li className="flex items-center justify-center md:justify-start">
            <span className="w-3 h-3 bg-blue-600 inline-block mr-2"></span>
            USA-sourced
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="w-3 h-3 bg-orange-500 inline-block mr-2"></span>
            South America-sourced
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="w-3 h-3 bg-green-600 inline-block mr-2"></span>
            Australia-sourced
          </li>
        </ul>

        <p className="font-semibold text-center md:text-left">By Application</p>
        <ul className="space-y-2 text-center md:text-left">
          <li className="flex items-center justify-center md:justify-start">
            <span className="w-3 h-3 bg-red-500 inline-block mr-2"></span>
            Scientific Research
          </li>
          <li className="flex items-center justify-center md:justify-start">
            <span className="w-3 h-3 bg-purple-600 inline-block mr-2"></span>
            Industrial Production
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BarChartComponent;
