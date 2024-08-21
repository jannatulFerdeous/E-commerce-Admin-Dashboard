import React from 'react';

const SocialMedia = () => {
  const socialMediaData = [
    {
      id: '1',
      source: 'Twitter',
      views: '9.2k',
      uniques: '7.9k',
    },
    {
      id: '2',
      source: 'Facebook',
      views: '7.7k',
      uniques: '6.2k',
    },
    {
      id: '3',
      source: 'Instagram',
      views: '6.8k',
      uniques: '5.5k',
    },
    {
      id: '4',
      source: 'LinkedIn',
      views: '5k',
      uniques: '4.9k',
    },
    {
      id: '5',
      source: 'WhatsApp',
      views: '4.3k',
      uniques: '3.3k',
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">By Social Media</h2>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-50">
            <th className="text-left py-2 px-4 font-medium text-sm">Source</th>
            <th className="text-right py-2 px-4 font-medium text-sm">Views</th>
            <th className="text-right py-2 px-4 font-medium text-sm">Uniques</th>
          </tr>
        </thead>
        <tbody>
          {socialMediaData.map((data) => (
            <tr key={data.id} className="border-b">
              <td className="py-4 px-4 text-left">
                <p className="text-gray-700">{data.source}</p>
              </td>
              <td className="py-4 px-4 text-right">
                <p className="text-gray-700">{data.views}</p>
              </td>
              <td className="py-4 px-4 text-right">
                <p className="text-gray-700">{data.uniques}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SocialMedia;
