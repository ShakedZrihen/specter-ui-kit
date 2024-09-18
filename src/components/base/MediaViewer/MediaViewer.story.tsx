import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { MediaViewer } from './MediaViewer';
import type { Meta, StoryObj } from '@storybook/react';
import ReactPlayer from 'react-player';

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
      {
        original: 'https://picsum.photos/id/1015/900/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        sizes: '100%',
      },
      {
        original: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        renderItem: () => (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
            width={'500px'}
            height={'300px'}
          />
        ),
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
        <div style={{ width: '500px', height: '500px' }}>
          <MediaViewer items={items} />
        </div>
      </SpecterTheme>
    );
  },
};
