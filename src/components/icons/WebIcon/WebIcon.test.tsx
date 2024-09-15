import { WebIcon } from './WebIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('WebIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <WebIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
