import { MoreIcon } from './MoreIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('MoreIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <MoreIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
