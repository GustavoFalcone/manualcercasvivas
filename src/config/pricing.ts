export const pricing = {
  upsell: {
    oldPrice: null as number | null,
    currentPrice: 19.9,
  },
  downsell: {
    oldPrice: 19.9,
    currentPrice: 12.9,
  },
} as const;

export function formatBRL(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
}
