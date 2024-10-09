import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';

export function Mask(
  props: CerberusStyle & { id: string; fill: string; children?: ReactNode }
) {
  const { id, fill, children, ...style } = props;
  const renderer = getRenderer('mask');

  return renderer({
    style,
    children,
    args: { id, fill },
  });
}
