import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';

interface LinkProps {
  children?: ReactNode;
  href: string;
  style?: CerberusStyle;
}
export function Link(props: LinkProps) {
  const { children, href, style } = props;

  const renderer = getRenderer('link');

  return renderer({ children, style, args: { href } });
}
