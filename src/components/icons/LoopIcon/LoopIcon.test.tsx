import { LoopIcon } from './LoopIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('LoopIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <LoopIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
