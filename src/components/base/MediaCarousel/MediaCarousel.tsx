import React from 'react';
import { Box } from '@mui/material';
import {
  StyledMediaCarousel,
  MediaImage,
  MediaVideo,
} from './MediaCarousel.style';
import { useTranslation } from 'react-i18next'; 

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
    description: item.description ? t(item.description) : t('mediaItem'), 
    renderItem: () =>
      item.type === 'image' ? (
        <MediaImage
          src={item.original}
          alt={item.description || t('mediaItem')} 
        />
      ) : (
        <MediaVideo controls>
          <source src={item.original} />
          {t('videoUnsupportedMessage')} 
        </MediaVideo>
      ),
  }));

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', overflow: 'hidden' }}>
      <StyledMediaCarousel
        items={galleryItems}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
      />
    </Box>
  );
}
