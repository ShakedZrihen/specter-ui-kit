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
} from './Post.style';
import { Footer, SlimFooter } from './Footer';
import { getTextDirection } from '../../../utils/textDirection';
import { IPost } from '../../../@types/post';
import { MediaViewer } from '../../base/MediaViewer/MediaViewer';
import { TextWithHighlights } from '../../base/TextWithHighlights';
import { CollectionModal, MediaCarousel } from '../../base';
import { LoopIcon } from '../../icons';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { colorPalette } from '../../../context/theme/lightMode';

export interface PostProps extends IPost {
  slimView?: boolean;
  highlightedText?: string[];
  onRead?: (id: string | number) => void;
  onUnread?: (id: string | number) => void;
  onSave?: (id: string | number) => void;
  onShare?: (id: string | number) => void;
  onMore?: (id?: string | number) => void;
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
    isRawPost,
    id,
    highlightedText = [],
    className,
    slimView = false,
    onMore = () => {},
    onSave = () => {},
    onShare = () => {},
    mediaItems = [],
  } = props;


  const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);
  const collections = [
    { id: 1, name: 'Collection 1', private: true, lastUpdate: new Date() },
    { id: 2, name: 'Collection 2', private: false, lastUpdate: new Date() },
    { id: 3, name: 'Collection 3', private: true, lastUpdate: new Date() },
    { id: 4, name: 'Collection 4', private: true, lastUpdate: new Date() },
  ];


  const handleSaveToCollection = (id: string | number) => {
    setIsCollectionModalOpen(true);  
  };

  // Close modal handler
  const handleCloseModal = () => {
    setIsCollectionModalOpen(false);
  };

  const [content, setContent] = useState<string | undefined>(selected || original);

  const [isTranslated, setIsTranslated] = useState<boolean>(
    selected !== original,
  );
  const { t, i18n } = useTranslation();

  const cleanProtocol = (url: string) =>
    url.replace('https://', '').replace('http://', '');

  useEffect(() => {
    setIsTranslated(selected !== original);
  }, [selected, original]);


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
              <LinkSite href={source.url} target='_blank'>
                {cleanProtocol(source.url)}
              </LinkSite>
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
      {slimView ? (
        <MediaCarousel items={mediaItems} isSinglePostOpen={slimView} />
      ) : (
        <MediaViewer
          items={mediaItems}
          isSinglePostOpen={slimView}
          onViewMore={onMore}
        />
      )}
      {content && original !== selected ? (
        <SourceContent
          direction={i18n.resolvedLanguage === 'en' ? 'ltr' : 'rtl'}
          onClick={() => setIsTranslated(prev => !prev)}
        >
          <Typography>
            {isTranslated ? t('sourceLanguage') : t('displayTranslate')}
          </Typography>
          <LoopIcon color={colorPalette.colors.spBlue} size={14} />
        </SourceContent>
      ) : (
        ''
      )}
      {!slimView && <Divider />}

      {slimView ? (
        <SlimFooter
          onSave={handleSaveToCollection} 
          onShare={onShare}
          id={id}
        />
      ) : (
        <Footer
          onSave={handleSaveToCollection} 
          onShare={onShare}
          id={id}
          onMore={isRawPost ? undefined : onMore}
        />
      )}

      <CollectionModal
        isOpen={isCollectionModalOpen}
        onClose={handleCloseModal}
        collections={collections}
      />
    </StyledPost>
  );
}