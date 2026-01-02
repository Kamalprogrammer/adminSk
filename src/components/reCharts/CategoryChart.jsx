import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';


// #region Sample data
const data = [
    {
        name: 'Feb',
        NetRevenue: 40,
        NetProfit: 24,
        amt: 24,
    },
    {
        name: 'March',
        NetRevenue: 30,
        NetProfit: 13,
        amt: 22,
    },
    {
        name: 'Apr',
        NetRevenue: 20,
        NetProfit: 8,
        amt: 22,
    },
    {
        name: 'May',
        NetRevenue: 27,
        NetProfit: 38,
        amt: 20,
    },
    {
        name: 'June',
        NetRevenue: 18,
        NetProfit: 48,
        amt: 21,
    },
    {
        name: 'July',
        NetRevenue: 23,
        NetProfit: 38,
        amt: 25,
    },
    {
        name: 'Aug',
        NetRevenue: 23,
        NetProfit: 38,
        amt: 25,
    },


];

// #endregion
const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;

    if (x == null || y == null || width == null) {
        return null;
    }
    const radius = 10;
    return (
        <g>
            {/* <circle cx={Number(x) + Number(width) / 2} cy={Number(y) - radius} r={radius} fill="#8884d8" /> */}
            <text
                x={Number(x) + Number(width) / 2}
                y={Number(y) - radius}
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                {String(value).split(' ')[1]}
            </text>
        </g>
    );
};

export default function CategoryChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                barCategoryGap="20%"
                margin={{
                    top: 25,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend verticalAlign="top" align="left" wrapperStyle={{ paddingBottom: '20px' }} />
                <Bar dataKey="NetProfit" fill="var(--color-primary)" minPointSize={5} radius={[8, 8, 0, 0]}>
                    <LabelList dataKey="name" content={renderCustomizedLabel} />
                </Bar>
                <Bar dataKey="NewRevenue" fill="#a2bfff" minPointSize={10} radius={[8, 8, 0, 0]} />
                <RechartsDevtools />
            </BarChart>
        </ResponsiveContainer>
    );
};
