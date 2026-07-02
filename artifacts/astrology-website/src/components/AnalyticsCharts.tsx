import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

type Props = {
  data: {
    category: string;
    count: number;
  }[];

  statusData: {
    name: string;
    value: number;
  }[];

  dailyData: {
    date: string;
    count: number;
  }[];
};

export default function AnalyticsCharts({
  data,
  statusData,
  dailyData,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mt-8">
      <h2 className="text-xl font-bold mb-4">Consultations by Category</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#EAB308" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Consultation Status</h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              <Cell fill="#22C55E" />
              <Cell fill="#EAB308" />
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Daily Consultations</h2>

        <ResponsiveContainer width="100%" height={300}>
            
          <LineChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#3B82F6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
