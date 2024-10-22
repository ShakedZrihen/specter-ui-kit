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
  onSave?: ({
    collectionsToAdd,
    collectionsToDelete,
  }: {
    collectionsToAdd: string[];
    collectionsToDelete: string[];
  }) => void;
  postId?: string;
  collections: Collection[];
  defaultSelectedCollections?: string[];
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
  defaultSelectedCollections = [],
  ...rest
}: CollectionModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollections, setSelectedCollections] = useState<string[]>(
    defaultSelectedCollections,
  );
  const [collectionsToDelete, setCollectionsToDelete] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState(Tabs.AllCollection);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const unselectCollection = (id: string) => {
    // remove from selected
    setSelectedCollections(
      selectedCollections.filter(selectedId => selectedId !== id),
    );
    // if it was pre-selected - mark as to delete
    if (defaultSelectedCollections.includes(id)) {
      setCollectionsToDelete([...collectionsToDelete, id]);
    }
  };

  const selectCollection = (id: string) => {
    // add to selected
    setSelectedCollections([...selectedCollections, id]);
    // remove from to delete list
    setCollectionsToDelete(
      collectionsToDelete.filter(selectedId => selectedId !== id),
    );
  };

  const handleCollectionClick = (id: string) => {
    if (selectedCollections.includes(id)) {
      unselectCollection(id);
    } else {
      selectCollection(id);
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
    onSave?.({ collectionsToAdd: selectedCollections, collectionsToDelete });
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
