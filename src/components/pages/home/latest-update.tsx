import latestUpdateData from '@/lib/json/latest-update.json';

export default function LatestUpdate() {
  return (
    <div className='space-y-3'>
      <h2 className='text-3xl font-bold tracking-tight'>Latest Update</h2>
      <div>
        {latestUpdateData.map((update, index) => (
          <ul key={index} className='space-y-4 list-disc list-inside'>
            <li className='text-lg font-medium text-gray-600'>
              {update.title}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
