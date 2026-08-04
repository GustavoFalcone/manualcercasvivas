type StripeConfirmation = {
  error?: { message?: string };
  paymentIntent?: { status?: string };
};

type StripeInstance = {
  confirmCardPayment: (clientSecret: string) => Promise<StripeConfirmation>;
};

type OneClickResponse = {
  success?: boolean;
  status?: string;
  clientSecret?: string;
  message?: string;
  error?: string;
};

declare global {
  interface Window {
    Stripe?: (key: string) => StripeInstance;
  }
}

let stripeInstance: StripeInstance | null = null;
let stripeLoading: Promise<StripeInstance | null> | null = null;

function loadStripe(publicKey: string): Promise<StripeInstance | null> {
  if (stripeInstance) return Promise.resolve(stripeInstance);
  if (stripeLoading) return stripeLoading;

  stripeLoading = new Promise((resolve) => {
    const initialize = () => {
      if (!window.Stripe) {
        resolve(null);
        return;
      }
      stripeInstance = window.Stripe(publicKey);
      resolve(stripeInstance);
    };

    if (window.Stripe) {
      initialize();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.async = true;
    script.onload = initialize;
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });

  return stripeLoading;
}

async function getStripe(): Promise<StripeInstance | null> {
  try {
    const response = await fetch('https://zuckpay.com.br/conta/api/upsell.php?action=config');
    const config = await response.json() as { stripe_public_key?: string };
    return config.stripe_public_key ? loadStripe(config.stripe_public_key) : null;
  } catch {
    return null;
  }
}

export function getTransactionId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('tid') || params.get('transaction_id') || '';
}

export async function processZuckPayOneClick(productId: string) {
  const tid = getTransactionId();
  if (!tid) return { available: false as const };

  const response = await fetch('https://zuckpay.com.br/conta/api/upsell.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tid, product_id: productId }),
  });
  const data = await response.json() as OneClickResponse;

  if (data.status === 'REQUIRES_ACTION' && data.clientSecret) {
    const stripe = await getStripe();
    if (!stripe) throw new Error('Não foi possível confirmar o pagamento. Tente novamente.');
    const result = await stripe.confirmCardPayment(data.clientSecret);
    if (result.error) throw new Error(result.error.message || 'Pagamento não autorizado pelo banco.');
    if (result.paymentIntent?.status !== 'succeeded') throw new Error('Pagamento não concluído.');
    return { available: true as const };
  }

  if (data.success) return { available: true as const };
  throw new Error(data.message || data.error || 'Erro ao processar o pagamento.');
}
