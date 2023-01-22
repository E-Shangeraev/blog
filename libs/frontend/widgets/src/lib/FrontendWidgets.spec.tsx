import { render } from '@testing-library/react';

import FrontendWidgets from './FrontendWidgets';

describe('FrontendWidgets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendWidgets />);
    expect(baseElement).toBeTruthy();
  });
});
