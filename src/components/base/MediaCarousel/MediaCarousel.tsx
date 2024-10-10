import { Box } from '@mui/material';
import { StyledMediaCarousel, MediaVideo } from './MediaCarousel.style';
import { useTranslation } from 'react-i18next';
import ReactPanZoom from 'react-image-pan-zoom-rotate';
export interface MediaCarouselProps {
  items: {
    original: string;
    thumbnail?: string;
    description?: string;
    type?: 'image' | 'video';
  }[];
  isSinglePostOpen?: boolean;
}

export function MediaCarousel({ items }: MediaCarouselProps) {
  const { t } = useTranslation();

  const galleryItems = items.map(item => ({
    original: item.original,
    thumbnail: item.thumbnail || item.original,
    descripiton: item.description ? t(item.description) : t('mediaItem'),
    renderItem: () => {
      return item.type === 'image' ? (
        <ReactPanZoom
          image={item.original}
          alt={item.description || t('mediaItem')}
        />
      ) : (
        <MediaVideo>
          <source src={item.original} />
          {t('videoUnsupportedMessage')}
        </MediaVideo>
      );
    },
  }));

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: '0 auto',
        overflow: 'hidden',
        padding: '0.5rem',
      }}
    >
      <StyledMediaCarousel
        items={galleryItems}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={false}
        indexSeparator='5'
      />
    </Box>
  );
}
