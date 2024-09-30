import { Divider, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { 
  SingleContainerMetadataContainer,
  ModalViewContainer,
  StyledColletionModal,
  ExtraInfoContainer,
  CollectionItem,
  SearchContainer,
  ActionsContainer ,
  CollectionIcon
} from './CollectionModal.style';
import { colorPalette } from '../../../context/theme/lightMode';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { CloseIcon } from '../../icons';

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

export function CollectionModal({ collections, isOpen, onClose }: ColletionModalProps) {
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
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            color: colorPalette.text.secondary,
          }}
        >
          <CloseIcon color='black'/>
        </IconButton>

        <SingleContainerMetadataContainer>
          <Typography  style={{
            fontSize: '21px',
            fontWeight: 700,
            lineHeight: '28px',
            textAlign: 'right',
            padding: '6px'
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
              sx={{ 
                width: '100%',
                marginLeft: 'auto',
                marginRight: '0',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '20px',
                  height: '40px',
                }
              }}
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
                <Typography 
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '18px',
                    textAlign: 'center',
                    padding: '6px',
                  }}
                >
                  {collection.name}
                </Typography>
                <div>
                <Typography 
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '18px',
                    textAlign: 'center',
                    color: '#6E747F'
                  }}
                >
                  4d
                </Typography>
                </div>
                </div>
                <CollectionIcon />
              </CollectionItem>
            ))}
          </ExtraInfoContainer>
        </SingleContainerMetadataContainer>

        <ActionsContainer>
          <Button 
            variant="outlined" 
            onClick={onClose}
            sx={{ borderRadius: '20px' }}
          >
            ביטול
          </Button>
          <Button 
            sx={{
              borderRadius: '20px',
              backgroundColor: '#2860A8',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#1E4A82',
              },
            }}
          >
            אישור
          </Button>
        </ActionsContainer>
      </ModalViewContainer>
    </StyledColletionModal>
  );
}