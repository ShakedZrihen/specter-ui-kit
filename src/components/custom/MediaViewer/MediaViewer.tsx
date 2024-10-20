import { useEffect, useState } from 'react';
import {
  StyledMediaViewer,
  PhotoOverlay,
  TwoMediaWrapper,
  SingleMediaWrapper,
  PhotoContainer,
  StyledVideo,
  StyledImage,
  ButtonContainer,
  ActionButton,
  Divider,
  SimiliarButton,
} from './MediaViewer.style';
import { Button, Typography } from '@mui/material';
import {
  ZoomInIcon,
  ExpandIcon,
  ZoomOutIcon,
  SimiliarPostsIcon,
  CloseCircleIcon,
  RotateIcon,
} from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';

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
  onFindSimiliar?: () => void;
  setIsSinglePostOpen?: (isOpen: boolean) => void;
}

export function MediaViewer({
  items,
  isSinglePostOpen: isSinglePostOpenProp = false,
  onViewMore,
  onFindSimiliar,
  setIsSinglePostOpen,
  ...props
}: MediaViewerProps) {
  const [isSinglePostOpen, setLocalIsSinglePostOpen] =
    useState<boolean>(isSinglePostOpenProp);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotate, setRotate] = useState<number>(0);

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

  const handleZoomIn = () => {
    setZoomScale(prevScale =>
      Math.min(Math.round((prevScale + 0.1) * 10) / 10, 2),
    );
  };

  const handleZoomOut = () => {
    setZoomScale(prevScale =>
      Math.max(Math.round((prevScale - 0.1) * 10) / 10, 0.5),
    );
  };

  const handleExpandClick = () => {
    setIsExpanded(prev => !prev);
    if (isExpanded) {
      setRotate(0);
      setZoomScale(1);
    }
  };

  const handleRotate = () => {
    setRotate(prev => {
      const result = prev + 90;
      if (result === 360) return 0;
      return result;
    });
  };

  const renderMedia = (item: MediaItem) => {
    return (
      <PhotoContainer isSingleView={isSinglePostOpen} key={item.original}>
        {item.type === 'video' ? (
          <StyledVideo controls src={item.original} />
        ) : (
          <StyledImage
            src={item.original}
            alt={item.description || 'Media'}
            scale={zoomScale}
            isExpanded={isExpanded}
            rotate={rotate}
          />
        )}
        {item.type === 'image' && (
          <>
            <SimiliarButton
              onClick={onFindSimiliar}
              isHidden={!isSinglePostOpen}
            >
              <SimiliarPostsIcon
                color={colorPalette.text.secondary}
                size={16}
              />
            </SimiliarButton>
            <ButtonContainer
              isExpanded={isExpanded}
              isHidden={!isSinglePostOpen}
            >
              {isExpanded ? (
                <ActionButton onClick={handleExpandClick}>
                  <CloseCircleIcon
                    color={colorPalette.colors.spBlack}
                    size={16}
                  />
                </ActionButton>
              ) : (
                <ActionButton onClick={handleExpandClick}>
                  <ExpandIcon color={colorPalette.colors.spBlack} size={16} />
                </ActionButton>
              )}
              <Divider isExpanded={isExpanded} />
              <ActionButton onClick={handleZoomIn}>
                <ZoomInIcon
                  color={
                    zoomScale > 1
                      ? colorPalette.link.color
                      : colorPalette.colors.spBlack
                  }
                  size={16}
                />
              </ActionButton>
              <ActionButton onClick={handleZoomOut}>
                <ZoomOutIcon
                  color={
                    zoomScale < 1
                      ? colorPalette.link.color
                      : colorPalette.colors.spBlack
                  }
                  size={16}
                />
              </ActionButton>
              {isExpanded ? (
                <ActionButton onClick={handleRotate}>
                  <RotateIcon
                    color={
                      rotate > 0
                        ? colorPalette.link.color
                        : colorPalette.colors.spBlack
                    }
                    size={16}
                  />
                </ActionButton>
              ) : null}
            </ButtonContainer>
          </>
        )}
      </PhotoContainer>
    );
  };
  return (
    <StyledMediaViewer {...props}>
      {items.length === 2 ? (
        <TwoMediaWrapper>
          {items.slice(0, 2).map((item, index) => (
            <PhotoContainer isSingleView={isSinglePostOpen} key={index}>
              {renderMedia(item)}
            </PhotoContainer>
          ))}
        </TwoMediaWrapper>
      ) : items.length > 2 ? (
        <TwoMediaWrapper>
          <PhotoContainer
            isSingleView={isSinglePostOpen}
            style={{ position: 'relative' }}
          >
            {renderMedia(items[0])}
          </PhotoContainer>
          <PhotoContainer
            isSingleView={isSinglePostOpen}
            style={{ position: 'relative' }}
          >
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
