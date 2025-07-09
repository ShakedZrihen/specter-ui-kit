import React from 'react';
import { LocalizationProvider, DesktopDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface TimeFilterProps {
  value: string | Date | null;
  defaultValue?: string | Date | null;
  label?: string;
  onChange: (date: string | null) => void;
  dateParser?: (date: string | Date | null) => Dayjs | null;
  printAs?: string;
  dateAdapter?: any;
}

const TimeFilter: React.FC<TimeFilterProps> = ({
  value,
  defaultValue,
  label,
  onChange,
  dateParser = (date) => (date ? dayjs(date) : null),
  printAs = 'DD/MM/YYYY hh:mm A',
  dateAdapter = AdapterDayjs,
}) => {
  const parsedValue = dateParser(value);
  const parsedDefaultValue = dateParser(defaultValue);

  return (
    <LocalizationProvider dateAdapter={dateAdapter}>
      <DesktopDateTimePicker
        label={label}
        value={parsedValue}
        onChange={(date) => {
          onChange(date ? date.format() : null);
        }}
        format={printAs}
        defaultValue={parsedDefaultValue}
      />
    </LocalizationProvider>
  );
};

export default TimeFilter;