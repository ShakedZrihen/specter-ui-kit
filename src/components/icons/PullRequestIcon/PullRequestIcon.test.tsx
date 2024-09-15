import { PullRequestIcon } from './PullRequestIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('PullRequestIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <PullRequestIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
