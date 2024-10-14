interface PostMedia {
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  extraInfo?: Record<string, string>;
}

interface IPost {
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
  medias?: PostMedia[];
  content: {
    original: string | undefined;
    translated?: string;
    translatedHebrew?: string;
    selected?: string;
  };
  isRead: boolean;
  isRawPost: boolean;
  enrichments?: {
    metadata?: Record<string, any>;
    ai?: Record<string, any>;
    operationalHistory?: Record<string, any>;
    relatedEntities?: Record<string, any>;
  };
}

export { IPost, PostMedia };
