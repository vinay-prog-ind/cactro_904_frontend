import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Over Budget', value: 19, color: '#FF4D4F' },
  { name: 'On Budget', value: 33, color: '#8C8CFF' },
  { name: 'Under Budget', value: 44, color: '#36E4DA' }
];

export default function Donut() {

  return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
        //   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          width: '100%',
          height: '110%'
        }}>
          <h3 style={{ marginBottom: '10px', fontSize: '28px', color: '#111827' }}>Budget</h3>
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              paddingAngle={10}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>
  );
};

