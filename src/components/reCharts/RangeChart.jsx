import { BarChart, XAxis, YAxis, Tooltip, Bar, BarStack } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';


const rangedStackedBarData = [
    { name: 'A', value1: [1, 6] },
    { name: 'B', value1: [3, 7] },
    { name: 'C', value1: [4, 8] },
    { name: 'D', value1: [5, 9] },
    { name: 'E', value1: [4, 7] },
    { name: 'F', value1: [2, 5] },
];

const RangedStackedBarChart = ({ isAnimationActive = true }) => (


    <BarChart
        style={{ width: '100%', maxWidth: '100%', maxHeight: 'auto', aspectRatio: 1.618 }}
        responsive
        data={rangedStackedBarData}
        id="recharts-ranged-stacked-bar-chart"
        margin={{
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
        }}
    >
     
        <Tooltip />
        <BarStack>
            <Bar dataKey="value1" maxBarSize={10} fill="#e99b26" isAnimationActive={isAnimationActive} radius={[25, 25, 25, 25]} />
        </BarStack>
    </BarChart>
);

export default RangedStackedBarChart;