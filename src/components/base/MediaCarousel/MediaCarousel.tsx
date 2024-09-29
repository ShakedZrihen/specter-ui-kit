import React from 'react';
import { Box } from '@mui/material';
import {
  StyledMediaCarousel,
  MediaImage,
  MediaVideo,
} from './MediaCarousel.style';

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
  const galleryItems = items.map(item => ({
    original: item.original,
    thumbnail: item.thumbnail || item.original,
    description: item.description,
    renderItem: () =>
      item.type === 'image' ? (
        <MediaImage
          src={item.original}
          alt={item.description || 'Media item'}
        />
      ) : (
        <MediaVideo controls>
          <source src={item.original} />
          Your browser does not support the video tag.
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
