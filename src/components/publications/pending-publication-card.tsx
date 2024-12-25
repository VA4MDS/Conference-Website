import { Card } from '../ui/card';

type PendingPublicationPropsType = {
  paper: {
    title: string;
    description: string;
  };
};

export default function PendingPublicationCard({
  paper,
}: PendingPublicationPropsType) {
  const { title, description } = paper;
  return (
    <Card className='overflow-hidden transition-colors hover:bg-muted/50'>
      <div className='p-6'>
        <h3 className='font-semibold tracking-tight hover:text-primary'>
          {title}
        </h3>
        <div className='space-y-2'>
          <p className='mt-2 text-sm text-muted-foreground'>{description}</p>
        </div>
      </div>
    </Card>
  );
}
