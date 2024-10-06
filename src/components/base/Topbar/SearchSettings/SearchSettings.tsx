import { CloseIcon } from '../../../icons';
import {
  AdditionalSearchSettingContainer,
  AdditionalSearchSettingTitle,
  CloseSearchSettings,
  SearchOperator,
  SearchOperatorContainer,
  SearchSettingsFiltersContainer,
  StyledButton,
  StyledSearchSettings,
} from './SearchSettings.style';
import { SearchType } from './SearchSettings.types';
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface SearchSettingsProps {
  searchSettingsStyleOverrides?: string;
  searchType?: SearchType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (searchType: SearchType, extraInfo?: any) => void;
  close: () => void;
}

export function SearchSettings({
  searchSettingsStyleOverrides,
  searchType,
  onChange,
  close,
}: SearchSettingsProps) {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSearchSettingsChange = (searchType: SearchType, extraInfo?: any) => {
    onChange?.(searchType, extraInfo);
  };

  const supportedOperators = ['OR', 'AND', 'NOT', '*', '"', ')', '('];

  return (
    <StyledSearchSettings
      searchSettingsStyleOverrides={searchSettingsStyleOverrides}
    >
      <SearchSettingsFiltersContainer>
        <StyledButton
          selected={searchType === SearchType.Semantic}
          onClick={() => {
            onSearchSettingsChange(SearchType.Semantic);
          }}
        >
          {t('lineSemanticsearch')} 
        </StyledButton>
        <StyledButton
          selected={searchType === SearchType.Exact}
          onClick={() => {
            onSearchSettingsChange(SearchType.Exact);
          }}
        >
          {t('lineExactsearch')} 
        </StyledButton>
        {searchType === SearchType.Exact && (
          <AdditionalSearchSettingContainer>
            <Divider />
            <AdditionalSearchSettingTitle>
              {t('lineSearchPrecision')} 
            </AdditionalSearchSettingTitle>
            <SearchOperatorContainer>
              {supportedOperators.map(operator => (
                <SearchOperator
                  key={operator}
                  onClick={() =>
                    onSearchSettingsChange(SearchType.Exact, { operator })
                  }
                >
                  {operator}
                </SearchOperator>
              ))}
            </SearchOperatorContainer>
          </AdditionalSearchSettingContainer>
        )}
      </SearchSettingsFiltersContainer>

      <CloseSearchSettings onClick={close}>
        <CloseIcon size={24} />
      </CloseSearchSettings>
    </StyledSearchSettings>
  );
}
