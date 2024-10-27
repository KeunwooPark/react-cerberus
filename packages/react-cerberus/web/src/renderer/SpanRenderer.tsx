import { ForwardedRef, ReactElement, ReactNode } from 'react';
import { WebRenderer, WebRendererProps } from './WebRenderer';

export class SpanRenderer extends WebRenderer {
  renderElement(props: WebRendererProps): ReactElement {
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
