import { ForwardedRef, ReactElement, ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';

export interface RendererProps {
  args?: unknown;
  children?: ReactNode;
  style?: CerberusStyle;
  ref?: ForwardedRef<unknown>;
  testID?: string;
}

/**
 * Renderer is an abstract class that renders a ReactNode for a certain Cerberus element.
 
 * @param props.args - The arguments of the renderer.
 * @param props.children - The children of the renderer.
 * @param props.style - The style of the renderer.
 * @param props.ref - The reference of the renderer.
 */
export abstract class Renderer {
  abstract preprocessProps(props: RendererProps): RendererProps;
  abstract renderElement(props: RendererProps): ReactElement;

  render(props: RendererProps): ReactElement {
    const preRenderedProps = this.preprocessProps(props);
    return this.renderElement(preRenderedProps);
  }
}
