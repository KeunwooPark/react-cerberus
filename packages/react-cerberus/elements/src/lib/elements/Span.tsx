import { ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer/RendererPoolGateway';
import { LineBreakStrategyIOS } from '../type';

interface SpanProps {
  children?: ReactNode | ReactNode[];
  style?: CerberusStyle;
  testID?: string;
  lineBreakStrategyIOS?: LineBreakStrategyIOS;
}

/**
 * Span element is a text element that represents a span in the Cerberus system. It is similar to the HTML span element.
 * @param props.children - The children of the span element.
 * @param props.style - The style of the span element.
 * @param props.testID - The test ID of the span element.
 * @param props.lineBreakStrategyIOS - The line break strategy for iOS. It only has an effect on iOS.
 * @returns A Span element.
 */
export function Span(props: SpanProps): ReactNode {
  const { children, style, testID, lineBreakStrategyIOS } = props;
  const renderer = getRenderer('span');

  return renderer({ children, style, testID, args: { lineBreakStrategyIOS } });
}
