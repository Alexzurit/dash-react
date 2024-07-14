import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Grupo A', value: 400 },
    { name: 'Grupo B', value: 300 },
    { name: 'Grupo C', value: 300 },
    { name: 'Grupo D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartWithCustomizedLabelComponent = () => (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
        <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${data[index].name} ${value}`}
                </text>
            );
            }}
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip />
        </PieChart>
    </ResponsiveContainer>
);

export default PieChartWithCustomizedLabelComponent;
