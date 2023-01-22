import { render } from '@testing-library/react';

import FrontendProcesses from './FrontendProcesses';

describe('FrontendProcesses', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendProcesses />);
    expect(baseElement).toBeTruthy();
  });
});
