import { Divider, Link } from '@mui/material';
import {
  FiltersHeader,
  StyledFiltersMenu,
  Title,
  StyledDrawer,
  CloseMenuContainer,
  FiltersControllerButton,
  FiltersContainer,
  FiltersMenuContainer,
  FiltersActionContainer,
  StyledTypography,
} from './FiltersMenu.style';
import { useState } from 'react';
import { CloseIcon, FilterIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';
import {
  FilterDefinition,
  FiltersSection,
} from '../FiltersSection/FiltersSection';

interface FilterSectionDefinition {
  filterSectionName: string;
  filterList: FilterDefinition[];
}
interface FiltersMenuProps {
  filters: FilterSectionDefinition[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSave: (filters: any) => void; //TODO: Add type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menuOverides?: any;
  className?: string;
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <FiltersMenu />
 * ```
 */
export function FiltersMenu({
  filters,
  onSave,
  menuOverides = {},
  className,
}: FiltersMenuProps) {
  const [open, toggleDrawer] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    [filterSectionName: string]: { [filterName: string]: string };
  }>({});
  const updateSelectedFilters = (
    filterSectionName: string,
    filterName: string,
    selectedValue?: string | null,
  ) => {
    if (selectedValue) {
      setSelectedFilters(prev => ({
        ...prev,
        [filterSectionName]: {
          ...prev[filterSectionName],
          [filterName]: selectedValue,
        },
      }));
    } else {
      setSelectedFilters(prev => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [filterName]: toRemove, ...newFilterSection } =
          prev[filterSectionName]; // Remove the filterName from the selectedFilters

        return {
          ...prev,
          [filterSectionName]: newFilterSection,
        };
      });
    }
  };

  return (
    <StyledFiltersMenu className={className}>
      <FiltersControllerButton onClick={() => toggleDrawer(true)}>
        <FilterIcon color={colorPalette.common.icon} size={18} />
        <Title>פילטרים</Title>
      </FiltersControllerButton>
      <StyledDrawer
        open={open}
        onClose={() => toggleDrawer(false)}
        hideBackdrop={true}
        sx={menuOverides}
      >
        <FiltersMenuContainer>
          <FiltersHeader>
            <FilterIcon color={colorPalette.common.icon} size={18} />
            <Title>פילטרים</Title>
            <CloseMenuContainer onClick={() => toggleDrawer(false)}>
              <CloseIcon color={colorPalette.text.primary} size={25} />
            </CloseMenuContainer>
          </FiltersHeader>
          <Divider />
          <FiltersContainer>
            {filters.map(({ filterSectionName, filterList }) => {
              return (
                <FiltersSection
                  key={filterSectionName}
                  filterName={filterSectionName}
                  filterList={filterList}
                  selectedFilters={selectedFilters[filterSectionName]}
                  onChange={(filterName, selectedValue) => {
                    updateSelectedFilters(
                      filterSectionName,
                      filterName,
                      selectedValue,
                    );
                  }}
                />
              );
            })}
          </FiltersContainer>
          <Divider />
          <FiltersActionContainer>
            <Link onClick={() => onSave(selectedFilters)}>
              <StyledTypography>פילטור</StyledTypography>
            </Link>
          </FiltersActionContainer>
        </FiltersMenuContainer>
      </StyledDrawer>
    </StyledFiltersMenu>
  );
}
