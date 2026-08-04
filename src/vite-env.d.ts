/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UPSELL_CHECKOUT_URL?: string;
  readonly VITE_DOWNSELL_CHECKOUT_URL?: string;
  readonly VITE_FINAL_DESTINATION_URL?: string;
  readonly VITE_ENABLE_TRACKING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
