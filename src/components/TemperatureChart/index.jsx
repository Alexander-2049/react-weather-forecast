import { Area, AreaChart } from 'recharts';

const TemperatureChart = ({chartData}) => {
  console.log(chartData)
  return (
  <AreaChart width={1152} height={250} data={chartData}
    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorTemperature" x1="0" y1="0" x2="0" y2="1">
        <stop offset="25%" stopColor="#FAFAFA" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#EADDCA" stopOpacity={0.3}/>
      </linearGradient>
    </defs>
    <Area type="monotone" dataKey="temperature" stroke="#FFFFFF" fillOpacity={1} fill="url(#colorTemperature)" />
  </AreaChart>
  )
}

export default TemperatureChart;