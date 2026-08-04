# Funil Upsell Cercas-Vivas

Projeto independente para o funil pós-compra do **Manual Completo de Cercas-Vivas Profissionais**.

## Rotas

- `/upsell`
- `/downsell`
- `/obrigado`

As duas rotas preservam a query string completa, incluindo UTMs e parâmetros desconhecidos.

## Rodar localmente

```powershell
npm install
npm run dev
```

Build de produção:

```powershell
npm run build
```

## Onde alterar

- Copy: `src/content/funnelContent.ts`
- Preços: `src/config/pricing.ts`
- Duração e chaves do progresso: `src/config/progress.ts`
- Links: variáveis de ambiente documentadas em `.env.example`
- Lista e textos alternativos das imagens: `src/config/assets.ts`
- Funções de rastreamento: `src/utils/tracking.ts`
- Imagens do carrossel: `public/assets/upsell/carousel/`
- Mockup do downsell: `public/assets/downsell/manual-cercas-vivas-mockup.webp`

O CTA do downsell é montado a partir de `pricing.downsell.currentPrice`. Para mudar o valor, altere somente essa configuração.

## Links reais

Crie um arquivo `.env` a partir do `.env.example` e preencha:

```dotenv
VITE_UPSELL_CHECKOUT_URL=
VITE_DOWNSELL_CHECKOUT_URL=
VITE_FINAL_DESTINATION_URL=
VITE_MATERIAL_ACCESS_URL=
```

Sem essas URLs, os botões permanecem na página e mostram um aviso apenas no ambiente local. Nenhum destino fictício é usado.

## Barra de progresso

A barra do upsell dura 120 segundos. O início, o valor atual e o estado concluído são persistidos no `sessionStorage`, portanto o progresso continua depois de atualizar a página ou visitar o downsell e retornar durante a mesma sessão.

## Carrossel infinito

O carrossel reutiliza a implementação da landing page principal: duas faixas horizontais em sentidos opostos, grupos triplicados e animações lineares de 22 segundos. Não há setas ou paginação. A animação é desativada quando o navegador solicita redução de movimento.

O carrossel usa sete páginas reais do PDF. Para recriar os WebPs a partir dos renders do manual:

```powershell
python scripts/extract_carousel.py
```

## Rastreamento

O ambiente local usa `VITE_ENABLE_TRACKING=false`. Os eventos existentes permanecem em `src/utils/tracking.ts`:

- `upsell_view`
- `upsell_accept`
- `upsell_decline`
- `downsell_view`
- `downsell_accept`
- `downsell_decline`

Defina `VITE_ENABLE_TRACKING=true` somente após integrar o provedor real. Nenhum ID ou pixel foi inventado.

## Mockup do downsell

O mockup definitivo não foi gerado. Ao receber o arquivo, salve-o no caminho indicado e altere `available` para `true` em `src/config/assets.ts`. Até lá, o desenvolvimento exibe uma identificação discreta; o build de produção mostra apenas a representação visual do manual, sem texto técnico ou caminho de arquivo.
