import SearchIcon from '@mui/icons-material/Search';
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledSearch,
} from './Search.style';
import { useState } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export const Search = ({ onSearch, onFocus, onBlur }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  // TODO: add support of multiple search terms
  // add support for chips

  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='חפש...'
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            onSearch(searchTerm);
          }
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        inputProps={{ 'aria-label': 'search' }}
      />
    </StyledSearch>
  );
};
