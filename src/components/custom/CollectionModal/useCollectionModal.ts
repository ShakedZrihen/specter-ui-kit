import { useState } from 'react';

export interface Collection {
  id: string;
  name: string;
  private: boolean;
  lastUpdate: Date;
}

export interface CollectionModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onSave?: (collectionIds: string[]) => void;
  postId?: string;
  collections: Collection[];
}

export enum Tabs {
  AllCollection = 0,
  SharedCollections = 1,
  UserCollections = 2,
}

export const useCollectionModal = ({
  collections,
  onClose,
  onSave,
  ...rest
}: CollectionModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState(Tabs.AllCollection);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleCollectionClick = (id: string) => {
    if (selectedCollections.includes(id)) {
      setSelectedCollections(
        selectedCollections.filter(selectedId => selectedId !== id),
      );
    } else {
      setSelectedCollections([...selectedCollections, id]);
    }
  };

  const allCollectionsCount = collections.length;

  const privateCollectionsCount = collections.filter(
    collection => collection.private,
  ).length;

  const publicCollectionsCount = collections.filter(
    collection => !collection.private,
  ).length;

  const filteredCollections = collections.filter(collection => {
    const matchesSearchTerm = collection.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (activeTab === Tabs.UserCollections) {
      return matchesSearchTerm && collection.private;
    }
    if (activeTab === Tabs.SharedCollections) {
      return matchesSearchTerm && !collection.private;
    }
    return matchesSearchTerm;
  });

  const handleConfirm = () => {
    onSave?.(selectedCollections);
    setSelectedCollections([]);
    onClose?.();
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCollections,
    setSelectedCollections,
    activeTab,
    setActiveTab,
    handleTabChange,
    handleCollectionClick,
    allCollectionsCount,
    privateCollectionsCount,
    publicCollectionsCount,
    filteredCollections,
    handleConfirm,
    onClose,
    ...rest,
  };
};
