import {
  RendererPool,
  setPlatform,
  setRendererPool,
} from '@react-cerberus/elements';
import { ViewRenderer } from './renderer';
import { TextRenderer } from './renderer/TextRenderer';

export * from './renderer';

export function initReactCerberusNative(platform: 'ios' | 'android') {
  const rendererPool: RendererPool = {
    div: new ViewRenderer(),
    span: new TextRenderer(),
  };

  setRendererPool(rendererPool);

  setPlatform(platform);
}
