import researchesData from '@/lib/json/researches.json';
import ResearchCard from './research-card';

export default function Researches() {
  return (
    <div className='space-y-8'>
      <h2 className='text-3xl font-bold tracking-tight'>Researches</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {researchesData.map((research, index) => (
          <ResearchCard key={index} research={research} />
        ))}
      </div>
    </div>
  );
}
