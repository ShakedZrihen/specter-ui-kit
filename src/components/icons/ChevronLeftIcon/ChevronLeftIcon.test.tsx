import { ChevronLeftIcon } from './ChevronLeftIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('ChevronLeftIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <ChevronLeftIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
