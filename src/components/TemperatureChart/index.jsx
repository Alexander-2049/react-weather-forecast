import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const TemperatureChart = ({chartData}) => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart data={chartData}
        margin={{ top: 0, right: 60, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorTemperature" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="#1976d2" stopOpacity={0.9}/>
            <stop offset="70%" stopColor="#1976d2" stopOpacity={0.6}/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0.5}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="temperature" stroke="#1976d2" fillOpacity={1} fill="url(#colorTemperature)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default TemperatureChart;