import { ForwardedRef, ReactElement, ReactNode } from 'react';
import { WebRenderer, WebRendererProps } from './WebRenderer';

export class DivRenderer extends WebRenderer {
  renderElement(props: WebRendererProps): ReactElement {
    const { children, className, ref, testID } = props;
    return (
      <div
        data-testid={testID}
        ref={ref as ForwardedRef<HTMLDivElement>}
        className={className}
      >
        {children}
      </div>
    );
  }
}
