import TalksCard from './talks-card';
import VirtualTalksData from '@/lib/json/virtual.json'; // Data for virtual talks
import PhysicalTalksData from '@/lib/json/talks.json'; // Data for physical talks

export default function Talks() {
  return (
    <div className="space-y-8">
      {/* Virtual Talks Section */}
      <h2 className="text-3xl font-bold tracking-tight">Virtual Talks</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {VirtualTalksData && VirtualTalksData.length > 0 ? (
          VirtualTalksData.map((talk, index) => <TalksCard key={index} talk={talk} />)
        ) : (
          <p className="text-sm text-muted-foreground">No virtual talks available at the moment.</p>
        )}
      </div>

      {/* Physical Talks Section */}
      <h2 className="text-3xl font-bold tracking-tight">Physical Talks</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PhysicalTalksData && PhysicalTalksData.length > 0 ? (
          PhysicalTalksData.map((talk, index) => <TalksCard key={index} talk={talk} />)
        ) : (
          <p className="text-sm text-muted-foreground">No physical talks available at the moment.</p>
        )}
      </div>
    </div>
  );
}
