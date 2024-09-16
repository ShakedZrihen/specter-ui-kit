import { Typography } from '@mui/material';
import {
  SelectedFilters,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from './FiltersSection.style';
import { ChevronDownIcon, ChevronLeftIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';
import { useState } from 'react';
import { CreationTimeFilter } from './Filters/CreationTimeFilter';
import { SelectedFiltersIndicator } from './SelectedFiltersIndicator';

export interface SelectedFilters {
  creationTime?: string;
  lastUpdate?: string;
  systemFirstSeen?: string;
  timeFrame?: string;
}

export interface FiltersSectionProps {
  filterName: string;
  selectedFilters?: SelectedFilters;
  onChange: (filterName: string, selectedValue?: string) => void;
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <FiltersSection />
 * ```
 */
export function FiltersSection({
  filterName,
  selectedFilters = {},
  onChange,
}: FiltersSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const selectedFiltersLength = Object.keys(selectedFilters).length;

  return (
    <StyledAccordion
      expanded={expanded}
      onChange={(e, isExpanded) => handleChange(isExpanded)}
    >
      <StyledAccordionSummary
        expandIcon={
          expanded ? (
            <ChevronDownIcon color={colorPalette.text.primary} />
          ) : (
            <ChevronLeftIcon color={colorPalette.text.primary} />
          )
        }
      >
        <Typography sx={{ marginRight: '0.5rem', fontWeight: 600, flex: 1 }}>
          {filterName}
        </Typography>
        <SelectedFiltersIndicator
          selectedFiltersNumber={selectedFiltersLength}
        />
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <CreationTimeFilter
          value={selectedFilters.creationTime}
          onChange={date => {
            if (!date) {
              // unset filter
              return onChange('creationTime', undefined);
            }

            onChange('creationTime', new Date(date).toISOString());
          }}
        />
      </StyledAccordionDetails>
    </StyledAccordion>
  );
}
