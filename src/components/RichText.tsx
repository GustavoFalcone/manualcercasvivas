import type { RichTextSegment } from '../content/funnelContent';

export function RichText({ segments }: { segments: RichTextSegment[] }) {
  return segments.map((segment, index) => {
    const needsLeadingSpace = index > 0 && !/^[,.:;!?)]/.test(segment.text);
    return (
      <span key={`${segment.text}-${index}`}>
        {needsLeadingSpace ? ' ' : ''}
        <span className={segment.tone && segment.tone !== 'default' ? `highlight-${segment.tone}` : undefined}>{segment.text}</span>
      </span>
    );
  });
}

export const RedHighlight = ({ children }: { children: React.ReactNode }) => <span className="highlight-red">{children}</span>;
export const GreenHighlight = ({ children }: { children: React.ReactNode }) => <span className="highlight-green">{children}</span>;
