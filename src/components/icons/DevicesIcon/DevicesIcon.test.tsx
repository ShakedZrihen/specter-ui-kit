import { DevicesIcon } from './DevicesIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('DevicesIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <DevicesIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
