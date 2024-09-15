import { BarGraphIcon } from './BarGraphIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('BarGraphIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <BarGraphIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
