import { useState } from 'react';
import { FiltersMenu } from '../../custom';
import { AutoComplete } from '../../base/AutoComplete';
import { FilterSectionDefinition } from '../FiltersMenu/FiltersMenu';
import { CreationTimeFilter } from '../FiltersSection/Filters/CreationTimeFilter';
import { useTranslation } from 'react-i18next';

export function SpecterFiltersMenu() {
  const { t } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState<{
    [filterSectionName: string]: { [filterName: string]: string | string[] };
  }>({});

  const filters: FilterSectionDefinition[] = [
    {
      filterSectionName: t('bySets'),
      filterList: [
        {
          filterName: 'collections',
          Component: props => (
            <AutoComplete
              label={t('collections')}
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
        {
          filterName: 'savedFilters',
          Component: props => (
            <AutoComplete
              label={t('collections')}
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
      ],
    },
    {
      filterSectionName: t('byCreationTime'),
      filterList: [
        {
          filterName: 'creationTimeStart',
          Component: props => (
            <CreationTimeFilter
              onChange={props.onChange}
              value={props.value}
              label={t('start')}
            />
          ),
        },
        {
          filterName: 'creationTimeEnd',
          Component: props => (
            <CreationTimeFilter
              onChange={props.onChange}
              value={props.value}
              label={t('end')}
            />
          ),
        },
      ],
    },
    {
      filterSectionName: t('bySource'),
      filterList: [
        {
          filterName: 'platformType',
          Component: props => (
            <AutoComplete
              label={t('platform')}
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
      ],
    },
    {
      filterSectionName: t('byField'),
      filterList: [
        {
          filterName: 'arena',
          Component: props => (
            <AutoComplete
              label={t('arena')}
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
        {
          filterName: 'research',
          Component: props => (
            <AutoComplete
              label={t('researchTopics')}
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
      ],
    },
  ];

  return (
    <FiltersMenu
      filters={filters}
      onSave={console.log}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
    />
  );
}
