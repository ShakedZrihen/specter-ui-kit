import { TextWithHighlights } from '../TextWithHighlights';
import {
  PostAvatar,
  PostContent,
  PostFooter,
  PostHeader,
  PostHeaderContent,
  StyledPost,
} from './Post.style';

export interface PostProps {
  author: {
    name: string;
    avatar: string;
  };
  time: string;
  source: string;
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
  const { author, time, source, content, highlightedText = [] } = props;

  return (
    <StyledPost>
      <PostHeader>
        <PostAvatar />
        <PostHeaderContent>
          <div>{author.name}</div>
          <div>{time}</div>
          <div>{source}</div>
        </PostHeaderContent>
      </PostHeader>
      <PostContent>
        <TextWithHighlights text={content} highlightedText={highlightedText} />
      </PostContent>
      <PostFooter />
    </StyledPost>
  );
}
