import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePreview() {
  return (
    <aside className='flex flex-col gap-6 lg:sticky top-24 h-fit'>
      <div className='relative aspect-square overflow-hidden rounded-xl'>
        <Image
          src='/images/abdullah-al-maruf.webp'
          alt='Profile picture'
          className='object-cover'
          fill
          priority
        />
      </div>
      <div className='space-y-4'>
        <div>
          <h1 className='text-2xl font-bold'>Abdullah Al Maruf</h1>
          <p className='text-muted-foreground'>Assistant Professor</p>
        </div>
        <div>
          <p className='font-medium'>Department of Computer Science</p>
          <p className='text-sm text-muted-foreground'>
            University Research Institute
          </p>
        </div>
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <MapPin className='h-4 w-4' />
          <span>New York, United States</span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {['ResearchGate', 'LinkedIn', 'Github', 'Google Scholar'].map(
            (platform) => (
              <Button
                key={platform}
                variant='outline'
                size='sm'
                className='w-full'
              >
                {platform}
                <ExternalLink className='ml-2 h-3 w-3' />
              </Button>
            )
          )}
        </div>
      </div>
    </aside>
  );
}
