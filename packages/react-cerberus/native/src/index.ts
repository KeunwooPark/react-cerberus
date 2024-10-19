import {
  RendererPool,
  setPlatform,
  setRendererPool,
} from '@react-cerberus/elements';
import { ViewRenderer } from './renderer';

export * from './lib/native';
export * from './renderer';

export function initReactCerberusNative(platform: 'ios' | 'android') {
  const rendererPool: RendererPool = {
    div: ViewRenderer,
  };

  setRendererPool(rendererPool);

  setPlatform(platform);
}
