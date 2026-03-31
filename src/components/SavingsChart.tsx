import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'Clogged Ducts',
    cost: 320,
  },
  {
    name: 'Pro Cleaned',
    cost: 240,
  },
];

const SavingsChart: React.FC = () => {
  return (
    <div className="w-full h-72 lg:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.15} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#0E2342', fontSize: 12, fontWeight: 900 }}
          />
          <YAxis hide />
          <Tooltip
            cursor={{ fill: 'rgba(14, 35, 66, 0.05)' }}
            contentStyle={{ borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontWeight: '700' }}
          />
          <Bar dataKey="cost" radius={[2, 2, 0, 0]} barSize={70}>
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#0E2342' : '#1E8C45'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-center mt-6 p-6 bg-slate-50 rounded-sm border border-slate-100">
        <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Estimated Annual Savings</p>
        <p className="text-3xl font-black text-primary tracking-tighter">$960.00 <span className="text-xs text-accent">USD</span></p>
        <p className="text-xs text-slate-400 mt-2 italic font-medium">Based on 35% efficiency increase with Rotobrush™ technology.</p>
      </div>
    </div>
  );
};

export default SavingsChart;