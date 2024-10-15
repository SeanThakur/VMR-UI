import {
  Bar,
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
    name: "US",
    USA: 2400,
    USA_Comparison: 2200,
  },
  {
    name: "UK",
    USA: 3000,
    USA_Comparison: 2800,
  },
  {
    name: "Rest of Europe",
    USA: 3200,
    USA_Comparison: 3000,
  },
  {
    name: "Germany",
    USA: 3500,
    USA_Comparison: 3300,
  },
  {
    name: "France",
    USA: 3700,
    USA_Comparison: 3600,
  },
  {
    name: "Canada",
    USA: 3900,
    USA_Comparison: 3800,
  },
  {
    name: "Italy",
    USA: 3900,
    USA_Comparison: 3800,
  },
];

export default function CountryComparision() {
  return (
    <div className="p-4 shadow-xl shadow-gray-300 bg-white rounded-lg flex flex-col">
      <div className="flex flex-row items-center justify-center">
        <h2 className="text-xl font-light my-6 pl-10">
          Value Comparision by Country
        </h2>
      </div>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: "USD Millions",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ padding: "10px" }}
            />

            {/* Bar for USA actual data */}
            <Bar dataKey="USA" barSize={20} fill="#2caffe" name="USA Actual" />
            {/* Bar for USA comparison data */}
            <Bar
              dataKey="USA_Comparison"
              barSize={20}
              fill="#544fc5"
              name="USA Comparison"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
