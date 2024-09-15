import { TrashIcon } from './TrashIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('TrashIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <TrashIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
