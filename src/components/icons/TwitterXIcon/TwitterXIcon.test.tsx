import { TwitterXIcon } from './TwitterXIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('TwitterXIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <TwitterXIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
