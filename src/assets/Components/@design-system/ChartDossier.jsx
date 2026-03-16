import { PieChart, Pie, Tooltip, Cell } from "recharts";
import React, { useState, useEffect } from "react";
import { getDocsMonth } from "../../../Apis/axios";

function ChartDossier() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDocsMonth();
        const formated = Object.entries(res.data).map(([month, count]) => ({
          month,
          count,
        }));
        setChartData(formated);
      } catch (error) {
        console.error("Erreur de récupération:", error.response?.data);
      }
    };
    fetchData();
  }, []);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Nombre de dossiers par mois</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
export default ChartDossier;
