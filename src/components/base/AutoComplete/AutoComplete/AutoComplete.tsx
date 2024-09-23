import { StyledAutoComplete, CustomTextField } from './AutoComplete.style';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export interface AutoCompleteProps {
  values: string[];
}

export function AutoComplete({ values }: AutoCompleteProps) {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  
  const print = (any: any) => {
    console.log(any);
  }

  return (
    <StyledAutoComplete>
     <Autocomplete
      multiple
      color='blue'
      options={values}
      disableCloseOnSelect
      dir='rtl'
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => {
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
      style={{ width: 500 }}
       renderInput={(params) => (
            <CustomTextField {...params} />
        )}
    />
    </StyledAutoComplete>
  );
};

