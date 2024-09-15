import { SearchIcon } from './SearchIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('SearchIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <SearchIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
