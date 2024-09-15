import { TextWithHighlights } from '../TextWithHighlights';
import {
  PostAuthor,
  PostAvatar,
  PostContent,
  PostDatetime,
  PostFooter,
  PostHeader,
  PostHeaderContent,
  PostSource,
  StyledPost,
} from './Post.style';

export interface PostProps {
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
  const { author, time, date, source, content, highlightedText = [] } = props;
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
            <a href={source.url}>
              {cleanProtocol(source.url)}
            </a>
            •<a href={source.channelUrl}>{source.channelName}</a> •{' '}
            <span>{source.sourceName}</span>
          </PostSource>
        </PostHeaderContent>
      </PostHeader>
      <PostContent>
        <TextWithHighlights text={content} highlightedText={highlightedText} />
      </PostContent>
      <PostFooter />
    </StyledPost>
  );
}
