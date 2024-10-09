import { Typography } from '@mui/material';
import {
  ChipContainer,
  ClearFilters,
  FilterChip,
  StyledFilterByChips,
} from './FilterByChips.style';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';

export interface FilterByChipsProps {
  appliedFilters: string[];
  onClearFilters?: () => void;
  onDeleteFilter?: (filter: string) => void;
}

/**
 * FilterByChips component displays applied filters with options to delete them or clear all.
 *
 * Usage:
 * ```tsx
 * <FilterByChips
 *   appliedFilters={['filter1', 'filter2']}
 *   onDeleteFilter={(filter) => console.log(filter)}
 *   onClearFilters={() => console.log('Cleared')}
 * />
 * ```
 */
export function FilterByChips({
  onClearFilters,
  onDeleteFilter,
  appliedFilters = [],
}: FilterByChipsProps) {
  const { t } = useTranslation();

  return (
    <StyledFilterByChips>
      <Typography>{t('filteredBy')}:</Typography>
      <ChipContainer>
        {appliedFilters.map((filter: string, index: number) => (
          <FilterChip
            key={index}
            label={filter}
            variant='outlined'
            onDelete={() => onDeleteFilter?.(filter)}
            deleteIcon={
              <CloseIcon sx={{ width: '0.8rem', height: '0.8rem' }} />
            }
          />
        ))}
      </ChipContainer>
      {appliedFilters.length > 0 ? (
        <ClearFilters
          label={t('clearFilters')}
          variant='outlined'
          onClick={onClearFilters}
        />
      ) : null}
    </StyledFilterByChips>
  );
}
