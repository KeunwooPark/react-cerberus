import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';
import { getRenderer } from '../renderer/RendererPoolGateway';

interface DivProps {
  children?: ReactNode;
  style?: CerberusStyle;
  testID?: string;
}

/**
 * Div element is a container element that can contain other elements. It is similar to the HTML div element and View element in React Native.
 * @param props.children - The children of the div element.
 * @param props.style - The style of the div element.
 * @param props.testID - The testID of the div element.
 * @param ref - The reference of the div element.
 * @returns A Div element.
 */
function DivElement(props: DivProps, ref: ForwardedRef<unknown>) {
  const { children, style, testID } = props;
  const renderer = getRenderer('div');
  return renderer.renderElement({ children, style, ref, testID });
}

export const Div = forwardRef(DivElement);
