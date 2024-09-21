import { Checkbox, FormControlLabel, Divider } from '@mui/material';
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
} from './Post.style';
import { Footer, SlimFooter } from './Footer';
import { getTextDirection } from '../../../utils/textDirection';
import { IPost } from '../../../@types/post';

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
  const language = franc(content);
  const direction = getTextDirection(language);

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
            <a href={source.url} target='_blank'>
              {cleanProtocol(source.url)}
            </a>
            •
            <a href={source.channelUrl} target='_blank'>
              {source.channelName}
            </a>{' '}
            • <span>{source.sourceName}</span>
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
      <PostContent direction={direction}>
        <TextWithHighlights
          text={content}
          highlightedText={highlightedText}
          direction={direction}
          maxLines={5}
        />
      </PostContent>
      {!slimView && <Divider />}
      {slimView ? (
        <SlimFooter onSave={onSave} onShare={onShare} id={id} />
      ) : (
        <Footer onMore={onMore} onSave={onSave} onShare={onShare} id={id} />
      )}
    </StyledPost>
  );
}
