import { Link, LinkProps } from 'react-scroll';

interface Props extends LinkProps {
  to: string;
  children: React.ReactNode | string;
}

export function SmoothScroll({ to, children }: Props) {
  return (
    <Link to={to} spy smooth offset={-100} duration={750}>
      {children}
    </Link>
  );
}
