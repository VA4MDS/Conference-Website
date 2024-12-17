import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

import Link from 'next/link';
import ProfilePreview from './profile-preview';
import Publications from '@/components/publications';
import profileInfoData from '@/lib/json/profile-info.json';
import LatestUpdate from './latest-update';

export default function HomeContent() {
  const infoValues = profileInfoData[0];
  const { about_me, research_interest } = infoValues;
  return (
    <div className='container py-8 md:py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
        <ProfilePreview />

        <div className='lg:col-span-3'>
          <div className='space-y-8'>
            <LatestUpdate />
            <div>
              <h2 className='text-3xl font-bold tracking-tight'>About Me</h2>
              <p className='mt-2 text-muted-foreground'>{about_me}</p>
            </div>
            <div>
              <h2 className='text-3xl font-bold tracking-tight'>
                Research Interest
              </h2>
              <p className='mt-2 text-muted-foreground'>{research_interest}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
