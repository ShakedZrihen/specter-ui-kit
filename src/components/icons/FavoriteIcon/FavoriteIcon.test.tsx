import { FavoriteIcon } from './FavoriteIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('FavoriteIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <FavoriteIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
