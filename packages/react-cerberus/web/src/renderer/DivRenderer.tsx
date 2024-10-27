import { Renderer, RendererProps } from '@react-cerberus/elements';
import { ForwardedRef, ReactNode } from 'react';
import { styleToCSS } from '../lib/styleToCSS';
import { css } from '@emotion/css';

export class DivRenderer extends Renderer {
  renderElement(props: RendererProps): ReactNode {
    const { children, style, ref, testID } = props;
    const cssString = styleToCSS(style);
    return (
      <div
        data-testid={testID}
        ref={ref as ForwardedRef<HTMLDivElement>}
        className={css`
          ${cssString}
        `}
      >
        {children}
      </div>
    );
  }
}
