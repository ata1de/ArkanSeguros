import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// Definindo o tipo dos dados
interface DataPoint {
  month: string;
  clicks: number;
}

// Tipo dos props do FormClicksChart
interface FormClicksChartProps {
  data: DataPoint[];
}

const data = [
  { month: 'Jan', clicks: 50 },
  { month: 'Feb', clicks: 75 },
  { month: 'Mar', clicks: 60 },
  { month: 'Apr', clicks: 80 },
  { month: 'May', clicks: 95 },
  { month: 'Jun', clicks: 70 },
  { month: 'Jul', clicks: 85 },
  { month: 'Aug', clicks: 90 },
  { month: 'Sep', clicks: 100 },
  { month: 'Oct', clicks: 110 },
  { month: 'Nov', clicks: 105 },
  { month: 'Dec', clicks: 120 },
];

const FormClicksChart = ({data}: FormClicksChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={CustomeTooltip}/>
            <Legend />
            <Line type="monotone" dataKey="clicks" stroke="#FFB60F" strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
  );
};


const CustomeTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className='p-4 bg-MediumBlue flex flex-col gap-4 rounded-md'>
                <p className='text-lg text-WhiteDefault'>{label}</p>
                <p className='text-sm text-LightBlue'>Leeds: <span className='ml-2 text-WhiteDefault'>{payload[0].value}</span></p>
            </div>
        );
    }
};

export default FormClicksChart;
