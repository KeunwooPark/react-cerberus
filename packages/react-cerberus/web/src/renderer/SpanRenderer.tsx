import { ForwardedRef, ReactNode } from 'react';
import { WebRenderer, WebRendererProps } from './WebRenderer';

export class SpanRenderer extends WebRenderer {
  renderElement(props: WebRendererProps): ReactNode {
    const { children, className, ref, testID } = props;
    return (
      <span
        data-testid={testID}
        ref={ref as ForwardedRef<HTMLSpanElement>}
        className={className}
      >
        {children}
      </span>
    );
  }
}
