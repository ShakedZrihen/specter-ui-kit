import {
  StyledMediaViewer,
  PhotoOverlay,
  TwoMediaWrapper,
  SingleMediaWrapper,
} from './MediaViewer.style';
import { Typography } from '@mui/material';
import ReactPlayer from 'react-player';

export interface MediaViewerProps {
  items: {
    original: string;
    thumbnail?: string;
    description?: string;
    type?: 'image' | 'video';
  }[];
}

export function MediaViewer({ items, ...props }: MediaViewerProps) {
  if (!items || items.length === 0) return null;

  const remainingPhotosCount = items.length - 2;

  const renderMedia = (item: {
    original: string;
    description?: string;
    type?: 'image' | 'video';
  }) => {
    if (item.type === 'video') {
      return (
        <ReactPlayer
          controls
          url={item.original}
        />
      );
    }
    return (
      <img
        key={item.original}
        src={item.original}
        alt={item.description || 'Media'}
        style={{ width: '100%', objectFit: 'cover' }}
      />
    );
  };

  return (
    <StyledMediaViewer {...props}>
      {items.length === 2 ? (
        <TwoMediaWrapper>
          {items.slice(0, 2).map((item, index) => (
            <div key={index} style={{ width: '50%' }}>
              {renderMedia(item)}
            </div>
          ))}
        </TwoMediaWrapper>
      ) : items.length > 2 ? (
        <TwoMediaWrapper style={{ position: 'relative' }}>
          <div style={{ width: '50%' }}>{renderMedia(items[0])}</div>
          <div style={{ position: 'relative', width: '50%' }}>
            {renderMedia(items[1])}
            {remainingPhotosCount > 0 && (
              <PhotoOverlay>
                <Typography>+{remainingPhotosCount}</Typography>
              </PhotoOverlay>
            )}
          </div>
        </TwoMediaWrapper>
      ) : (
        <SingleMediaWrapper>{renderMedia(items[0])}</SingleMediaWrapper>
      )}
    </StyledMediaViewer>
  );
}
