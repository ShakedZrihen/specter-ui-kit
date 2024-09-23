import { useRef, useState } from 'react';
import { SearchType } from '../SearchSettings/SearchSettings.types';

interface UseSearchProps {
  onSearch?: (searchTerm: string, searchType: SearchType) => void;
}

export const useSearch = ({ onSearch }: UseSearchProps) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Semantic);
  const searchInputRef = useRef<HTMLDivElement>(null);

  const onSearchSettingsChange = (
    searchType: SearchType,
    { operator }: { operator: string } = { operator: '' },
  ) => {
    setSearchType(searchType);

    if (operator) {
      setSearchTerm(searchTerm + ` ${operator} `);
    }

    if (searchInputRef.current) {
      // refocus on search for better UX
      searchInputRef.current.focus();
    }
  };

  const performSearch = () => {
    onSearch?.(searchTerm, searchType);
  };

  return {
    searchFocused,
    setSearchFocused,
    searchTerm,
    setSearchTerm,
    searchType,
    setSearchType,
    searchInputRef,
    onSearchSettingsChange,
    performSearch,
  };
};
