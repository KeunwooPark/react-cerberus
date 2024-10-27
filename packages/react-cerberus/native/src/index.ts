import {
  RendererPool,
  setPlatform,
  setRendererPool,
} from '@react-cerberus/elements';
import { TextRenderer } from './renderer/TextRenderer';
import { ViewRenderer } from './renderer/ViewRenderer';

export function initReactCerberusNative(platform: 'ios' | 'android') {
  const rendererPool: RendererPool = {
    div: new ViewRenderer(),
    span: new TextRenderer(),
  };

  setRendererPool(rendererPool);
  setPlatform(platform);
}
