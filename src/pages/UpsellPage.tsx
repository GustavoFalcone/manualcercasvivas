import { useEffect } from 'react';
import { ProductCarousel } from '../components/ProductCarousel';
import { PriceCard } from '../components/PriceCard';
import { RichText } from '../components/RichText';
import { StatusStrip } from '../components/StatusStrip';
import { AlignmentIcon, CorrectionIcon, CurveIcon, LeafIcon, ResizeIcon } from '../components/Icons';
import { upsellContent } from '../content/funnelContent';
import { pricing } from '../config/pricing';
import { offerVisual } from '../config/assets';
import { funnelLinks } from '../config/links';
import { withCurrentQuery } from '../utils/query';
import { trackFunnelEvent } from '../utils/tracking';

const benefitIcons = [AlignmentIcon, CorrectionIcon, ResizeIcon, CurveIcon];

export function UpsellPage() {
  useEffect(() => {
    document.title = 'Manual de Cercas-Vivas | Condição especial';
    trackFunnelEvent('upsell_view');
  }, []);

  return (
    <main className="funnel-page upsell-page">
      <div className="background-leaf leaf-one" aria-hidden="true"><LeafIcon /></div>
      <div className="background-leaf leaf-two" aria-hidden="true"><LeafIcon /></div>
      <div className="funnel-shell">
        <StatusStrip label={upsellContent.statusLabel} text={upsellContent.statusText} />

        <header className="hero-block reveal-item">
          <div className="product-kicker"><span /> {upsellContent.productEyebrow} <span /></div>
          <h1><RichText segments={upsellContent.headline} /></h1>
          <p className="hero-subheadline"><RichText segments={upsellContent.subheadline} /></p>
        </header>

        <section className="carousel-section reveal-item" aria-label={upsellContent.carouselEyebrow}>
          <p className="section-eyebrow">{upsellContent.carouselEyebrow}</p>
          <ProductCarousel />
        </section>

        <section className="deliverable-section reveal-item">
          <div className="section-heading">
            <div>
              <p className="deliverable-eyebrow">{upsellContent.deliverableEyebrow}</p>
              <h2>{upsellContent.deliverableTitle}</h2>
            </div>
          </div>
          <div className="deliverable-copy">
            {upsellContent.deliverableParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="benefit-grid">
            {upsellContent.benefitItems.map((item, index) => {
              const BenefitIcon = benefitIcons[index];
              return (
                <div className="benefit-item" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <BenefitIcon />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </section>

        <PriceCard
          context={upsellContent.priceContext}
          badge={upsellContent.priceBadge}
          oldPrice={pricing.upsell.oldPrice}
          currentPrice={pricing.upsell.currentPrice}
          paymentText={upsellContent.paymentText}
          trustItems={upsellContent.trustItems}
          ctaText={upsellContent.ctaText}
          ctaMicrocopy={upsellContent.ctaMicrocopy}
          visual={offerVisual}
          target={funnelLinks.upsellCheckout}
          oneClickProductId={funnelLinks.upsellOneClickProductId}
          onAccept={() => trackFunnelEvent('upsell_accept')}
        />

        <a className="decline-link" href={withCurrentQuery('/downsell')} onClick={() => trackFunnelEvent('upsell_decline')}>
          {upsellContent.declineText}
        </a>
      </div>
    </main>
  );
}
