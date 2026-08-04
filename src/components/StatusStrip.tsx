import { useEffect, useState } from 'react';
import { UPSELL_PROGRESS_DURATION_MS } from '../config/progress';
import { LeafIcon } from './Icons';

type Props = {
  label: string;
  text: string;
};

export function StatusStrip({ label, text }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cada entrada na página inicia uma nova contagem de dois minutos.
    const start = Date.now();
    let frame = 0;

    const update = () => {
      const next = Math.min(100, Math.floor(((Date.now() - start) / UPSELL_PROGRESS_DURATION_MS) * 100));
      setProgress((current) => current === next ? current : next);
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
