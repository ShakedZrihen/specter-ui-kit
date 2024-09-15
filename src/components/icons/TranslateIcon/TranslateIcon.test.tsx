import { TranslateIcon } from './TranslateIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('TranslateIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <TranslateIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
