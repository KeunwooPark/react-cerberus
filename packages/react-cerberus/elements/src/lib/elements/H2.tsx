import { ReactNode } from 'react';
import { getRenderer } from '../renderer';
import { CerberusStyle } from '../style/CerberusStyle';
import { LineBreakStrategyIOS } from '../type/CustomTypes';

export interface H2Props {
  children?: ReactNode;
  style?: CerberusStyle;
  lineBreakStrategyIOS?: LineBreakStrategyIOS;
}

/**
 * H2 element is a text element that represents the second largest heading in the Cerberus system. It is similar to the HTML h2 element.
 * @param props.children - The children of the h2 element.
 * @param props.style - The style of the h2 element.
 * @param props.lineBreakStrategyIOS - The line break strategy for iOS. It only has an effect on iOS.
 * @returns A H2 element.
 */
export function H2(props: H2Props): ReactNode {
  const { children, style, lineBreakStrategyIOS } = props;
  const renderer = getRenderer('h2');

  return renderer({ children, style, args: { lineBreakStrategyIOS } });
}
