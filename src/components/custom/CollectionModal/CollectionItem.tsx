import { styled, Typography } from '@mui/material';
import { StyledCollectionItem } from './CollectionModal.style';
import { Collection } from './useCollectionModal';
import { DocumetsIcon, PersonalCollectionIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';
import { useTranslation } from 'react-i18next';

const CollectionTitle = styled(Typography)`
  fontsize: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colorPalette.colors.spBlack};
`;

const CollectionLastUpdate = styled(Typography)`
  font-size: 0.8rem;
  font-weight: 400;
  direction: rtl;
  color: ${({ theme }) => theme.colorPalette.text.disabled};
`;

const CollectionHeader = styled('div')`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 0.2rem;
`;

interface CollectionItemProps {
  collection: Collection;
  onClick: (collectionId: string) => void;
  isSelected: boolean;
}

export const CollectionItem = ({
  collection,
  onClick,
  isSelected,
}: CollectionItemProps) => {
  const { t } = useTranslation();

  return (
    <StyledCollectionItem
      key={collection.id}
      onClick={() => onClick(collection.id)}
      isSelected={isSelected}
    >
      <CollectionHeader>
        {collection.private ? (
          <PersonalCollectionIcon
            color={colorPalette.icon.color}
            fill={colorPalette.common.white}
            size={20}
          />
        ) : (
          <DocumetsIcon
            color={colorPalette.icon.color}
            fill={colorPalette.common.white}
            size={20}
          />
        )}
        <CollectionTitle>{collection.name}</CollectionTitle>
      </CollectionHeader>
      <CollectionLastUpdate>
        {t('lastCollectionItem')}{' '}
        {collection.lastUpdate.toLocaleDateString('he-IL')}{' '}
      </CollectionLastUpdate>
    </StyledCollectionItem>
  );
};
