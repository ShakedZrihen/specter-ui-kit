import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { DescriptionAccordion } from './DescriptionAccordion';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DescriptionAccordion> = {
  title: 'custom/DescriptionAccordion',
  component: DescriptionAccordion,
  argTypes: {},
  args: {
    descriptionName: 'מטא-דאטה',
    descriptionAttributes: {
      'זמן יצירה:': '16:31, אוגוסט 19, 2024',
      'זמן קצירה:': '16:46, אוגוסט 19, 2024',
      'עדכון אחרון:': '16:51, אוגוסט 19, 2024',
      'מקור איסוף:': 'Telegram inhouse',
      ':Item-ID': 'DFEG45',
      'מידע נוסף:': '-',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DescriptionAccordion>;

export const Basic: Story = {
  render(props) {
    return (
      <SpecterTheme>
        <DescriptionAccordion {...props} />
      </SpecterTheme>
    );
  },
};