import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { Post } from './Post';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Post> = {
  title: 'base/Post',
  component: Post,
  argTypes: {},
  args: {
    author: {
      name: 'John Doe',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    time: '2 hours ago',
    source: 'Twitter',
    content: 'This is a post content',
    isRead: false,
    highlightedText: ['post'],
  },
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <Post {...props} />;
      </SpecterTheme>
    );
  },
};
