import { BellIcon } from './BellIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('BellIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <BellIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
