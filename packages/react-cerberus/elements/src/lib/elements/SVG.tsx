import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';

/**
 * SVG is a vector element that represents a SVG in the Cerberus system. It is similar to the HTML svg element.
 * @param props.children - The children of the SVG element.
 * @param props.viewBox - The viewBox of the SVG element.
 * @param props - The rest of the props are the style of the SVG element.
 * @returns
 */
export function SVG(
  props: CerberusStyle & {
    children?: ReactNode;
    viewBox: string;
    testID?: string;
  }
): ReactNode {
  const { children, testID } = props;
  const propsWithoutChildren = { ...props };
  delete propsWithoutChildren.children;
  const renderer = getRenderer('svg');

  return renderer({ args: propsWithoutChildren, children, testID });
}
