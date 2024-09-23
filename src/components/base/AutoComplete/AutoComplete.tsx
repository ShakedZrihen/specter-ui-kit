import { StyledAutoComplete, CustomTextField } from './AutoComplete.style';
import { ChevronDownIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';
import { renderOptions, renderTags } from './AutoComplete.overrides';
import { useAutocomplete } from './useAutoComplete';

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
  const {
    selectedValues,
    inputValue,
    icon,
    checkedIcon,
    handleDelete,
    handleInputChange,
    handleChange,
  } = useAutocomplete({ onChange });

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
      renderOption={(props, option: any, { selected }) =>
        renderOptions(props, option, { selected, icon, checkedIcon })
      }
      renderTags={(value, getTagProps) =>
        renderTags(value, getTagProps, handleDelete)
      }
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
