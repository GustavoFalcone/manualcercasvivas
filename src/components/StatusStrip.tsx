import { useEffect, useState } from 'react';
import {
  UPSELL_PROGRESS_DONE_KEY,
  UPSELL_PROGRESS_DURATION_MS,
  UPSELL_PROGRESS_START_KEY,
  UPSELL_PROGRESS_VALUE_KEY,
} from '../config/progress';
import { LeafIcon } from './Icons';

type Props = {
  label: string;
  text: string;
};

function readStoredStart() {
  try {
    const stored = Number(sessionStorage.getItem(UPSELL_PROGRESS_START_KEY));
    if (Number.isFinite(stored) && stored > 0) return stored;
    const now = Date.now();
    sessionStorage.setItem(UPSELL_PROGRESS_START_KEY, String(now));
    return now;
  } catch {
    return Date.now();
  }
}

export function StatusStrip({ label, text }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = readStoredStart();
    let frame = 0;

    const update = () => {
      const next = Math.min(100, Math.floor(((Date.now() - start) / UPSELL_PROGRESS_DURATION_MS) * 100));
      setProgress((current) => current === next ? current : next);

      try {
        sessionStorage.setItem(UPSELL_PROGRESS_VALUE_KEY, String(next));
        if (next === 100) sessionStorage.setItem(UPSELL_PROGRESS_DONE_KEY, 'true');
      } catch {
        // A barra continua funcionando mesmo quando o armazenamento está indisponível.
      }

      if (next < 100) frame = requestAnimationFrame(update);
    };

    update();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="status-strip" aria-labelledby="upsell-status-text">
      <div className="status-topline">
        <span className="status-label"><LeafIcon /> {label}</span>
        <strong>{progress}%</strong>
      </div>
      <p id="upsell-status-text">{text}</p>
      <div
        className="stage-line"
        role="progressbar"
        aria-label="Progresso da etapa final do pedido"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <span style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}
