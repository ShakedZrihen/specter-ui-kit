import { FilterIcon } from './FilterIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('FilterIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <FilterIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
