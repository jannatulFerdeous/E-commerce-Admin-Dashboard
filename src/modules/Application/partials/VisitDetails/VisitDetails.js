import React from 'react';

const VisitDetails = () => {
    const visitData = [
        {
            id: '1',
            url: 'https://',
            views: '9.2k',
            uniques: '7.9k',
        },
        {
            id: '2',
            url: '.com/dashboard',
            views: '7.7k',
            uniques: '6.2k',
        },
        {
            id: '3',
            url: '.com/ecommerce-index',
            views: '6.8k',
            uniques: '5.5k',
        },
        {
            id: '4',
            url: '.com/apps/projects-overview',
            views: '5k',
            uniques: '4.9k',
        },
        {
            id: '5',
            url: '.com/blog/crypto/exchange',
            views: '4.3k',
            uniques: '3.3k',
        },
    ];

    return (
        <div className="bg-white rounded-lg p-6 shadow-md w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-semibold">Visits Details</h2>
            </div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="w-full bg-gray-50">
                        <th className="text-left py-2 px-4 font-medium text-sm">URL</th>
                        <th className="text-right py-2 px-4 font-medium text-sm">Views</th>
                        <th className="text-right py-2 px-4 font-medium text-sm">Uniques</th>
                    </tr>
                </thead>
                <tbody>
                    {visitData.map((visit) => (
                        <tr key={visit.id} className="border-b">
                            <td className="py-4 px-4 text-left">
                                <p className="text-gray-700">{visit.url}</p>
                            </td>
                            <td className="py-4 px-4 text-right">
                                <p className="text-gray-700">{visit.views}</p>
                            </td>
                            <td className="py-4 px-4 text-right">
                                <p className="text-gray-700">{visit.uniques}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VisitDetails;
