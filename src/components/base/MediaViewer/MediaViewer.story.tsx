import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { MediaViewer } from './MediaViewer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MediaViewer> = {
  title: 'base/MediaViewer',
  component: MediaViewer,
  argTypes: {},
  args: {
    items: [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof MediaViewer>;

export const Basic: Story = {
  render(props) {
    const { items } = props;

    return (
      <SpecterTheme>
        <MediaViewer items={items} />
      </SpecterTheme>
    );
  },
};
