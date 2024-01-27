import { memo, SVGProps } from 'react';

const IconArrowIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.977 6.96132L18.0712 11.9337M18.0712 11.9337L12.977 16.9061M18.0712 11.9337L6.0636 11.9337'
      stroke='#FFA028'
      strokeWidth={2}
      strokeLinecap='square'
    />
  </svg>
);
const Memo = memo(IconArrowIcon2);
export { Memo as IconArrowIcon2 };
