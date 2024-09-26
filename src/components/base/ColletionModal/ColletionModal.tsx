import { Divider, Typography, TextField, Button } from '@mui/material';
import { 
  SingleContainerMetadataContainer,
  ModalViewContainer,
  StyledColletionModal,
  ExtraInfoContainer,
  CollectionItem,
  CollectionIcon,
  SearchContainer,
  ActionsContainer 
} from './ColletionModal.style';
import { colorPalette } from '../../../context/theme/lightMode';
import { useState } from 'react';

export interface ColletionModalProps {
  isOpen: boolean;
  onClose?: () => void;
  collections: {
    id: number | string,
    name: string,
  }[];
}

const handleCollectionClick = (
  id: number | string, 
  selectedCollections: (number | string)[], 
  setSelectedCollections: (ids: (number | string)[]) => void
) => {
  if (selectedCollections.includes(id)) {
    setSelectedCollections(selectedCollections.filter(selectedId => selectedId !== id));
  } else {
    setSelectedCollections([...selectedCollections, id]);
  }
};

export function ColletionModal({ collections, isOpen, onClose }: ColletionModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollections, setSelectedCollections] = useState<(number | string)[]>([]);

  const filteredCollections = collections.filter(collection => 
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConfirm = () => {
    console.log('Selected Collections IDs:', selectedCollections);
    setSelectedCollections([]);
    if (onClose) onClose();
  };

  return (
    <StyledColletionModal open={isOpen} onClose={onClose}>
      <ModalViewContainer>
        <SingleContainerMetadataContainer>
          <Typography
            sx={{
              marginBottom: '0.5rem',
              color: colorPalette.text.secondary,
            }}
          >
            שמירה לאוספים
          </Typography>
          <SearchContainer>
            <TextField 
              fullWidth
              placeholder="חפש אוסף..." 
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          <ExtraInfoContainer>
            {filteredCollections.map((collection) => (
              <CollectionItem
                key={collection.id}
                onClick={() => handleCollectionClick(collection.id, selectedCollections, setSelectedCollections)}
                isSelected={selectedCollections.includes(collection.id)}
              >
                <div className="collection-text">
                  {collection.name}
                </div>
                <div className="collection-icon">
                  <CollectionIcon />
                </div>
                
              </CollectionItem>
            ))}
          </ExtraInfoContainer>
        </SingleContainerMetadataContainer>
        <ActionsContainer>
          <Button variant="outlined" onClick={onClose}>ביטול</Button>
          <Button variant="contained" color="primary" onClick={handleConfirm}>אישור</Button>
        </ActionsContainer>
      </ModalViewContainer>
    </StyledColletionModal>
  );
}
