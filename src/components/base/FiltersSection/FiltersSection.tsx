import { Typography } from '@mui/material';
import {
  SelectedFilters,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from './FiltersSection.style';
import { ChevronDownIcon, ChevronLeftIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';
import { JSXElementConstructor, useState } from 'react';
import { SelectedFiltersIndicator } from './SelectedFiltersIndicator';

export interface SelectedFilters {
  // creationTime?: string;
  // lastUpdate?: string;
  // systemFirstSeen?: string;
  // timeFrame?: string;
  [key: string]: string | undefined;
}

export interface FilterDefinition {
  filterName: string;
  Component: JSXElementConstructor<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
    onChange: (selectedValue?: string) => void;
  }>;
}

export interface FiltersSectionProps {
  filterName: string;
  selectedFilters?: SelectedFilters;
  onChange: (filterName: string, selectedValue?: string) => void;
  filterList: FilterDefinition[];
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
  filterList,
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
        {filterList.map(({ filterName, Component }: FilterDefinition) => (
          <Component
            key={filterName}
            value={selectedFilters[filterName]}
            onChange={selectedValue => {
              if (!selectedValue) {
                // unset filter
                return onChange(filterName, undefined);
              }

              onChange(filterName, selectedValue);
            }}
          />
        ))}
      </StyledAccordionDetails>
    </StyledAccordion>
  );
}
