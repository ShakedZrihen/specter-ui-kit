import {
  Checkbox,
  FormControlLabel,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import { franc } from 'franc';
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
  SourceContent,
  LinkSite,
  DetailesRow,
  Loop,
} from './Post.style';
import { Footer, SlimFooter } from './Footer';
import { getTextDirection } from '../../../utils/textDirection';
import { IPost } from '../../../@types/post';
import { MediaItem, MediaViewer } from '../MediaViewer/MediaViewer';
import { TextWithHighlights } from '../../base/TextWithHighlights';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { colorPalette } from '../../../context/theme/lightMode';

export interface PostProps extends IPost {
  slimView?: boolean;
  highlightedText?: string[];
  onRead?: (id: string | number) => void;
  onFindSimiliar?: () => void;
  onUnread?: (id: string | number) => void;
  onSave?: (id: string | number) => void;
  onShare?: (id: string | number) => void;
  onMore?: (id?: string | number) => void;
  mediaItems?: MediaItem[];
}

export function Post(props: PostProps & { className?: string }) {
  const {
    author,
    time,
    date,
    source,
    content: { original, selected },
    isRead,
    isRawPost,
    id,
    highlightedText = [],
    className,
    slimView = false,
    onMore = () => {},
    onShare = () => {},
    onSave = () => {},
    mediaItems = [],
    onFindSimiliar = () => {},
  } = props;

  const [isTranslated, setIsTranslated] = useState<boolean>(
    selected !== original,
  );
  const { t, i18n } = useTranslation();

  const cleanProtocol = (url: string) =>
    url.replace('https://', '').replace('http://', '');

  useEffect(() => {
    setIsTranslated(selected !== original);
  }, [selected, original]);

  const content = isTranslated ? selected : original;

  return (
    <StyledPost isRawPost={isRawPost} className={className}>
      <PostHeader>
        <PostAvatar alt={author.name} src={author.avatar} />
        <PostHeaderContent>
          <PostAuthor>{author.name}</PostAuthor>
          <DetailesRow>
            <PostDatetime>
              {time} • {date} •
            </PostDatetime>
            <PostSource>
              {source.url ? (
                <LinkSite href={source.url} target='_blank'>
                  {cleanProtocol(source.url)}
                </LinkSite>
              ) : null}
              {source.channelName ? (
                <>
                  •
                  <Link href={source.channelUrl} target='_blank'>
                    <ChannelName
                      direction={getTextDirection(franc(source.channelName))}
                    >
                      {source.channelName}
                    </ChannelName>
                  </Link>
                </>
              ) : null}
              •{' '}
              <Typography style={{ paddingRight: '0.2rem' }}>
                {source.sourceName}
              </Typography>
            </PostSource>
          </DetailesRow>
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
      {content ? (
        <PostContent direction={getTextDirection(franc(content))}>
          <TextWithHighlights
            text={content}
            highlightedText={highlightedText}
            direction={getTextDirection(franc(content))}
            maxLines={5}
          />
        </PostContent>
      ) : (
        ''
      )}
      <MediaViewer
        items={mediaItems}
        isSinglePostOpen={slimView}
        onViewMore={onMore}
        onFindSimiliar={onFindSimiliar}
      />
      {original && content && original !== selected ? (
        <SourceContent
          direction={i18n.resolvedLanguage === 'en' ? 'ltr' : 'rtl'}
          onClick={() => setIsTranslated(prev => !prev)}
        >
          <Typography>
            {isTranslated ? t('sourceLanguage') : t('displayTranslate')}
          </Typography>
          <Loop color={colorPalette.colors.spBlue} size={16} />
        </SourceContent>
      ) : (
        ''
      )}
      {!slimView && <Divider />}

      {slimView ? (
        <SlimFooter onSave={onSave} onShare={onShare} id={id} />
      ) : (
        <Footer onSave={onSave} onShare={onShare} id={id} onMore={onMore} />
      )}
    </StyledPost>
  );
}
