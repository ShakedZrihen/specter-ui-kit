import { DocumetsIcon } from './DocumetsIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('DocumetsIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <DocumetsIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
