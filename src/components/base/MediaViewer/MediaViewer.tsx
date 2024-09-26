import React, { useState } from 'react';
import { SinglePostView } from '../../custom';
import {
  StyledMediaViewer,
  StyledVideo,
  PhotoOverlay,
  TwoMediaWrapper,
  SingleMediaWrapper,
  PhotoContainer,
} from './MediaViewer.style';
import { Button, Typography } from '@mui/material';
import { IPost } from '../../../@types/post';

export interface MediaViewerProps {
  items: {
    original: string;
    thumbnail?: string;
    description?: string;
    type?: 'image' | 'video';
  }[];
  postData: IPost;
  isSinglePostOpen?: boolean;
}

export function MediaViewer({
  items,
  postData,
  isSinglePostOpen: isSinglePostOpenProp = false,
  ...props
}: MediaViewerProps) {
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);
  const [slimView, setSlimView] = useState<boolean>(false);
  const [isSinglePostOpen, setIsSinglePostOpen] =
    useState<boolean>(isSinglePostOpenProp);

  if (!items || items.length === 0) return null;

  const remainingPhotosCount = items.length - 2;

  const handleClick = () => {
    setCurrentPost(postData);
    setSlimView(true);
    setIsSinglePostOpen(true);
  };

  const closeSinglePostView = () => {
    setIsSinglePostOpen(false);
    setSlimView(false);
  };

  const renderMedia = (item: {
    original: string;
    description?: string;
    type?: 'image' | 'video';
  }) => {
    if (item.type === 'video') {
      return (
        <StyledVideo key={item.original} controls>
          <source src={item.original} type='video/mp4' />
          Your browser does not support the video tag.
        </StyledVideo>
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
    <>
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
                  <Button onClick={handleClick}>
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

      {isSinglePostOpen && currentPost && (
        <SinglePostView
          post={currentPost}
          isOpen={isSinglePostOpen}
          onClose={closeSinglePostView}
        />
      )}
    </>
  );
}
