import { Renderer, RendererProps } from '@react-cerberus/elements';

export abstract class NativeRenderer extends Renderer {
  preprocessProps(props: RendererProps): RendererProps {
    return props;
  }
}
