import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const COLORS = ['#1E90FF', '#32CD32', '#FFD700', '#FF6347', '#6A5ACD', '#FF69B4'];


export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Tooltip content={CustomTooltip} />
          <Legend verticalAlign="middle" layout="vertical" align="right"/>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            animationDuration={800}
            animationEasing="ease-in-out"
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 bg-MediumBlue flex flex-col gap-4 rounded-md'>
        <p className='text-lg text-white'>{payload[0].name}</p>
        <p className='text-sm'><span className='ml-2 text-WhiteDefault'>{payload[0].value}</span></p>
      </div>
    );
  }
  return null;
};