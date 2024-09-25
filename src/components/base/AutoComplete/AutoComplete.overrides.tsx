import {
  AutocompleteRenderGetTagProps,
  Checkbox,
  Chip,
  Tooltip,
} from '@mui/material';
import { CloseIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';

export const renderTags = (
  value: unknown[],
  getTagProps: AutocompleteRenderGetTagProps,
  handleDelete: (option: string) => void,
) => {
  const LIMIT_TAGS = 3;
  const visibleTags = value.slice(0, LIMIT_TAGS); // Limit visible tags
  const hiddenTags = value.slice(LIMIT_TAGS); // Get hidden tags
  const hiddenTagsCount = hiddenTags.length; // Count of hidden tags

  return (
    <>
      {visibleTags.map((option: unknown, index: number) => (
        <Chip
          {...getTagProps({ index })}
          label={option as string}
          deleteIcon={
            <CloseIcon
              size={20}
              color={colorPalette.colors.primary}
              style={{ pointerEvents: 'auto', zIndex: 1 }}
            />
          }
          onClick={() => handleDelete(option as string)}
        />
      ))}
      {hiddenTagsCount > 0 && (
        <Tooltip title={hiddenTags.join(', ')} arrow>
          <Chip
            {...getTagProps({ index: -1 })}
            label={`+${hiddenTagsCount} more`}
            style={{ zIndex: 1 }}
            deleteIcon={
              <CloseIcon
                size={20}
                color={colorPalette.colors.primary}
                style={{ pointerEvents: 'auto', zIndex: 3 }}
              />
            }
            onClick={() => {
              hiddenTags.forEach((option: unknown) => {
                handleDelete(option as string);
              });
            }}
          />
        </Tooltip>
      )}
    </>
  );
};

export const renderOptions = (
  props: React.HTMLAttributes<HTMLLIElement> & {
    key: any;
  },
  option: any,
  {
    selected,
    icon,
    checkedIcon,
  }: {
    selected: boolean;
    icon: JSX.Element;
    checkedIcon: JSX.Element;
  },
) => {
  const { key, ...optionProps } = props;
  return (
    <>
      <li key={key} {...optionProps}>
        <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
        {option}
      </li>
    </>
  );
};
