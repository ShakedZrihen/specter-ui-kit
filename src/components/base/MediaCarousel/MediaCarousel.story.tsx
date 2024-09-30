import { SpecterTheme } from '../../../context/theme/SpecterTheme';
import { MediaCarousel } from './MediaCarousel';
import type { Meta, StoryObj } from '@storybook/react';

interface MediaCarouselItem {
  original: string;
  thumbnail?: string;
  description?: string;
  type?: 'image' | 'video';
  sizes?: string;
  renderItem?: () => JSX.Element;
}

const meta: Meta<typeof MediaCarousel> = {
  title: 'base/MediaCarousel',
  component: MediaCarousel,
  argTypes: {},
  args: {
    items: [] as MediaCarouselItem[],
  },
};

export default meta;
type Story = StoryObj<typeof MediaCarousel>;

export const Basic: Story = {
  render(props) {
    const { items } = props;

    return (
      <SpecterTheme>
        <MediaCarousel items={items} />
      </SpecterTheme>
    );
  },
};
