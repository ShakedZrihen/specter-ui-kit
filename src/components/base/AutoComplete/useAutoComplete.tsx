import { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface UseAutocompleteProps {
  onChange?: (value: string[]) => void;
  value: string[];
}

export const useAutocomplete = ({
  onChange,
  value = [],
}: UseAutocompleteProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleDelete = (optionToDelete: string) => {
    onChange?.(value.filter(option => option !== optionToDelete));
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
    onChange?.(newValues);

    if (inputValue !== '') {
      setInputValue(inputValue);
    }
  };

  return {
    inputValue,
    icon,
    checkedIcon,
    handleDelete,
    handleInputChange,
    handleChange,
  };
};
