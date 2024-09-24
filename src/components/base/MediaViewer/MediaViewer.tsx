import { ReactImageGalleryProps } from 'react-image-gallery';
import { StyledMediaViewer, PhotoContainer, PhotoOverlay } from './MediaViewer.style';
import { Typography } from '@mui/material';

export interface MediaViewerProps {
  items: { original: string; thumbnail?: string; description?: string; type?: 'image' | 'video' }[];
}


export function MediaViewer({ items, ...props }: MediaViewerProps) {
  if (!items || items.length === 0) return null;

  const remainingPhotosCount = items.length - 2;

  const renderMedia = (item: { original: string; description?: string; type?: 'image' | 'video' }) => {
    if (item.type === 'video') {
      return (
        <video
          key={item.original}
          controls
          style={{ width: '100%', objectFit: 'cover' }}
        >
          <source src={item.original} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
        <div style={{ display: 'flex', gap: '10px' }}>
          {items.slice(0, 2).map((item, index) => (
            <div key={index} style={{ width: '50%' }}>
              {renderMedia(item)}
            </div>
          ))}
        </div>
      ) : items.length > 2 ? (
        <div style={{ display: 'flex', gap: '10px', position: 'relative' }}>
          <div style={{ width: '50%' }}>
            {renderMedia(items[0])}
          </div>

          <div style={{ position: 'relative', width: '50%' }}>
            {renderMedia(items[1])}
            {remainingPhotosCount > 0 && (
              <PhotoOverlay>
             <Typography> +{remainingPhotosCount}</Typography>  
              </PhotoOverlay>
            )}
          </div>
        </div>
      ) : (
        <div style={{ width: '100%' }}>
          {renderMedia(items[0])}
        </div>
      )}
    </StyledMediaViewer>
  );
}
