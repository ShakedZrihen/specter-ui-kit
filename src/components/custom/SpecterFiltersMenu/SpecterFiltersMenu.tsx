import { FiltersMenu } from '../../base';
import { AutoComplete } from '../../base/AutoComplete';
import { FilterSectionDefinition } from '../../base/FiltersMenu/FiltersMenu';
import { CreationTimeFilter } from '../../base/FiltersSection/Filters/CreationTimeFilter';

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <SpecterFiltersMenu />
 * ```
 */
export function SpecterFiltersMenu() {
  const filters: FilterSectionDefinition[] = [
    {
      filterSectionName: 'לפי סטים',
      filterList: [
        {
          filterName: 'collections',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Component: props => (
            <AutoComplete
              label='אוספים'
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
        {
          filterName: 'savedFilters',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Component: props => {
            return (
              <AutoComplete
                label='אוספים'
                values={props.value ?? []}
                onChange={props.onChange}
              />
            );
          },
        },
      ],
    },
    {
      filterSectionName: 'לפי זמן יצירה',
      filterList: [
        {
          filterName: 'creationTimeStart',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Component: props => (
            <CreationTimeFilter
              onChange={props.onChange}
              value={props.value}
              label='התחלה'
            />
          ),
        },
        {
          filterName: 'creationTimeEnd',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Component: props => (
            <CreationTimeFilter
              onChange={props.onChange}
              value={props.value}
              label='סיום'
            />
          ),
        },
      ],
    },
    {
      filterSectionName: 'לפי מקור',
      filterList: [
        {
          filterName: 'platformType',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Component: props => (
            <AutoComplete
              label='פלטפורמה'
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
      ],
    },
    {
      filterSectionName: 'לפי שדה',
      filterList: [
        {
          filterName: 'arena',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Component: props => (
            <AutoComplete
              label='זירה'
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
        {
          filterName: 'research',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          Component: props => (
            <AutoComplete
              label='נושאי מחקר'
              values={props.value ?? []}
              onChange={props.onChange}
            />
          ),
        },
      ],
    },
  ];

  return <FiltersMenu filters={filters} onSave={console.log} />;
}
