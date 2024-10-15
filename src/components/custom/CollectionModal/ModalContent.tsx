import { Divider, styled, Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ExtraInfoContainer } from './CollectionModal.style';
import { Collection } from './useCollectionModal';
import { CollectionItem } from './CollectionItem';

const StyledModalContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const StyledTabs = styled(Tabs)`
  flex-direction: row-reverse;
  direction: rtl;
  width: 30rem;
  .MuiTabs-indicator {
    background-color: ${({ theme }) => theme.colorPalette.icon.color};
  }
`;

const StyledTab = styled(Tab)`
  font-size: 1rem;
  padding: 0;
  font-weight: normal;

  &.Mui-selected {
    font-weight: bold;
    color: ${({ theme }) => theme.colorPalette.icon.color} !important;
  }
`;

const StyledDivider = styled(Divider)`
  width: 100%;
`;

interface ModalContentProps {
  activeTab: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  allCollectionsCount: number;
  publicCollectionsCount: number;
  privateCollectionsCount: number;
  filteredCollections: Collection[];
  selectedCollections: string[];
  handleCollectionClick: (collectionId: string) => void;
}

export const ModalContent = ({
  activeTab,
  handleTabChange,
  allCollectionsCount,
  publicCollectionsCount,
  privateCollectionsCount,
  filteredCollections,
  selectedCollections,
  handleCollectionClick,
}: ModalContentProps) => {
  const { t } = useTranslation();

  return (
    <StyledModalContent>
      <StyledTabs
        variant='fullWidth'
        value={activeTab}
        onChange={handleTabChange}
        textColor='primary'
        indicatorColor='primary'
        aria-label='collection type tabs'
      >
        <StyledTab label={`${t('allCollections')} (${allCollectionsCount})`} />
        <StyledTab
          label={`${t('publicCollections')} (${publicCollectionsCount})`}
        />
        <StyledTab
          label={`${t('privateCollections')} (${privateCollectionsCount})`}
        />
      </StyledTabs>
      <StyledDivider />
      <ExtraInfoContainer>
        {filteredCollections.map((collection: Collection) => (
          <CollectionItem
            collection={collection}
            isSelected={selectedCollections.includes(collection.id)}
            onClick={handleCollectionClick}
          />
        ))}
      </ExtraInfoContainer>
    </StyledModalContent>
  );
};
