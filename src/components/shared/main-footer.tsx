import { Hand } from 'lucide-react';

export default function MainFooter() {
  return (
    <div className='py-6 border-y flex items-center lg:flex-row flex-col justify-between gap-3 lg:gap-0'>
      <div>
        <p className='text-muted-foreground text-sm lg:text-start text-center'>
          Copyright ©{new Date().getFullYear()} Abdullah Al Maruf. All rights
          reserved.
        </p>
      </div>
      <div className='text-muted-foreground text-sm flex gap-2 items-center'>
        <span> Have a good day</span>

        <Hand className='w-4 h-4' />
      </div>
    </div>
  );
}
