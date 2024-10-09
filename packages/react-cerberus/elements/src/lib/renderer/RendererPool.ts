import { ElementType } from '../type/ElementType';
import { Renderer } from './Renderer';

/**
 * The renderer pool is a map of element types to their respective renderers.
 */
export type RendererPool = Record<ElementType, Renderer>;
