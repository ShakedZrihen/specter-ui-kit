import { Checkbox, FormControlLabel, Typography, Divider } from '@mui/material';

import { TextWithHighlights } from '../TextWithHighlights';
import {
  ActionButton,
  PostAuthor,
  PostAvatar,
  PostContent,
  PostDatetime,
  PostFooter,
  PostHeader,
  PostHeaderContent,
  PostReadIndicator,
  PostSource,
  StyledPost,
} from './Post.style';
import { FavoriteIcon, MoreIcon, ShareIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';

export interface PostProps {
  id: string | number;
  author: {
    name: string;
    avatar: string;
  };
  time: string;
  date: string;
  source: {
    url: string;
    channelName: string;
    channelUrl: string;
    sourceName: string;
  };
  content: string;
  isRead: boolean;
  onRead?: (id: string | number) => void;
  onUnread?: (id: string | number) => void;
  onSave?: (id: string | number) => void;
  onShare?: (id: string | number) => void;
  onMore?: (id: string | number) => void;
  highlightedText: string[];
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
export function Post(props: PostProps) {
  const {
    author,
    time,
    date,
    source,
    content,
    highlightedText = [],
    isRead,
    id,
    onMore = () => {},
    onSave = () => {},
    onShare = () => {},
  } = props;

  const cleanProtocol = (url: string) =>
    url.replace('https://', '').replace('http://', '');

  return (
    <StyledPost>
      <PostHeader>
        <PostAvatar alt={author.name} src={author.avatar} />
        <PostHeaderContent>
          <PostAuthor>{author.name}</PostAuthor>
          <PostDatetime>
            {time} • {date}
          </PostDatetime>
          <PostSource>
            <a href={source.url}>{cleanProtocol(source.url)}</a>•
            <a href={source.channelUrl}>{source.channelName}</a> •{' '}
            <span>{source.sourceName}</span>
          </PostSource>
        </PostHeaderContent>
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
      </PostHeader>
      <PostContent>
        <TextWithHighlights text={content} highlightedText={highlightedText} />
      </PostContent>
      <Divider />
      <PostFooter>
        <ActionButton onClick={() => onSave(id)}>
          <FavoriteIcon color={colorPalette.text.primary} size={20} />
          <Typography>שמירה לאוספים</Typography>
        </ActionButton>
        <ActionButton onClick={() => onShare(id)}>
          <ShareIcon color={colorPalette.text.primary} size={20} />
          <Typography>שיתוף</Typography>
        </ActionButton>
        <ActionButton onClick={() => onMore(id)}>
          <MoreIcon color={colorPalette.text.primary} size={20} />
          <Typography>מידע נוסף</Typography>
        </ActionButton>
      </PostFooter>
    </StyledPost>
  );
}
