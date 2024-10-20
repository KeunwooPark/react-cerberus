import {
  RendererPool,
  setPlatform,
  setRendererPool,
} from '@react-cerberus/elements';
import { DivRenderer } from './renderer';
import { SpanRenderer } from './renderer/SpanRenderer';

export function initReactCereberusWeb() {
  const rendererPool: RendererPool = {
    div: DivRenderer,
    span: SpanRenderer,
  };

  setRendererPool(rendererPool);
  setPlatform('web');
}
