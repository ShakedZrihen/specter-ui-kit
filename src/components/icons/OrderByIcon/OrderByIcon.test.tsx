import { OrderByIcon } from './OrderByIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('OrderByIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <OrderByIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
