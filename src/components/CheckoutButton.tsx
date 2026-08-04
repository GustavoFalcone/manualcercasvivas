import { useState } from 'react';
import { ArrowIcon } from './Icons';
import { withCurrentQuery } from '../utils/query';
import { getTransactionId, processZuckPayOneClick } from '../utils/zuckpayOneClick';

type Props = {
  label: string;
  target: string;
  onBeforeNavigate: () => void;
  oneClickProductId?: string;
};

export function CheckoutButton({ label, target, onBeforeNavigate, oneClickProductId }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [completed, setCompleted] = useState(false);

  async function handleClick() {
    if (loading || completed) return;
    setError('');
    onBeforeNavigate();

    if (oneClickProductId && getTransactionId()) {
      setLoading(true);
      try {
        await processZuckPayOneClick(oneClickProductId);
        setCompleted(true);
      } catch (oneClickError) {
        setError(oneClickError instanceof Error ? oneClickError.message : 'Não foi possível processar o pagamento. Tente novamente.');
      } finally {
        setLoading(false);
      }
      return;
    }

    if (!target) {
      setError('URL de checkout não configurada no ambiente local.');
      return;
    }

    setLoading(true);
    window.location.assign(withCurrentQuery(target));
  }

  return (
    <>
      <button className="primary-cta" type="button" onClick={handleClick} disabled={loading || completed} aria-busy={loading}>
        <span>{completed ? '✓ ADICIONADO!' : loading ? (oneClickProductId ? 'PROCESSANDO...' : 'REDIRECIONANDO') : label}</span>
        <ArrowIcon />
      </button>
      {error && <p className="config-warning" role="alert">{error}</p>}
    </>
  );
}
