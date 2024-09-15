import { ShareIcon } from './ShareIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('ShareIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <ShareIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
