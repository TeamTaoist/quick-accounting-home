import { memo, SVGProps } from 'react';

const Rectangle6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 682 409' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 20C0 8.95431 8.95431 0 20 0H662C673.046 0 682 8.95431 682 20V204.5V389C682 400.046 673.046 409 662 409H20C8.95429 409 0 400.046 0 389V20Z'
      fill='black'
      fillOpacity={0.1}
    />
  </svg>
);
const Memo = memo(Rectangle6Icon);
export { Memo as Rectangle6Icon };
