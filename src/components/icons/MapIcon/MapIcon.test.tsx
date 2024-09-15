import { MapIcon } from './MapIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('MapIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <MapIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
