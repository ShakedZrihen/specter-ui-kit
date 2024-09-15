import { UserProfileIcon } from './UserProfileIcon';
import { render } from '@testing-library/react';
import { GitstreamTheme } from '@/context/theme';

describe('UserProfileIcon', () => {
  it('should render svg', () => {
    const { container } = render(
      <GitstreamTheme>
        <UserProfileIcon />
      </GitstreamTheme>,
    );
    expect(container.getElementsByTagName('svg')).toBeDefined();
  });
});
