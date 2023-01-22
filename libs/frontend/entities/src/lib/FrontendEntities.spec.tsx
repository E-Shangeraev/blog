import { render } from '@testing-library/react';

import FrontendEntities from './FrontendEntities';

describe('FrontendEntities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendEntities />);
    expect(baseElement).toBeTruthy();
  });
});
