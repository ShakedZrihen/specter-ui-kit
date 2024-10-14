import { useState } from 'react';
import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { Post } from './Post';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Post> = {
  title: 'custom/Post',
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
      url: 'https://www.figma.com/design/7b8uxI78aIwjH2uzcP58g9/Specter-(Copy)?node-id=2557-397128&node-type=frame&t=6m525d4KrkA2uZiH-0',
      channelName: 'Channel Name',
      channelUrl: 'https://www.google.com',
      sourceName: 'Twitter',
    },
    content: {
      selected: 'דוגמה לצורך המחשת התרגום',
      original:
        'ידיעות אחרונות: האימוץ המשותף של חמאס והג׳יהאד האיסלאמי לאחריות על הפיגוע ב״תל אביב״, מזכיר לנו את ימי השיא האינתיפאדה השנייה, שבהם ביצעו שני הארגונים גם פיגועים...',
    },
    isRead: false,
    highlightedText: ['חמאס'],
    mediaItems: [
      {
        original: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
        type: 'video',
      },
      {
        original:
          'https://pic1.calcalist.co.il/picserver3/crop_images/2022/08/14/HkLGOVUR9/HkLGOVUR9_0_0_1570_847_0_xx-large.jpg',
        type: 'image',
      },
    ],
    onSave: () => alert('saved'),
    onFindSimiliar: () => alert('found'),
    enrichments: {},
  },
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Basic: Story = {
  render(props) {
    const PostWithActions = () => {
      const [isRead, setIsRead] = useState(false);
      const [isSlim, setIsSlim] = useState(false);

      return (
        <Post
          {...props}
          isRead={isRead}
          slimView={isSlim}
          onUnread={() => setIsRead(false)}
          onRead={() => setIsRead(true)}
          onMore={() => setIsSlim(true)}
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
