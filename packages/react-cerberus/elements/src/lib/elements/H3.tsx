import { ReactNode } from 'react';
import { getRenderer } from '../renderer';
import { CerberusStyle } from '../style/CerberusStyle';
import { LineBreakStrategyIOS } from '../type/CustomTypes';

export interface H3Props {
  children?: ReactNode;
  style?: CerberusStyle;
  lineBreakStrategyIOS?: LineBreakStrategyIOS;
}

/**
 * H3 element is a text element that represents the third largest heading in the Cerberus system. It is similar to the HTML h3 element.
 * @param props.children - The children of the h3 element.
 * @param props.style - The style of the h3 element.
 * @param props.lineBreakStrategyIOS - The line break strategy for iOS. It only has an effect on iOS.
 * @returns A H3 element.
 */
export function H3(props: H3Props): ReactNode {
  const { children, style, lineBreakStrategyIOS } = props;
  const renderer = getRenderer('h3');

  return renderer({ children, style, args: { lineBreakStrategyIOS } });
}
