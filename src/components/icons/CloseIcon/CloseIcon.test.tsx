import { CloseIcon } from './CloseIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('CloseIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <CloseIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
