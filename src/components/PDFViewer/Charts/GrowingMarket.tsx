import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const FastestGrowingMarket = () => {
  const barDataFastestGrowing = [
    {
      name: "Canada",
      value: 7.3,
    },
    {
      name: "Mexico",
      value: 7.3,
    },
    {
      name: "Germany",
      value: 7.03,
    },
  ];

  return (
    <div className="p-4 w-full shadow-xl shadow-gray-300 bg-white rounded-lg flex flex-col">
      <div className="w-full h-[250px] bg-white rounded-lg p-4">
        <h3 className="text-center text-xl mb-2 font-semibold">
          Fastest Growing Market
        </h3>
        <ResponsiveContainer width="100%" height="95%">
          <BarChart
            data={barDataFastestGrowing}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            barSize={25}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              label={{
                value: "USD Millions",
                position: "insideBottom",
                offset: -10,
              }}
            />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: "20px" }}
            />
            <Bar dataKey="value" fill="#2caffe" name="2022, 2023">
              <LabelList dataKey="value" position="insideRight" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FastestGrowingMarket;
