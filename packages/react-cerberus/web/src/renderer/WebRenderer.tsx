import { Renderer, RendererProps } from '@react-cerberus/elements';
import { styleToCSS } from '../lib/styleToCSS';
import { css } from '@emotion/css';

export interface WebRendererProps extends RendererProps {
  className?: string;
}

export abstract class WebRenderer extends Renderer {
  preprocessProps(props: RendererProps): RendererProps {
    const newProps = { ...props } as WebRendererProps;

    if (newProps.style) {
      newProps.className = css`
        ${styleToCSS(newProps.style)}
      `;
      delete newProps.style;
    }
    return newProps;
  }
}
