import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Enero', ventas: 4000, gastos: 2400, amt: 2400 },
    { name: 'Febrero', ventas: 3000, gastos: 1398, amt: 2210 },
    { name: 'Marzo', ventas: 2000, gastos: 9800, amt: 2290 },
    { name: 'Abril', ventas: 2780, gastos: 3908, amt: 2000 },
    { name: 'Mayo', ventas: 1890, gastos: 4800, amt: 2181 },
    { name: 'Junio', ventas: 2390, gastos: 3800, amt: 2500 },
    { name: 'Julio', ventas: 3490, gastos: 4300, amt: 2100 },
];

const ChartComponent = () => (
    <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ventas" stroke="#8884d8" />
        <Line type="monotone" dataKey="gastos" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
);

export default ChartComponent;
