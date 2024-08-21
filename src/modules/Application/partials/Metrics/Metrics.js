import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { FaRegCalendarAlt } from "react-icons/fa";

const Metrics = () => {
    const data = [
        { name: 'Jan', positive: 2.0, negative: -1.5, year: 2024 },
        { name: 'Feb', positive: 2.0, negative: -2.0, year: 2024 },
        { name: 'Mar', positive: 1.5, negative: -1.0, year: 2024 },
        { name: 'Apr', positive: 2.0, negative: -1.5, year: 2024 },
        { name: 'May', positive: 1.0, negative: -1.0, year: 2024 },
        { name: 'Jun', positive: 2.5, negative: -2.0, year: 2024 },
        { name: 'Jul', positive: 1.5, negative: -1.0, year: 2024 },
        { name: 'Aug', positive: 1.5, negative: -1.5, year: 2024 },
        { name: 'Sep', positive: 2.0, negative: -2.0, year: 2024 },
        { name: 'Oct', positive: 1.0, negative: -1.0, year: 2024 },
        { name: 'Nov', positive: 2.5, negative: -2.0, year: 2024 },
        { name: 'Dec', positive: 2.0, negative: -1.5, year: 2024 },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, positive, negative, year } = payload[0].payload;
            return (
                <div className="bg-white p-2 rounded shadow-md text-xs text-gray-800">
                    <p>{name}</p>
                    <p><span style={{ color: '#00e676' }}>●</span> Positive: {positive}</p>
                    <p><span style={{ color: '#b0bec5' }}>●</span> Negative: {negative}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-lg p-6 shadow-md w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-base font-semibold">Metrics</h2>
                <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-600">
                    <FaRegCalendarAlt className='inline-flex mr-2 mb-1' /> This Year
                </button>
            </div>

            <div className="w-full overflow-x-auto -ml-1">
                <ResponsiveContainer width="100%" height={280}>
                    <ComposedChart data={data}>
                        <XAxis dataKey="name" tickLine={false} axisLine={false} />
                        <YAxis domain={[-4, 4]} tickLine={false} axisLine={false} />
                        <Tooltip 
                            content={<CustomTooltip />}
                            cursor={{ fill: 'rgba(0, 230, 118, 0.1)' }}
                        />

                        {/* Dashed Lines for Each Month */}
                        {data.map((entry, index) => (
                            <ReferenceLine
                                key={index}
                                x={entry.name}
                                stroke="#d3d3d3"
                                strokeDasharray="3 3"
                            />
                        ))}

                        {/* Adjusting bars with space between them */}
                        <Bar dataKey="positive" fill="#00e676" barSize={10} radius={[20, 20, 20, 20]} />
                        <Bar dataKey="negative" fill="#b0bec5" barSize={10} radius={[20, 20, 20, 20]} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Metrics;
