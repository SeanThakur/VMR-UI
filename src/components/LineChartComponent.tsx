import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LegendProps,
} from "recharts";

const data = [
  {
    year: "2022",
    NorthAmerica: 4000,
    Europe: 2400,
    AsiaPacific: 2400,
    LatinAmerica: 1200,
  },
  {
    year: "2023",
    NorthAmerica: 5000,
    Europe: 2600,
    AsiaPacific: 2600,
    LatinAmerica: 1400,
  },
  {
    year: "2024",
    NorthAmerica: 6000,
    Europe: 2800,
    AsiaPacific: 2800,
    LatinAmerica: 1600,
  },
  {
    year: "2025",
    NorthAmerica: 7000,
    Europe: 3000,
    AsiaPacific: 3000,
    LatinAmerica: 1800,
  },
];

const CustomLegend: React.FC<LegendProps> = (props) => {
  const { payload } = props;

  return (
    <ul className="flex justify-center space-x-2">
      {payload?.map((entry) => (
        <li key={`item-${entry.value}`} className="flex items-center">
          <div
            style={{
              backgroundColor: entry.color,
              width: "12px",
              height: "12px",
              marginRight: "4px",
            }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export default function MarketValueByRegion() {
  return (
    <div className="p-4 shadow-lg bg-white rounded-lg flex flex-col">
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 30, right: 30, left: 0, bottom: 0 }} // Adjusted top margin for legend
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />

            <Legend
              content={<CustomLegend />}
              layout="horizontal"
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: "10px" }}
            />

            <defs>
              <linearGradient id="colorNA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1b5eae" />
                <stop offset="95%" stopColor="#1b5eae" />
              </linearGradient>
              <linearGradient id="colorEurope" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3479c4" />{" "}
                <stop offset="95%" stopColor="#3479c4" />
              </linearGradient>
              <linearGradient id="colorAP" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4287f5" />
                <stop offset="95%" stopColor="#4287f5" />
              </linearGradient>
              <linearGradient id="colorLA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#80b1f3" />
                <stop offset="95%" stopColor="#80b1f3" />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="NorthAmerica"
              stroke="#1b5eae"
              fill="url(#colorNA)"
              stackId="1"
            />
            <Area
              type="monotone"
              dataKey="Europe"
              stroke="#3479c4"
              fill="url(#colorEurope)"
              stackId="1"
            />
            <Area
              type="monotone"
              dataKey="AsiaPacific"
              stroke="#4287f5"
              fill="url(#colorAP)"
              stackId="1"
            />
            <Area
              type="monotone"
              dataKey="LatinAmerica"
              stroke="#80b1f3"
              fill="url(#colorLA)"
              stackId="1"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <h2 className="text-xl font-light my-6 pl-10">Market Value, By Region</h2>
    </div>
  );
}
