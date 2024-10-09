import { ElementType } from '../type/ElementType';
import { RendererPool } from './RendererPool';

/**
 * The renderer pool is a map of element types to their respective renderers.
 *
 * This is a global reference for getting the renderer pool based on the platform.
 * `react-cerberus/web` and `react-cerberus/native` set the renderer pool according to its platform.
 *
 * It meant to be set dynamically to avoid cross-platform imports, such as importing native codes in the web platform.
 * If that happens, the application might crash.
 */
export let rendererPool: RendererPool;
export let platform: 'ios' | 'android' | 'web';

/**
 * Sets the platform.
 * @param platform - The platform.
 */
export function setPlatform(_platform: 'ios' | 'android' | 'web') {
  platform = _platform;
}

export function getPlatForm(): 'ios' | 'android' | 'web' {
  if (!platform) {
    throw new Error(
      'Platform is not set. Please initialize Cerebrus for the platform.'
    );
  }
  return platform;
}

/**
 * Sets the renderer pool.
 * @param pool - The renderer pool.
 */
export function setRendererPool(pool: RendererPool) {
  rendererPool = pool;
}

/**
 * Gets the renderer pool.
 * @returns The renderer pool.
 */
export function getRendererPool() {
  return rendererPool;
}

/**
 * Gets the renderer based on the element type.
 * @param elementType - The element type.
 * @returns The renderer.
 */
export function getRenderer(elementType: ElementType) {
  if (!rendererPool) {
    throw new Error(
      'Renderer pool is not set. Please initialize Cerebrus for the platform.'
    );
  }
  return rendererPool[elementType];
}
