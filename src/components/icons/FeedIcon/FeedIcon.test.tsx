import { FeedIcon } from './FeedIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('FeedIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <FeedIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
