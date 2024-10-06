import { useEffect, useRef, useState } from 'react';
import { SearchType } from '../SearchSettings/SearchSettings.types';

interface UseSearchProps {
  onSearch?: (searchTerm: string, searchType: SearchType) => void;
  defaultSearchTerm?: string;
  defaultSearchType?: SearchType;
}

export const useSearch = ({
  onSearch,
  defaultSearchTerm = '',
  defaultSearchType = SearchType.Exact,
}: UseSearchProps) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
  const [searchType, setSearchType] = useState<SearchType>(defaultSearchType);
  const searchInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchTerm(defaultSearchTerm);
    setSearchType(defaultSearchType);
  }, [defaultSearchTerm, defaultSearchType]);

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

  const closeSearchSettings = () => {
    setSearchFocused(false);
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
    closeSearchSettings,
  };
};
