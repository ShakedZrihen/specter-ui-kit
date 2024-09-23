import React, { useRef, useState } from 'react';
import {
  AppNameTypography,
  StyledAppBar,
  TopbarAppDetailsContainer,
  TopbarContainer,
  TopbarSearchContainer,
  TopbarUserContextContainer,
  TopbarWithSettingBar,
} from './Topbar.style';
import { Search } from './Search/Search';
import { TranslationButton } from '../../custom/TranslationButton/TranslationButton';
import { SearchSettings } from './SearchSettings';
import { SearchType } from './SearchSettings/SearchSettings.types';

interface SearchProps {
  onSearch?: (searchTerm: string, searchType: string) => void;
  withSearch?: boolean;
  searchSettingsWidth?: string;
}

interface TranslationProps {
  withTranslationButton?: boolean;
  supportedLanguages?: string[];
  onLanguageChange?: (language: string) => void;
}
interface TopbarProps extends SearchProps, TranslationProps {
  appName: string;
  appIcon?: React.ReactElement;
  className?: string;
}

export const Topbar = ({
  appName,
  appIcon,
  className,
  // search props
  withSearch,
  searchSettingsWidth,
  onSearch,
  // translation props
  withTranslationButton,
  supportedLanguages = ['en', 'ar', 'he'],
  onLanguageChange,
}: TopbarProps) => {
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

  return (
    <TopbarWithSettingBar>
      <StyledAppBar className={className}>
        <TopbarContainer>
          <TopbarAppDetailsContainer>
            {appIcon}
            <AppNameTypography>{appName}</AppNameTypography>
          </TopbarAppDetailsContainer>
          {withSearch && onSearch && (
            <TopbarSearchContainer>
              <Search
                onSearch={performSearch}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onFocus={() => setSearchFocused(true)}
                searchInputRef={searchInputRef}
              />
            </TopbarSearchContainer>
          )}
          <TopbarUserContextContainer>
            {withTranslationButton && onLanguageChange && (
              <TranslationButton
                onLanguageChange={onLanguageChange}
                supportedLanguages={supportedLanguages}
              />
            )}
          </TopbarUserContextContainer>
        </TopbarContainer>
      </StyledAppBar>
      {withSearch && searchFocused && (
        <SearchSettings
          width={searchSettingsWidth}
          onChange={onSearchSettingsChange}
          searchType={searchType}
          setSearchType={setSearchType}
        />
      )}
    </TopbarWithSettingBar>
  );
};
