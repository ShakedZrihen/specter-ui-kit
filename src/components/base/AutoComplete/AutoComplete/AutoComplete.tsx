import { StyledAutoComplete, CustomTextField } from './AutoComplete.style';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Chip, Tooltip } from '@mui/material';
import { ChevronDownIcon, CloseIcon } from '../../../icons';
import { colorPalette } from '../../../../context/theme/lightMode';
import { useState } from 'react';

export interface AutoCompleteProps {
  values: string[];
  className?: string;
  onChange?: (value: string[]) => void;
}

export function AutoComplete({
  values,
  className,
  onChange,
}: AutoCompleteProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleDelete = (optionToDelete: string) => {
    setSelectedValues(prev => prev.filter(option => option !== optionToDelete));
  };
  const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
  const checkedIcon = <CheckBoxIcon fontSize='small' />;

  const handleInputChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _event: any,
    newInputValue: string,
  ) => {
    setInputValue(newInputValue);
  };

  const handleChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _event: any,
    newValue: unknown,
  ) => {
    const newValues = newValue as string[];
    setSelectedValues(newValues);
    onChange?.(newValues);

    if (inputValue !== '') {
      setInputValue(inputValue);
    }
  };

  return (
    <StyledAutoComplete
      multiple // Allow multiselect
      freeSolo // Keep text after selection
      disableCloseOnSelect // Keep dropdown open after selection
      className={className}
      options={values}
      inputValue={inputValue}
      value={selectedValues}
      onChange={handleChange}
      onInputChange={handleInputChange}
      forcePopupIcon={true} // Force the popupIcon to always appear
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderOption={(props, option: any, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              checked={selected}
            />
            {option}
          </li>
        );
      }}
      renderTags={(value, getTagProps) => {
        const LIMIT_TAGS = 3;
        const visibleTags = value.slice(0, LIMIT_TAGS); // Limit visible tags
        const hiddenTags = value.slice(LIMIT_TAGS); // Get hidden tags
        const hiddenTagsCount = hiddenTags.length; // Count of hidden tags

        return (
          <>
            {visibleTags.map((option, index) => (
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
                    hiddenTags.forEach(option => {
                      handleDelete(option as string);
                    });
                  }}
                />
              </Tooltip>
            )}
          </>
        );
      }}
      renderInput={params => (
        <CustomTextField {...params} placeholder='בחר פילטר...' />
      )}
      popupIcon={
        <div style={{ marginTop: '0.21rem' }}>
          <ChevronDownIcon size={35} color={colorPalette.link.color} />
        </div>
      }
      clearIcon={null} // We will implement it with the Trash
    />
  );
}
