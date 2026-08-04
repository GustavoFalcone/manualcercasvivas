import { useEffect } from 'react';
import { PriceCard } from '../components/PriceCard';
import { RichText } from '../components/RichText';
import { CheckIcon, LeafIcon } from '../components/Icons';
import { downsellContent } from '../content/funnelContent';
import { downsellMockup } from '../config/assets';
import { pricing } from '../config/pricing';
import { funnelLinks } from '../config/links';
import { withCurrentQuery } from '../utils/query';
import { trackFunnelEvent } from '../utils/tracking';

export function DownsellPage() {
  useEffect(() => {
    document.title = 'Manual de Cercas-Vivas | Última condição';
    trackFunnelEvent('downsell_view');
  }, []);

  function handleFinalDecline(event: React.MouseEvent<HTMLAnchorElement>) {
    trackFunnelEvent('downsell_decline');
    if (!funnelLinks.finalDestination) event.preventDefault();
  }

  const details = (
    <div className="downsell-details">
      <p>{downsellContent.description}</p>
      <ul>
        {downsellContent.benefitItems.map((item) => <li key={item}><CheckIcon /> <span>{item}</span></li>)}
      </ul>
    </div>
  );

  return (
    <main className="funnel-page downsell-page">
      <div className="background-leaf leaf-one" aria-hidden="true"><LeafIcon /></div>
      <div className="funnel-shell downsell-shell">
        <header className="hero-block downsell-hero reveal-item">
          <span className="condition-mark" aria-hidden="true" />
          <h1><RichText segments={downsellContent.headline} /></h1>
          <p className="hero-subheadline"><RichText segments={downsellContent.subheadline} /></p>
        </header>

        <section className="mockup-stage reveal-item" aria-label="Prévia do Manual Completo de Cercas-Vivas Profissionais">
          <div className="mockup-glow" aria-hidden="true" />
          <img src={downsellMockup.src} alt={downsellMockup.alt} width="1080" height="1080" loading="eager" decoding="async" />
        </section>

        <PriceCard
          context=""
          badge={downsellContent.priceBadge}
          oldPrice={pricing.downsell.oldPrice}
          currentPrefix={downsellContent.priceContext}
          currentPrice={pricing.downsell.currentPrice}
          paymentText={downsellContent.paymentText}
          trustItems={[]}
          ctaText={downsellContent.ctaText}
          ctaMicrocopy={downsellContent.ctaMicrocopy}
          target={funnelLinks.downsellCheckout}
          oneClickProductId={funnelLinks.downsellOneClickProductId}
          onAccept={() => trackFunnelEvent('downsell_accept')}
          details={details}
        />

        <a
          className="decline-link final-decline"
          href={funnelLinks.finalDestination ? withCurrentQuery(funnelLinks.finalDestination) : '#destino-nao-configurado'}
          onClick={handleFinalDecline}
        >
          {downsellContent.declineText}
        </a>
        {!funnelLinks.finalDestination && import.meta.env.DEV && <p className="config-warning">Destino final ainda não configurado no ambiente local.</p>}
      </div>
    </main>
  );
}
