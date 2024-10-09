import { render } from '@testing-library/react';

import Elements from './elements';

describe('Elements', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Elements />);
    expect(baseElement).toBeTruthy();
  });
});
