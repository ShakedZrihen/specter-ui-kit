import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { SinglePostView } from './SinglePostView';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SinglePostView> = {
  title: 'custom/SinglePostView',
  component: SinglePostView,
  argTypes: {},
  args: {
    isLoading: false,
    isOpen: true,
    post: {
      isRawPost: false,
      mediaItems: [
        {
          original:
            'https://i.pinimg.com/236x/54/84/e2/5484e289c5af5c3414a30cb14a768ea8.jpg',
          type: 'image',
        },
      ],
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
      enrichments: {
        metadata: {
          מקור: <div style={{ color: 'red' }}>חדשות 12</div>,
          זמן: '12:58:01',
          תאריך: '19.8.2024',
        },
        ai: {
          'סוג הפוסט': 'פוסט טקסט',
          'קשרים חברתיים': 'חמאס, ג׳יהאד האיסלאמי',
        },
        operationalHistory: {
          סטטוס: 'פוסט חדש',
          פעולות: 'שמירה, קריאה',
        },
        relatedEntities: {
          'קשרים חברתיים': 'חמאס, ג׳יהאד האיסלאמי',
          'קשרים חברתיים נוספים': 'איחוד האמירויות, פלסטין',
        },
      },
      highlightedText: [],
    },
    onClose: () => {
      alert('closed');
    },
  },
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
