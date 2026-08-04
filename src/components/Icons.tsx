import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export const LeafIcon = (props: IconProps) => <BaseIcon {...props}><path d="M19.5 4.5C12 4.5 6.5 8 6.5 14.5c0 3 2 5 5 5 6.5 0 8-7 8-15Z"/><path d="M4.5 20c2.5-5.5 6.5-9 11.5-11.5"/></BaseIcon>;
export const CheckIcon = (props: IconProps) => <BaseIcon {...props}><path d="m5 12 4 4L19 6"/></BaseIcon>;
export const ShieldIcon = (props: IconProps) => <BaseIcon {...props}><path d="M12 3 4.8 6v5.3c0 4.5 3 8.2 7.2 9.7 4.2-1.5 7.2-5.2 7.2-9.7V6L12 3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/></BaseIcon>;
export const ArrowIcon = (props: IconProps) => <BaseIcon {...props}><path d="m9 18 6-6-6-6"/></BaseIcon>;
export const ExpandIcon = (props: IconProps) => <BaseIcon {...props}><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5"/></BaseIcon>;
export const CloseIcon = (props: IconProps) => <BaseIcon {...props}><path d="m6 6 12 12M18 6 6 18"/></BaseIcon>;
export const LockIcon = (props: IconProps) => <BaseIcon {...props}><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></BaseIcon>;
export const AlignmentIcon = (props: IconProps) => <BaseIcon {...props}><path d="M4 6h16M4 18h16M7 10h10M7 14h10"/><path d="M4 3v18M20 3v18"/></BaseIcon>;
export const CorrectionIcon = (props: IconProps) => <BaseIcon {...props}><path d="M3 15c3-6 5 2 8-4s5 2 10-4"/><path d="M4 20h16M6 18v4M18 18v4"/></BaseIcon>;
export const ResizeIcon = (props: IconProps) => <BaseIcon {...props}><path d="M7 3v18M17 3v18M3 7h18M3 17h18"/><path d="m4 7 3-3 3 3M14 17l3 3 3-3"/></BaseIcon>;
export const CurveIcon = (props: IconProps) => <BaseIcon {...props}><path d="M4 18c0-8 4-12 12-12h4"/><path d="m17 3 3 3-3 3M5 21l-2-3 3-2"/></BaseIcon>;
