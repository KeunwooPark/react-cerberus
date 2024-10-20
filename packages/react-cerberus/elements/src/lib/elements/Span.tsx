import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer';

interface SpanProps {
  children?: ReactNode;
  style?: CerberusStyle;
  testID?: string;
}
/**
 * Span element is an inline container element that can contain other elements. It is similar to the HTML span element.
 *
 * @param props.children - The children of the span element.
 * @param props.style - The style of the span element.
 * @param props.testID - The testID of the span element.
 * @param ref - The reference of the span element.
 */
function SpanElement(props: SpanProps, ref: ForwardedRef<unknown>) {
  const { children, style, testID } = props;
  const renderer = getRenderer('span');
  return renderer({ children, style, ref, testID });
}

export const Span = forwardRef(SpanElement);
