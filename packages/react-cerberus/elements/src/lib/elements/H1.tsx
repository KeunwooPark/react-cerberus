import { ReactNode } from 'react';
import { getRenderer } from '../renderer';
import { CerberusStyle } from '../style/CerberusStyle';
import { LineBreakStrategyIOS } from '../type/CustomTypes';

export interface H1Props {
  children?: ReactNode;
  style?: CerberusStyle;
  lineBreakStrategyIOS?: LineBreakStrategyIOS;
}

/**
 * H1 element is a text element that represents the largest heading in the Cerberus system. It is similar to the HTML h1 element.
 * @param props.children - The children of the h1 element.
 * @param props.style - The style of the h1 element.
 * @param props.lineBreakStrategyIOS - The line break strategy for iOS. It only has an effect on iOS.
 * @returns A H1 element.
 */
export function H1(props: H1Props): ReactNode {
  const { children, style, lineBreakStrategyIOS } = props;
  const renderer = getRenderer('h1');

  return renderer({ children, style, args: { lineBreakStrategyIOS } });
}
