import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Loader2 } from 'lucide-react';

export const Icons = {
  spinner: Loader2,
};

// Definindo o tipo dos dados
interface DataPoint {
  month: string;
  clicks: number;
}

// Tipo dos props do FormClicksChart
interface FormClicksChartProps {
  data: DataPoint[];
  isLoading: boolean;
}

const FormClicksChart = ({ data, isLoading }: FormClicksChartProps) => {
  return (
    <div className="w-full h-full m-auto">
      {isLoading ? (
        <div className='w-full h-full m-auto flex items-center justify-center'>
          <Icons.spinner className='w-10 h-10 animate-spin' />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={CustomTooltip} />
            <Legend />
            <Line type="monotone" dataKey="clicks" stroke="#FFB60F" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 bg-MediumBlue flex flex-col gap-4 rounded-md'>
        <p className='text-lg text-WhiteDefault'>{label}</p>
        <p className='text-sm text-LightBlue'>Leeds: <span className='ml-2 text-WhiteDefault'>{payload[0].value}</span></p>
      </div>
    );
  }
  return null;
};

export default FormClicksChart;
