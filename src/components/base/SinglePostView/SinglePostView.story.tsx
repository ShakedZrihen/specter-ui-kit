import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { SinglePostView } from './SinglePostView';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SinglePostView> = {
  title: 'base/SinglePostView',
  component: SinglePostView,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof SinglePostView>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <SinglePostView {...props} />
      </SpecterTheme>
    );
  },
};
