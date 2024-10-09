import {
  RendererPool,
  setPlatform,
  setRendererPool,
} from '@react-cerberus/elements';
import { DivRenderer } from './renderer';

export function initReactCereberusWeb() {
  const rendererPool: RendererPool = {
    div: DivRenderer,
  };

  setRendererPool(rendererPool);
  setPlatform('web');
}
