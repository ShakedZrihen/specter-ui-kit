import {
  Checkbox,
  FormControlLabel,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import { franc } from 'franc';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextWithHighlights } from '../../base/TextWithHighlights';
import {
  PostAuthor,
  PostAvatar,
  PostContent,
  PostDatetime,
  PostHeader,
  PostHeaderContent,
  PostReadIndicator,
  PostSource,
  StyledPost,
  ChannelName,
} from './Post.style';
import { Footer, SlimFooter } from './Footer';
import { getTextDirection } from '../../../utils/textDirection';
import { IPost } from '../../../@types/post';
import { MediaViewer } from '../../base/MediaViewer/MediaViewer';
import { MediaCarousel } from '../../base/MediaCarousel/MediaCarousel'; 

export interface PostProps extends IPost {
  slimView?: boolean;
  highlightedText?: string[];
  onRead?: (id: string | number) => void;
  onUnread?: (id: string | number) => void;
  onSave?: (id: string | number) => void;
  onShare?: (id: string | number) => void;
  onMore?: (id: string | number) => void;
  mediaItems?: {
    original: string;
    thumbnail?: string;
    description?: string;
    type?: 'image' | 'video';
  }[];
}

export function Post(props: PostProps & { className?: string }) {
  const {
    author,
    time,
    date,
    source,
    content: { original, selected },
    isRead,
    id,
    highlightedText = [],
    className,
    slimView = false,
    onMore = () => {},
    onSave = () => {},
    onShare = () => {},
    mediaItems = [],
  } = props;

  const cleanProtocol = (url: string) =>
    url.replace('https://', '').replace('http://', '');

  const content = selected || original;

  return (
    <StyledPost className={className}>
      <PostHeader>
        <PostAvatar alt={author.name} src={author.avatar} />
        <PostHeaderContent>
          <PostAuthor>{author.name}</PostAuthor>
          <PostDatetime>
            {time} • {date}
          </PostDatetime>
          <PostSource>
            <Link href={source.url} target='_blank'>
              {cleanProtocol(source.url)}
            </Link>
            {source.channelName ? (
              <>
                •
                <Link href={source.channelUrl} target='_blank'>
                  <ChannelName
                    direction={getTextDirection(franc(source.channelName))}
                  >
                    {source.channelName}
                  </ChannelName>
                </Link>{' '}
              </>
            ) : null}
            •{' '}
            <Typography style={{ paddingRight: '0.2rem' }}>
              {source.sourceName}
            </Typography>
          </PostSource>
        </PostHeaderContent>
        {!slimView && (
          <PostReadIndicator>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isRead}
                  onClick={() =>
                    isRead ? props.onUnread?.(id) : props.onRead?.(id)
                  }
                />
              }
              label='סימון כנקרא'
            />
          </PostReadIndicator>
        )}
      </PostHeader>
      <PostContent direction={getTextDirection(franc(content))}>
        <TextWithHighlights
          text={content}
          highlightedText={highlightedText}
          direction={getTextDirection(franc(content))}
          maxLines={5}
        />
      </PostContent>
      
  
      {!slimView ? (
        <MediaViewer items={mediaItems} postData={props} isSinglePostOpen={slimView} />
      ) : (
        <MediaCarousel items={mediaItems} />
      )}
      
      {!slimView && <Divider />}
      {slimView ? (
        <SlimFooter onSave={onSave} onShare={onShare} id={id} />
      ) : (
        <Footer onMore={onMore} onSave={onSave} onShare={onShare} id={id} />
      )}
    </StyledPost>
  );
}
