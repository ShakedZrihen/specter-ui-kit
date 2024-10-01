import { useEffect, useMemo, useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface UseAutocompleteProps {
  onChange?: (value: string[]) => void;
  defaultSelectedValues: string[];
}

export const useAutocomplete = ({
  onChange,
  defaultSelectedValues = [],
}: UseAutocompleteProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    defaultSelectedValues,
  );
  const [inputValue, setInputValue] = useState<string>('');

  const handleDelete = (optionToDelete: string) => {
    setSelectedValues(prev => prev.filter(option => option !== optionToDelete));
    onChange?.(selectedValues.filter(option => option !== optionToDelete));
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

  const memoizedDefaultSelectedValues = useMemo(
    () => defaultSelectedValues.join(''),
    [defaultSelectedValues],
  );

  useEffect(() => {
    handleChange(null, defaultSelectedValues);
  }, [memoizedDefaultSelectedValues]);

  return {
    selectedValues,
    inputValue,
    icon,
    checkedIcon,
    handleDelete,
    handleInputChange,
    handleChange,
  };
};
