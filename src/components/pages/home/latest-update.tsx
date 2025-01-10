import latestUpdateData from '@/lib/json/latest-update.json';

export default function LatestUpdate() {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tight">Latest Update</h2>
      <div>
        <ul className="space-y-4 list-disc ml-6">
          {latestUpdateData.map((update, index) => (
            <li key={index} className="text-gray-600">
              <div>
                {/* Title */}
                <h3 className="text-lg font-semibold">
                  {update.title || 'No Title Available'}
                </h3>

                {/* Description */}
                {update.description && (
                  <p className="text-sm text-muted-foreground">
                    {update.description}
                  </p>
                )}

                {/* Image */}
                {update.image && (
                  <img
                    src={update.image}
                    alt={`Update ${update.id}`}
                    className="mt-2 w-32 h-32 object-cover rounded-md"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
