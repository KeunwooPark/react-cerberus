import { ReactNode } from 'react';
import { getRenderer } from '../renderer';
import { CerberusStyle } from '../style/CerberusStyle';

/**
 * Path is a vector element that represents a path in the Cerberus system. It is similar to the SVG path element.
 * @param props.children - The children of the path element.
 * @param props.d - The path data of the path element.
 * @param props - The rest of the props are the style of the path element.
 * @returns
 */
export function Path(
  props: CerberusStyle & { children?: ReactNode; d: string }
): ReactNode {
  const { children } = props;
  const propsWithoutChildren = { ...props };
  delete propsWithoutChildren.children;
  const renderer = getRenderer('path');

  return renderer({ args: propsWithoutChildren, children });
}
