import latestUpdateData from '@/lib/json/latest-update.json';

export default function LatestUpdate() {
  return (
    <div className='space-y-3'>
      <h2 className='text-3xl font-bold tracking-tight'>Latest Update</h2>
      <div>
        <ul className='space-y-2 list-disc ml-6'>
          {latestUpdateData.map((update, index) => (
            <li key={index} className=' text-gray-600'>
              {update.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
