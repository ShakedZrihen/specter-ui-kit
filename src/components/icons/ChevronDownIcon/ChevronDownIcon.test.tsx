import { ChevronDownIcon } from './ChevronDownIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('ChevronDownIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <ChevronDownIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
