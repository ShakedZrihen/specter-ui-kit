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
    original: string;
    translated?: string;
    translatedHebrew?: string;
    selected?: string;
  };
  isRead: boolean;
  enrichments?: {
    metadata?: Record<string, string>;
    ai?: Record<string, string>;
    operationalHistory?: Record<string, string>;
    relatedEntities?: Record<string, string>;
  };
}

export { IPost, PostMedia };
