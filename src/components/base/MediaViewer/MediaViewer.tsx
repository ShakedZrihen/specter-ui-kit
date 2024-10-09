import { useEffect, useState } from 'react';
import {
  StyledMediaViewer,
  PhotoOverlay,
  TwoMediaWrapper,
  SingleMediaWrapper,
  PhotoContainer,
  StyledVideo,
  StyledImage,
} from './MediaViewer.style';
import { Button, Typography } from '@mui/material';

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
  const [isSinglePostOpen, setLocalIsSinglePostOpen] =
    useState<boolean>(isSinglePostOpenProp);

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
      return <StyledVideo key={item.original} controls src={item.original} />;
    }
    return (
      <StyledImage
        key={item.original}
        src={item.original}
        alt={item.description || 'Media'}
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
          <PhotoContainer style={{ position: 'relative' }}>
            {renderMedia(items[0])}
          </PhotoContainer>
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
