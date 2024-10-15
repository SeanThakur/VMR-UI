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

const SegmentAnalysis = () => {
  const barDataTopSegments = [
    {
      name: "Shaftline Propulsion",
      "2023": 4458.11,
      "2022": 3945.02,
    },
    {
      name: "Transport Ship",
      "2023": 3716.63,
      "2022": 4304.49,
    },
    {
      name: "Pod Propulsion",
      "2023": 3620.41,
      "2022": 4135.37,
    },
  ];

  return (
    <div className="p-4 w-full shadow-xl shadow-gray-300 bg-white rounded-lg flex flex-col">
      <div className="w-full h-[250px] bg-white rounded-lg">
        <h3 className="text-center text-xl mb-4 font-semibold">
          Top 3 Segment Analysis
        </h3>
        <ResponsiveContainer width="100%" height="95%">
          <BarChart
            data={barDataTopSegments}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            barSize={15}
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
            <YAxis
              dataKey="name"
              type="category"
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                fontFamily: "roboto-serif",
              }}
            />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
            />
            <Bar dataKey="2023" fill="#544fc5" name="2023" stackId="a">
              <LabelList dataKey="2023" position="right" />
            </Bar>
            <Bar dataKey="2022" fill="#2caffe" name="2022" stackId="a">
              <LabelList dataKey="2022" position="right" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SegmentAnalysis;
