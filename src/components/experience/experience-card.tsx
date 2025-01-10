import Link from 'next/link';
import { Card } from '../ui/card';

type ExperienceCardProps = {
  experience: {
    id: string;
    company: string;
    position: string;
    date: string;
    description: string;
    location: string;
    website: string; // New variable for company website
  };
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, position, date, description, location, website } = experience;

  return (
    <Card className="overflow-hidden transition-colors hover:bg-muted/50">
      <div className="p-6">
        {/* Position */}
        <h3 className="text-lg font-semibold tracking-tight hover:text-primary">{position}</h3>

        {/* Company and Location */}
        <div className="flex items-end gap-2">
          <p className="text-blue-700 font-medium hover:underline">
            <Link href={website} target="_blank" rel="noopener noreferrer">
              {company}
            </Link>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{location}</p>
        </div>

        {/* Duration */}
        <p className="mt-2 text-sm text-green-700 font-medium">Duration: {date}</p>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground text-justify">{description}</p>
      </div>
    </Card>
  );
}
