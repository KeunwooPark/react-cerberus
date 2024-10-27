import { DivRenderer } from '../DivRenderer';
import { render, screen } from '@testing-library/react';

describe('DivRenderer', () => {
  it('should render a div element', async () => {
    const renderer = new DivRenderer();
    render(renderer.render({ testID: 'test-id' }));

    expect(screen.getByTestId('test-id')).toBeTruthy();
  });
});
