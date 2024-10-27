import { Renderer, RendererProps } from '@react-cerberus/elements';
import { ForwardedRef, ReactNode } from 'react';
import { styleToCSS } from '../lib/styleToCSS';
import { css } from '@emotion/css';

export class SpanRenderer extends Renderer {
  renderElement(props: RendererProps): ReactNode {
    const { children, style, ref, testID } = props;
    const cssString = styleToCSS(style);
    return (
      <span
        data-testid={testID}
        ref={ref as ForwardedRef<HTMLSpanElement>}
        className={css`
          ${cssString}
        `}
      >
        {children}
      </span>
    );
  }
}
