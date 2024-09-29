import React, { useEffect, useState } from 'react';
import {
  StyledMediaViewer,
  PhotoOverlay,
  TwoMediaWrapper,
  SingleMediaWrapper,
  PhotoContainer,
  StyledVideo,
} from './MediaViewer.style';
import { Button, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

export interface MediaItem {
  original: string;
  thumbnail?: string;
  description?: string;
  type?: 'image' | 'video';
}

export interface MediaViewerProps {
  items: MediaItem[];
  isSinglePostOpen?: boolean;
  onViewMore?: () => void;
  setIsSinglePostOpen?: (isOpen: boolean) => void;
}


export function MediaViewer({
  items,
  isSinglePostOpen: isSinglePostOpenProp = false,
  onViewMore,
  setIsSinglePostOpen,
  ...props
}: MediaViewerProps) {
  const [isSinglePostOpen, setLocalIsSinglePostOpen] = useState<boolean>(isSinglePostOpenProp);

  useEffect(() => {
    setLocalIsSinglePostOpen(isSinglePostOpenProp);
  }, [isSinglePostOpenProp]);

  if (!items || items.length === 0) return null;

  const remainingPhotosCount = items.length - 2;

  const handleViewMoreClick = () => {
    if (onViewMore) onViewMore();
    setLocalIsSinglePostOpen(true);
    if (setIsSinglePostOpen) setIsSinglePostOpen(true);
  };


  const renderMedia = (item: {
    original: string;
    description?: string;
    type?: 'image' | 'video';
  }) => {
    if (item.type === 'video') {
      return (
        <ReactPlayer
          key={item.original}
          url={item.original}
          controls
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
        />
      );
    }
    return (
      <img
        key={item.original}
        src={item.original}
        alt={item.description || 'Media'}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  };

  return (
    <StyledMediaViewer {...props}>
      {items.length === 2 ? (
        <TwoMediaWrapper>
          {items.slice(0, 2).map((item, index) => (
            <PhotoContainer key={index}>{renderMedia(item)}</PhotoContainer>
          ))}
        </TwoMediaWrapper>
      ) : items.length > 2 ? (
        <TwoMediaWrapper>
          <PhotoContainer>{renderMedia(items[0])}</PhotoContainer>
          <PhotoContainer style={{ position: 'relative' }}>
            {renderMedia(items[1])}
            {!isSinglePostOpen && remainingPhotosCount > 0 && (
              <PhotoOverlay>
                <Button onClick={handleViewMoreClick}>
                  <Typography>+{remainingPhotosCount}</Typography>
                </Button>
              </PhotoOverlay>
            )}
          </PhotoContainer>
        </TwoMediaWrapper>
      ) : (
        <SingleMediaWrapper>{renderMedia(items[0])}</SingleMediaWrapper>
      )}
    </StyledMediaViewer>
  );
}