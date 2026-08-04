export const funnelLinks = {
  upsellCheckout: import.meta.env.VITE_UPSELL_CHECKOUT_URL?.trim() || 'https://zuckpay.com.br/checkout/manual-completo-de-cercas-vivas-profissional',
  downsellCheckout: import.meta.env.VITE_DOWNSELL_CHECKOUT_URL?.trim() || 'https://zuckpay.com.br/checkout/manual-completo-de-cercas-vivas-profissional-1',
  upsellOneClickProductId: import.meta.env.VITE_UPSELL_ONE_CLICK_PRODUCT_ID?.trim() || '592967',
  downsellOneClickProductId: import.meta.env.VITE_DOWNSELL_ONE_CLICK_PRODUCT_ID?.trim() || '592967',
  finalDestination: import.meta.env.VITE_FINAL_DESTINATION_URL?.trim() || '/obrigado',
  materialAccess: import.meta.env.VITE_MATERIAL_ACCESS_URL?.trim() || 'https://drive.google.com/drive/folders/1F5Difmx_Y9gVlnwi0rJFAYzwqDcu22ew?usp=sharing',
};
