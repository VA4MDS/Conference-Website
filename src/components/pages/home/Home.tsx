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
    <div className='container py-8 md:py-12 flex flex-col items-center gap-8'>
      {/* paper submission section start */}
      <div className='shadow-lg p-4 text-xl font-medium max-w-5xl'>
        <p>
          For papers transferred from PRICAI 2025, please re-submit your paper
          to PKAW 2025 through this{' '}
          <Link
            href='/submission'
            className='capitalize text-blue-500 hover:underline leading-loose'
          >
            submission link
          </Link>{' '}
          ASAP. The submission link is open until 07 September 2025. Please
          submit the review report as a supplementary file. If you have
          significantly revised the manuscript based on the review report,
          please also include a response letter indicating how you resolved the
          reviewer&apos;s comments in the supplementary file.
        </p>
      </div>
      {/* paper submission section end */}
      {/* Memoriam section start */}
      <div className='shadow-lg p-4 text-xl font-medium max-w-5xl space-y-6 flex flex-col items-center'>
        <h3 className='text-2xl font-bold'>
          In Memoriam: Prof. Paul Compton (1944–2025)
        </h3>
        <hr className='w-full' />
        <Image
          src='/images/landscape-placeholder.svg'
          alt='Prof. Paul Compton'
          width={400}
          height={300}
          className='object-cover rounded-lg mb-4'
        />
        <p className='text-lg text-gray-600'>
          We are deeply saddened by the passing of Prof. Paul Compton, visionary
          co-founder of PKAW and world-renowned AI researcher. As the inventor
          of Ripple-Down Rules and a devoted educator, his groundbreaking
          contributions advanced the field while his mentorship shaped
          generations of researchers. His dedication, wisdom, and contributions
          laid the foundation for our community and had a positive impact on us.
          May his memory continue to inspire us all.
        </p>
      </div>
      {/* Memoriam section end */}
      {/* Welcome to PKAW  start */}
      <div className='shadow-lg p-4 text-xl font-medium max-w-5xl space-y-6 flex flex-col items-center'>
        <h3 className='text-2xl font-bold'>Welcome to PKAW 2025</h3>
        <hr className='w-full' />

        <p className='text-lg text-gray-600'>
          Welcome to the 2025 Principle and practice of data and Knowledge
          Acquisition Workshop (PKAW). In the past, the workshops have been held
          in Guilin (2006), Hanoi (2008), Daegu (2010), Kuching (2012), Gold
          Coast (2014), Phuket (2016), Nanjing (2018), Fiji (2019), Yokohama
          (2020, online), Shanghai (2022, hybrid), Jakarta (2023, hybrid), and
          Kyoto (2024, hybrid). PKAW 2025 will be collocated with the 22nd
          Pacific Rim International Conference on Artificial Intelligence
          (PRICAI 2025) and held in Wellington, New Zealand in November 2025.
          PKAW has provided a forum for researchers and practitioners to discuss
          the state-of-the-art in the areas of knowledge acquisition and machine
          intelligence (MI, also Artificial Intelligence, AI). PKAW 2025 will
          continue the above focus and welcome the contributions to the
          multi-disciplinary approach of human and big data-driven knowledge
          acquisition and AI techniques and applications. AI is changing the way
          in which organizations innovate and communicate their processes,
          products, and services. Also, in our daily life, AI-embedded devices
          such as smart speakers are about to become widely used, which extends
          the possibility of acquiring knowledge from users’ behavior observed
          through the interaction between those devices and their users.
          Knowledge acquisition and learning from big data are becoming more
          challenging than ever. Various knowledge can be acquired not only from
          human experts but also from heterogeneous data. Multidisciplinary
          research, including knowledge engineering, artificial intelligence and
          machine learning, human-computer interaction, etc., is required to
          meet the challenge. We invite authors to submit papers on all aspects
          of these areas. Furthermore, not only in the engineering field but
          also in the social science field (e.g., economics, social networks,
          and sociology), recent progress in knowledge acquisition and data
          engineering techniques is realizing interesting applications. We also
          invite submissions that present applications tested and deployed in
          real-life settings and lessons learned during this process.
        </p>
        <p className='text-lg text-gray-600'>
          Proceedings of PKAW 2025 will be published by Springer as a volume of
          Communications in Computer and Information Science (CCIS) series,
          which will be indexed by EI, Scopus, DBLP, SCImago, etc. The
          proceedings of past PKAW events can be found here. For more details,
          please visit here.
        </p>
      </div>
      {/* Welcome to PKAW  end */}
      <div className='shadow-lg p-4 text-xl font-medium max-w-5xl space-y-6 flex flex-col items-center'>
        <h3 className='text-2xl font-bold'>News</h3>
        <hr className='w-full' />
        <div className='flex flex-col gap-4'>
          <span>
            [02 July 2025] The submission date has been extended to 01 August
            2025!
          </span>
          <span>[09 April 2025] Call for Papers has been released.</span>
        </div>
      </div>
    </div>
  );
}
