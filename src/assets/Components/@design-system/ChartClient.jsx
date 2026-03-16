import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React, { useState, useEffect } from "react";
import { getNumberClient } from "../../../Apis/axios";
function ChartClient() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getNumberClient();
        const formated = Object.entries(res.data).map(([month, count]) => ({
          month,
          count,
        }));
        setData(formated);
      } catch (error) {
        console.error("Erreur de récupération:", error.response?.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Nombre de clients par mois</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="33" /> */}
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="count" fill="#6366F1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default ChartClient;
