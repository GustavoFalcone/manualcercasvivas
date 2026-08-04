type FunnelEvent =
  | 'upsell_view'
  | 'upsell_accept'
  | 'upsell_decline'
  | 'downsell_view'
  | 'downsell_accept'
  | 'downsell_decline'
  | 'thank_you_view'
  | 'material_access_click';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackFunnelEvent(event: FunnelEvent) {
  if (import.meta.env.VITE_ENABLE_TRACKING !== 'true') return;

  window.dataLayer?.push({ event });
  window.dispatchEvent(new CustomEvent('funnel:event', { detail: { event } }));
}
