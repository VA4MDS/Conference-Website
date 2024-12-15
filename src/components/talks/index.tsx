import talksData from '@/lib/json/talks.json';
import TalksCard from './talks-card';

export default function Talks() {
  return (
    <div className='space-y-8'>
      <h2 className='text-3xl font-bold tracking-tight'>Talks</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {talksData.map((talk, index) => (
          <TalksCard key={index} talk={talk} />
        ))}
      </div>
    </div>
  );
}
