"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ExamResult } from "@/lib/types";

interface ProgressChartProps {
  results: ExamResult[];
}

export default function ProgressChart({ results }: ProgressChartProps) {
  if (results.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        No exam history yet. Take a practice exam to see your progress!
      </div>
    );
  }

  const data = results.map((r, i) => ({
    name: `Exam ${i + 1}`,
    score: r.score,
    date: new Date(r.date).toLocaleDateString(),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis domain={[0, 100]} fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
          }}
        />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ fill: "#3b82f6", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
