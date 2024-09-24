import { useState } from 'react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { Post } from './Post';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Post> = {
  title: 'base/Post',
  component: Post,
  argTypes: {},
  args: {
    slimView: false,
    id: '1',
    author: {
      name: 'Nablusarlrasas48',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    time: '12:58:01',
    date: '19.8.2024',
    source: {
      url: 'https://www.google.com',
      channelName: 'Channel Name',
      channelUrl: 'https://www.google.com',
      sourceName: 'Twitter',
    },
    content: {
      original:
        'ידיעות אחרונות: האימוץ המשותף של חמאס והג׳יהאד האיסלאמי לאחריות על הפיגוע ב״תל אביב״, מזכיר לנו את ימי השיא האינתיפאדה השנייה, שבהם ביצעו שני הארגונים גם פיגועים...',
    },
    isRead: false,
    highlightedText: ['חמאס'],
    mediaItems: [  
      {
        original: 'https://pic1.calcalist.co.il/picserver3/crop_images/2023/11/22/SJpONDjNa/SJpONDjNa_0_0_1182_638_0_xx-large.jpg',
        type: 'image',
      },
      {
        original: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
        type: 'video',
      },
      {
        original: 'https://pic1.calcalist.co.il/picserver3/crop_images/2022/08/14/HkLGOVUR9/HkLGOVUR9_0_0_1570_847_0_xx-large.jpg',
        type: 'image',
      },
    ],
    onSave: () => alert('saved'),
    enrichments: {},
  },
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Basic: Story = {
  render(props) {
    const PostWithActions = () => {
      const [isRead, setIsRead] = useState(false);

      return (
        <Post
          {...props}
          isRead={isRead}
          onUnread={() => setIsRead(false)}
          onRead={() => setIsRead(true)}
        />
      );
    };

    return (
      <SpecterTheme>
        <PostWithActions />
      </SpecterTheme>
    );
  },
};
