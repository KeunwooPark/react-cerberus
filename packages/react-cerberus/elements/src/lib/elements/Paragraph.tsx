import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';
import { LineBreakStrategyIOS } from '../type/CustomTypes';

interface ParagraphProps {
  children?: ReactNode;
  style?: CerberusStyle;
  lineBreakStrategyIOS?: LineBreakStrategyIOS;
}

/**
 * Paragraph element is a text element that represents a paragraph in the Cerberus system. It is similar to the HTML p element.
 * @param props.children - The children of the paragraph element.
 * @param props.style - The style of the paragraph element.
 * @param props.lineBreakStrategyIOS - The line break strategy for iOS. It only has an effect on iOS.
 * @returns A Paragraph element.
 */
export function Paragraph(props: ParagraphProps): ReactNode {
  const { children, style, lineBreakStrategyIOS } = props;

  const renderer = getRenderer('paragraph');

  return renderer({ children, style, args: { lineBreakStrategyIOS } });
}
