interface PostMedia {
  original: string;
  thumbnail?: string;
  description?: string;
  type?: 'image' | 'video';
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
  mediaItems?: PostMedia[];
  content: {
    original: string | undefined;
    translated?: string;
    translatedHebrew?: string;
    selected?: string;
  };
  isRead: boolean;
  isRawPost: boolean;
  enrichments?: {
    metadata?: Record<string, string>;
    ai?: Record<string, string>;
    operationalHistory?: Record<string, string>;
    relatedEntities?: Record<string, string>;
  };
}

export { IPost, PostMedia };
