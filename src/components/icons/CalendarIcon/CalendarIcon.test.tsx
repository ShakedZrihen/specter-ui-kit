import { CalendarIcon } from './CalendarIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('CalendarIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <CalendarIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
