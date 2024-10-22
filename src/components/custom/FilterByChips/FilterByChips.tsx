import { Typography } from '@mui/material';
import {
  ChipContainer,
  ClearFilters,
  FilterChip,
  StyledFilterByChips,
} from './FilterByChips.style';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { colorPalette } from '../../../context/theme/lightMode';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
export interface FilterByChipsProps {
  appliedFilters: Object;
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
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const filterValues: string[] = Object.entries(appliedFilters).flatMap(
      ([key, value]) => {
        if (key === 'creationTimeStart' || key === 'creationTimeEnd') {
          return [`מתאריך: ${format(new Date(value), 'dd/MM/yyyy')}`];
        }
        return Array.isArray(value) ? value : [value.toString()];
      },
    );
    setValues(filterValues);
  }, [appliedFilters]);

  return (
    <StyledFilterByChips>
      <Typography>{t('filteredBy')}:</Typography>
      <ChipContainer>
        {values.map((filter: string, index: number) => (
          <FilterChip
            key={index}
            label={filter}
            variant='outlined'
            onDelete={() => onDeleteFilter?.(filter)}
            deleteIcon={
              <CloseIcon
                sx={{
                  width: '0.8rem',
                  height: '0.8rem',
                  color: `${colorPalette.colors.spBlack} !important`,
                }}
              />
            }
          />
        ))}
      </ChipContainer>
      {values.length > 0 ? (
        <ClearFilters
          label={t('clearFilters')}
          variant='outlined'
          onClick={onClearFilters}
        />
      ) : null}
    </StyledFilterByChips>
  );
}
