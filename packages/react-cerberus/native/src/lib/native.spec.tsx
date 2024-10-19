import { render } from '@testing-library/react';

import Native from './native';

describe('Native', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Native />);
    expect(baseElement).toBeTruthy();
  });
});
