import {
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const data = [
  {
    year: "2024",
    USASourced: 2400,
    SouthAmericaSourced: 1398,
    AustraliaSourced: 980,
  },
  {
    year: "2025",
    USASourced: 3000,
    SouthAmericaSourced: 1200,
    AustraliaSourced: 1200,
  },
  {
    year: "2026",
    USASourced: 3200,
    SouthAmericaSourced: 1500,
    AustraliaSourced: 1100,
  },
  {
    year: "2027",
    USASourced: 3500,
    SouthAmericaSourced: 1800,
    AustraliaSourced: 1300,
  },
];

export default function MarketSplitByType() {
  return (
    <div className="p-4 shadow-xl shadow-gray-300 bg-white rounded-lg flex flex-col">
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: "10px" }}
            />

            <Bar dataKey="SouthAmericaSourced" barSize={20} fill="#15c0d8" />
            <Bar dataKey="AustraliaSourced" barSize={20} fill="#3b49cc" />

            <Line
              type="monotone"
              dataKey="USASourced"
              stroke="#000"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <h2 className="text-xl font-light my-6 pl-10">
        Market Share, By Segment
      </h2>
    </div>
  );
}
