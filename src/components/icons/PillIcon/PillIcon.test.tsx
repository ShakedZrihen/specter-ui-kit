import { PillIcon } from './PillIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('PillIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <PillIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
