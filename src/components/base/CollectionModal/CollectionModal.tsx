import {
  Divider,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Tabs,
  Tab,
} from '@mui/material';
import {
  SingleContainerMetadataContainer,
  ModalViewContainer,
  StyledColletionModal,
  ExtraInfoContainer,
  CollectionItem,
  PrivateCollectionIcon,
  SearchContainer,
  ActionsContainer,
  CollectionIcon,
} from './CollectionModal.style';
import { colorPalette } from '../../../context/theme/lightMode';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { CloseIcon } from '../../icons';

export interface ColletionModalProps {
  isOpen: boolean;
  onClose?: () => void;
  collections: {
    id: number | string;
    name: string;
    private: boolean;
    lastUpdate: Date;
  }[];
}

const handleCollectionClick = (
  id: number | string,
  selectedCollections: (number | string)[],
  setSelectedCollections: (ids: (number | string)[]) => void,
) => {
  if (selectedCollections.includes(id)) {
    setSelectedCollections(
      selectedCollections.filter(selectedId => selectedId !== id),
    );
  } else {
    setSelectedCollections([...selectedCollections, id]);
  }
};

export function CollectionModal({
  collections,
  isOpen,
  onClose,
}: ColletionModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollections, setSelectedCollections] = useState<
    (number | string)[]
  >([]);
  const [activeTab, setActiveTab] = useState(3);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Calculate the count for each type of collection
  const allCollectionsCount = collections.length;
  const privateCollectionsCount = collections.filter(collection => collection.private).length;
  const publicCollectionsCount = collections.filter(collection => !collection.private).length;

  // Filter collections based on the search term and active tab
  const filteredCollections = collections.filter(collection => {
    const matchesSearchTerm = collection.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (activeTab === 2) return matchesSearchTerm && collection.private;
    if (activeTab === 1) return matchesSearchTerm && !collection.private; 
    return matchesSearchTerm; // All collections
  });

  const handleConfirm = () => {
    console.log('Selected Collections IDs:', selectedCollections);
    setSelectedCollections([]);
    if (onClose) onClose();
  };

  return (
    <StyledColletionModal open={isOpen} onClose={onClose}>
      <ModalViewContainer>
      <IconButton
  aria-label='close'
  onClick={onClose} 
  sx={{
    position: 'absolute',
    top: 8,
    left: 8,
    color: colorPalette.text.secondary,
  }}
>
  <CloseIcon color='black' />
</IconButton>


        <SingleContainerMetadataContainer>
          <Typography
            style={{
              fontSize: '21px',
              fontWeight: 700,
              lineHeight: '28px',
              textAlign: 'right',
              padding: '6px',
            }}
          >
            שמירה לאוסף
          </Typography>

          <SearchContainer>
            <TextField
              fullWidth
              placeholder='חפש אוסף...'
              variant='outlined'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              sx={{
                width: '100%',
                marginLeft: 'auto',
                marginRight: '0',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '20px',
                  height: '40px',
                },
              }}
            />
          </SearchContainer>

          <Tabs
          variant='fullWidth'
            value={activeTab}
            onChange={handleTabChange}
            textColor='primary'
            indicatorColor='primary'
            aria-label='collection type tabs'
            sx={{
              marginBottom: '16px',
              justifyContent: 'space-between', 
              direction: 'rtl', 
              display: 'flex',
              '& .MuiTab-root': {
                fontWeight:'bold',
                fontSize:'17px', 
              },
            }}
          >
            <Tab label={`כל האוספים (${allCollectionsCount})`} />
            <Tab label={`אוספים ציבוריים (${publicCollectionsCount})`} />
            <Tab label={`אוספים אישיים (${privateCollectionsCount})`} />
          </Tabs>

          <ExtraInfoContainer>
  {filteredCollections.map(collection => (
    <CollectionItem
      key={collection.id}
      onClick={() =>
        handleCollectionClick(
          collection.id,
          selectedCollections,
          setSelectedCollections,
        )
      }
      isSelected={selectedCollections.includes(collection.id)}
    >
      <div className='collection-text'>
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
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '18px',
              textAlign: 'center',
              color: '#6E747F',
            }}
          >
            {collection.lastUpdate.toLocaleDateString('he-IL')}
          </Typography>
        </div>
      </div>
      
      {collection.private ? <PrivateCollectionIcon /> : <CollectionIcon />}
    </CollectionItem>
  ))}
</ExtraInfoContainer>

        </SingleContainerMetadataContainer>

        <ActionsContainer>
          <Button
            variant='outlined'
            onClick={onClose}
            sx={{ borderRadius: '20px' }}
          >
            ביטול
          </Button>
          <Button onClick={handleConfirm}
            sx={{
              borderRadius: '20px',
              backgroundColor: '#2860A8',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#1E4A82',
              },
            }}
          >
       שמירה לאוסף זה
          </Button>
        </ActionsContainer>
      </ModalViewContainer>
    </StyledColletionModal>
  );
}
