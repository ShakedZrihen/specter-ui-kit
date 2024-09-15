import { UserIdIcon } from './UserIdIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('UserIdIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <UserIdIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
