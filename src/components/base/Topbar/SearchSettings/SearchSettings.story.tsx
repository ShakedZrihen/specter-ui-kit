import { SpecterTheme } from '../../../../context/theme/SpecterTheme';
import { SearchSettings } from './SearchSettings';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchSettings> = {
  title: 'base/Topbar/SearchSettings',
  component: SearchSettings,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof SearchSettings>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <SearchSettings {...props} />
      </SpecterTheme>
    );
  },
};
