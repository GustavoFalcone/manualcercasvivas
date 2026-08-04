import { useEffect } from 'react';
import { CheckIcon, LeafIcon } from '../components/Icons';
import { funnelLinks } from '../config/links';
import { withCurrentQuery } from '../utils/query';
import { trackFunnelEvent } from '../utils/tracking';

export function ThankYouPage() {
  useEffect(() => {
    document.title = 'Compra concluída | Poda Ornamental';
    trackFunnelEvent('thank_you_view');
  }, []);

  return (
    <main className="funnel-page thank-you-page">
      <div className="background-leaf leaf-one" aria-hidden="true"><LeafIcon /></div>
      <section className="thank-you-card reveal-item" aria-labelledby="thank-you-title">
        <span className="thank-you-icon"><CheckIcon /></span>
        <p className="thank-you-eyebrow">COMPRA CONCLUÍDA</p>
        <h1 id="thank-you-title">Obrigado pela sua compra.</h1>
        <p>Seu pedido foi concluído e o seu material já está disponível para acesso.</p>
        <a className="primary-cta thank-you-cta" href={withCurrentQuery(funnelLinks.materialAccess)} onClick={() => trackFunnelEvent('material_access_click')}>
          <span>ACESSAR MEU MATERIAL</span>
        </a>
      </section>
    </main>
  );
}
