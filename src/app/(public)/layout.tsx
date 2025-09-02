import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '.././globals.css';
import MainHeader from '@/components/shared/main-header';
import MainFooter from '@/components/shared/main-footer';
import HeroCarousel from '@/components/hero-carousel/HeroCarousel';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdullah Al Maruf | Python instructor and research mentor',
  description: 'My Personal Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container mx-auto'>
          <div className='bg-background px-2'>
            <MainHeader />
            <HeroCarousel />
            <main className='min-h-screen container mx-auto mt-10'>
              {children}
            </main>
            <MainFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
