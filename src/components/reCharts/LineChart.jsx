import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: ' A',
    // uv: 4000,
    pv: 1,
    // amt: 1,
  },
  {
    name: ' B',
    // uv: 3000,
    pv: 60,
    // amt: 2210,
  },
  {
    name: ' C',
    // uv: 2000,
    pv: 1,
    // amt: 2290,
  },
  {
    name: ' D',
    // uv: 2780,
    pv: 50,
    // amt: 2000,
  },
  {
    name: ' E',
    // uv: 1890,
    pv: 1,
    // amt: 2181,
  },
  {
    name: ' F',
    // uv: 2390,
    pv: 40,
    // amt: 2500,
  },
  {
    name: ' G',
    // uv: 3490,
    pv: 1,
    // amt: 2100,
  },
  
  {
    name: ' H',
    // uv: 3490,
    pv: 25,
    // amt: 2100,
  },
  
  {
    name: ' H',
    // uv: 3490,
    pv: 0,
    // amt: 2100,
  },
];
// #endregion

export default function Example() {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      {/* <Legend /> */}
      <Line type="monotone" dataKey="pv" stroke="#47b38f" activeDot={{ r: 8 }} />
      <RechartsDevtools />
    </LineChart>
  );
}