import {
  ModalViewContainer,
  StyledColletionModal,
} from './CollectionModal.style';
import { CollectionModalProps, useCollectionModal } from './useCollectionModal';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';

export function CollectionModal(props: CollectionModalProps) {
  const {
    isOpen,
    handleConfirm,
    searchTerm,
    setSearchTerm,
    activeTab,
    handleTabChange,
    allCollectionsCount,
    publicCollectionsCount,
    privateCollectionsCount,
    filteredCollections,
    selectedCollections,
    handleCollectionClick,
    onClose,
  } = useCollectionModal(props);

  return (
    <StyledColletionModal open={isOpen} onClose={onClose}>
      <ModalViewContainer>
        <ModalHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ModalContent
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          allCollectionsCount={allCollectionsCount}
          publicCollectionsCount={publicCollectionsCount}
          privateCollectionsCount={privateCollectionsCount}
          filteredCollections={filteredCollections}
          selectedCollections={selectedCollections}
          handleCollectionClick={handleCollectionClick}
        />
        <ModalActions onClose={onClose} handleConfirm={handleConfirm} />
      </ModalViewContainer>
    </StyledColletionModal>
  );
}
