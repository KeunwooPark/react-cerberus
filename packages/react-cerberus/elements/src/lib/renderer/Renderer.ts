import { ForwardedRef, ReactNode } from 'react';
import { CerberusStyle } from '../style/CerberusStyle';

export interface RendererProps {
  args?: unknown;
  children?: ReactNode;
  style?: CerberusStyle;
  ref?: ForwardedRef<unknown>;
  testID?: string;
}

/**
 * Renderer is a function that returns a ReactNode for a certain Cerberus element.
 
 * @param props.args - The arguments of the renderer.
 * @param props.children - The children of the renderer.
 * @param props.style - The style of the renderer.
 * @param props.ref - The reference of the renderer.
 */
export type Renderer = (props: RendererProps) => ReactNode;
