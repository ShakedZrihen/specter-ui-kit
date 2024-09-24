import {
  Checkbox,
  FormControlLabel,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import { franc } from 'franc';
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

export interface PostProps extends IPost {
  slimView?: boolean;
  highlightedText?: string[];
  onRead?: (id: string | number) => void;
  onUnread?: (id: string | number) => void;
  onSave?: (id: string | number) => void;
  onShare?: (id: string | number) => void;
  onMore?: (id: string | number) => void;
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <Post />
 * ```
 */
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
  } = props;

  const cleanProtocol = (url: string) =>
    url.replace('https://', '').replace('http://', '');

  const content = selected || original;

  const mediaItems: { original: string; type: 'image' | 'video' }[] = [
    {
      original: 'https://pic1.calcalist.co.il/picserver3/crop_images/2023/11/22/SJpONDjNa/SJpONDjNa_0_0_1182_638_0_xx-large.jpg',
      type:"image"
    },
    {
      original: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      type: "video"
    }   
  ,{
      original: 'https://pic1.calcalist.co.il/picserver3/crop_images/2022/08/14/HkLGOVUR9/HkLGOVUR9_0_0_1570_847_0_xx-large.jpg',
      type:"image"
    }
  ];

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
            •
            <Link href={source.channelUrl} target='_blank'>
              <ChannelName
                direction={getTextDirection(franc(source.channelName))}
              >
                {source.channelName}
              </ChannelName>
            </Link>{' '}
            • <Typography>{source.sourceName}</Typography>
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
      <MediaViewer items={mediaItems} />
      {!slimView && <Divider />}
      {slimView ? (
        <SlimFooter onSave={onSave} onShare={onShare} id={id} />
      ) : (
        <Footer onMore={onMore} onSave={onSave} onShare={onShare} id={id} />
      )}
    </StyledPost>
  );
}
