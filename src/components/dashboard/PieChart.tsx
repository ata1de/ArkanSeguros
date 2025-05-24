import { COLORS } from '@/constants/colors';
import { IconsSpinner, PieChartsProps } from '@/types/dashboard';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

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

const PieCharts = ({ data, isLoading }: PieChartsProps) => {
  return (
    <div className="w-full h-full m-auto">
      {isLoading ? (
        <div className='w-full h-full m-auto flex items-center justify-center'>
          <IconsSpinner.spinner className='w-8 h-8 animate-spin' />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={300} height={300}>
            <Tooltip content={CustomTooltip} />
            <Legend verticalAlign="middle" layout="vertical" align="right" />
            <Pie
              dataKey="value"
              isAnimationActive={true}
              animationDuration={800}
              animationEasing="ease-in-out"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PieCharts;