import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, MapPin, Smartphone } from 'lucide-react';
import Image from 'next/image';
import profileContactData from '@/lib/json/profile-contact.json';
import Link from 'next/link';
import profileInfoData from '@/lib/json/profile-info.json';

export default function ProfilePreview() {
  const infoValues = profileInfoData[0];
  const { name, designation, university, department, location, phone, email } =
    infoValues;
  return (
    <aside className='w-full flex flex-col gap-6 lg:sticky top-24 h-fit'>
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
          <h1 className='text-2xl font-bold'>{name}</h1>
          <p className='text-muted-foreground'>{designation || ''}</p>
        </div>
        <div>
          <p className='font-medium'>{department || ''}</p>
          <p className='text-sm text-muted-foreground'>{university}</p>
        </div>
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <MapPin className='h-4 w-4' />
          <span>{location || ''}</span>
        </div>
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Mail className='h-4 w-4' />
          <span>{email || ''}</span>
        </div>
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Smartphone className='h-4 w-4' />
          <span>{phone}</span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {profileContactData.map((platform) => (
            <Link key={platform.id} href={platform.link} className='w-full'>
              <Button variant='outline' size='sm' className='w-full'>
                {platform.title}
                <ExternalLink className='ml-2 h-3 w-3' />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
