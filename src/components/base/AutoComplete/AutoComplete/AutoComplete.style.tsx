import { styled, TextField } from '@mui/material';

export const StyledAutoComplete = styled('div')``;

export const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiAutocomplete-tag': {
      backgroundColor: '#D6E6FE',
      color: "#000000",
      borderRadius: '1rem',
      display: 'flex',
    alignItems: 'center',
  },
  '& .MuiChip-deleteIcon': {
    marginLeft: '0.2rem',
    color: "#989898",
    '&:hover': {
      color: "#989898", 
    },
  },
  }));
