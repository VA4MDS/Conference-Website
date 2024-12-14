import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

import Link from 'next/link';
import ProfilePreview from './profile-preview';
import Publications from '@/components/publications';

export default function HomeContent() {
  return (
    <div className='container py-8 md:py-12'>
      <div className='grid gap-8 lg:grid-cols-[300px_1fr]'>
        <ProfilePreview />
      </div>
    </div>
  );
}
