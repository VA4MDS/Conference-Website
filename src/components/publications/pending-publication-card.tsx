import { Card } from '../ui/card';

type PendingPublicationPropsType = {
  paper: {
    title: string;
    journal: string;
    status: string;
    revisionPhase: string;
    authorPosition: string;
  };
};

export default function PendingPublicationCard({
  paper,
}: PendingPublicationPropsType) {
  const { title, journal, status, revisionPhase, authorPosition } = paper;

  // Highlight Scopus rankings and specific journal names
  const highlightKeywords = (text: string) => {
    const highlightedText = text
      .replace(/(Scopus\s*:\s*Q[1-3])/gi, `<strong class="text-green-600">$1</strong>`) // Highlight Scopus Q1-Q3
      .replace(/(IEEE|Springer|Nature|Elsevier)/gi, `<strong class="text-blue-600">$1</strong>`); // Highlight journal names
    console.log('Highlighted Text:', highlightedText); // Debugging step
    return highlightedText;
  };

  return (
    <Card className="overflow-hidden transition-colors hover:bg-muted/50">
      <div className="p-6">
        {/* Title */}
        <h3 className="font-semibold tracking-tight hover:text-primary">{title}</h3>

        {/* Compact Field Layout */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* Journal and Status */}
          <p
            className="text-sm text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: `<span class='font-medium'>Journal:</span> ${highlightKeywords(journal)}`,
            }}
          ></p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Status:</span> {status}
          </p>

          {/* Revision Phase and Author Position */}
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Revision Phase:</span> {revisionPhase}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Author Position:</span> {authorPosition}
          </p>
        </div>
      </div>
    </Card>
  );
}
