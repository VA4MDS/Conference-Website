import researchesData from '@/lib/json/researches.json';

type SingleResearchProps = {
  params: {
    id: string;
  };
};

export default function SingleResearch({ params }: SingleResearchProps) {
  const research = researchesData.find((research) => research.id === params.id);
  return (
    <div className='space-y-4 max-w-screen-xl mx-auto'>
      <h1 className='text-2xl font-bold'>{research?.title}</h1>
      <p className='text-gray-600'>{research?.description}</p>
    </div>
  );
}
