import { DownsellPage } from './pages/DownsellPage';
import { UpsellPage } from './pages/UpsellPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { withCurrentQuery } from './utils/query';

export function App() {
  const route = window.location.pathname.replace(/\/+$/, '') || '/';

  if (route === '/downsell') return <DownsellPage />;
  if (route === '/obrigado') return <ThankYouPage />;
  if (route === '/upsell') return <UpsellPage />;

  window.history.replaceState({}, '', withCurrentQuery('/upsell'));
  return <UpsellPage />;
}
