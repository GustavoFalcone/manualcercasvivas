import { formatBRL, pricing } from '../config/pricing';

export type HighlightTone = 'default' | 'red' | 'green' | 'strong';

export type RichTextSegment = {
  text: string;
  tone?: HighlightTone;
};

const downsellPrice = formatBRL(pricing.downsell.currentPrice);

export const upsellContent = {
  statusLabel: 'Etapa final do pedido',
  statusText: 'Seu pedido foi recebido. Enquanto finalizamos seu acesso, veja esta condição especial.',
  productEyebrow: 'MANUAL COMPLETO DE CERCAS-VIVAS PROFISSIONAIS',
  headline: [
    { text: 'Antes de finalizar, leve também o manual que mostra como alinhar, corrigir e manter cercas-vivas' },
    { text: 'com acabamento profissional', tone: 'red' },
  ] satisfies RichTextSegment[],
  subheadline: [
    { text: 'Você já garantiu as +120 técnicas de poda ornamental. Agora pode adicionar uma' },
    { text: 'especialização visual', tone: 'green' },
    { text: 'focada em' },
    { text: 'um dos serviços mais comuns e visíveis da jardinagem.', tone: 'strong' },
  ] satisfies RichTextSegment[],
  carouselEyebrow: 'VEJA O MANUAL POR DENTRO',
  deliverableEyebrow: 'O QUE VOCÊ RECEBE',
  deliverableTitle: 'Um guia completo para executar cercas-vivas do início ao acabamento',
  deliverableParagraphs: [
    'Este manual reúne orientações visuais para analisar, marcar, alinhar, reduzir, corrigir e revisar cercas-vivas sem depender apenas do improviso ou do corte feito no olho.',
    'Você consulta a situação encontrada, entende o que deve ser ajustado e acompanha diagramas que mostram o formato, a linha de corte e os pontos que precisam de mais atenção.',
  ],
  benefitItems: [
    'Alinhamento de topo e laterais',
    'Correção de ondas, falhas e deformações',
    'Redução de altura e largura com mais controle',
    'Cantos, curvas, acabamento e manutenção',
  ],
  priceBadge: 'CONDIÇÃO ESPECIAL DE PÓS-COMPRA',
  priceContext: 'Adicione agora o manual completo à sua compra por apenas:',
  paymentText: 'Pagamento único',
  ctaText: 'SIM, QUERO ADICIONAR O MANUAL',
  ctaMicrocopy: 'Acesso digital imediato e sem mensalidades',
  trustItems: ['Acesso vitalício', 'Material visual', 'Pagamento único'],
  declineText: 'Não, vou continuar apenas com as +120 técnicas',
};

export const downsellContent = {
  headline: [
    { text: 'Calma,' },
    { text: 'não saia ainda', tone: 'red' },
    { text: ': leve o mesmo manual por' },
    { text: 'uma condição ainda menor', tone: 'green' },
  ] satisfies RichTextSegment[],
  subheadline: [
    { text: 'Como você decidiu não adicionar o manual na etapa anterior, liberamos uma última oportunidade para incluí-lo agora por apenas' },
    { text: `${downsellPrice}.`, tone: 'strong' },
  ] satisfies RichTextSegment[],
  priceBadge: 'ÚLTIMA CONDIÇÃO',
  priceContext: 'Por',
  description: 'Receba o Manual Completo de Cercas-Vivas Profissionais com orientações visuais para alinhar, corrigir, reduzir e manter cercas-vivas com um acabamento mais uniforme.',
  benefitItems: [
    'Execução do início ao acabamento',
    'Correções e reduções explicadas visualmente',
    'Acesso digital imediato',
  ],
  paymentText: 'Pagamento único',
  ctaText: `SIM, QUERO APROVEITAR POR ${downsellPrice}`,
  ctaMicrocopy: 'Adicionar agora com pagamento único',
  declineText: 'Não, quero seguir sem o manual',
};
