import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { StyledDesktopDateTimePicker } from './StyledDesktopDateTimePicker';
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
      <StyledDesktopDateTimePicker
        label={label}
        value={parsedValue}
        onAccept={(date) => {
          onChange(date ? new Date(date.toString()).toISOString() : null);
        }}
        format={printAs}
        defaultValue={parsedDefaultValue}
      />
    </LocalizationProvider>
  );
};

export default TimeFilter;