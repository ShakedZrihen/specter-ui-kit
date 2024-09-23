import { ReactImageGalleryProps } from 'react-image-gallery';
import { StyledMediaViewer } from './MediaViewer.style';

export interface MediaViewerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: any;
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <MediaViewer />
 * ```
 */
export function MediaViewer(props: ReactImageGalleryProps) {
  return (
    <StyledMediaViewer
      {...props}
      showPlayButton={false}
      showThumbnails={false}
      showBullets
    />
  );
}
