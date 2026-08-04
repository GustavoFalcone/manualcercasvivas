import type { ReactNode } from 'react';
import { CheckIcon, LockIcon, ShieldIcon } from './Icons';
import { CheckoutButton } from './CheckoutButton';
import { formatBRL } from '../config/pricing';

type Props = {
  context: string;
  badge: string;
  oldPrice: number | null;
  currentPrice: number;
  currentPrefix?: string;
  paymentText: string;
  trustItems: readonly string[];
  ctaText: string;
  ctaMicrocopy: string;
  target: string;
  onAccept: () => void;
  oneClickProductId?: string;
  details?: ReactNode;
  visual?: { src: string; alt: string };
};

export function PriceCard(props: Props) {
  return (
    <section className="price-card" aria-label="Condição da oferta">
      <span className="price-badge">{props.badge}</span>
      {props.visual && <img className="price-product-visual" src={props.visual.src} alt={props.visual.alt} width="1080" height="1080" loading="lazy" decoding="async" />}
      {props.context && <p className="price-context">{props.context}</p>}
      {props.oldPrice !== null && <p className="old-price">De <s>{formatBRL(props.oldPrice)}</s></p>}
      <div className="current-offer">
        {props.currentPrefix && <span className="current-prefix">{props.currentPrefix}</span>}
        <div className="current-price"><span>R$</span><strong>{formatBRL(props.currentPrice).replace('R$', '').trim()}</strong></div>
      </div>
      <p className="payment-text">{props.paymentText}</p>
      {props.details}
      <CheckoutButton label={props.ctaText} target={props.target} onBeforeNavigate={props.onAccept} oneClickProductId={props.oneClickProductId} />
      <p className="cta-microcopy"><LockIcon /> {props.ctaMicrocopy}</p>
      {props.trustItems.length > 0 && (
        <div className="trust-row">
          {props.trustItems.map((item, index) => <span key={item}>{index === 0 ? <ShieldIcon /> : <CheckIcon />} {item}</span>)}
        </div>
      )}
    </section>
  );
}
