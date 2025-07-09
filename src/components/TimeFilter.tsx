import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { StyledDesktopDateTimePicker } from './StyledDesktopDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

interface TimeFilterProps {
  value: string | Date | Dayjs | null;
  defaultValue?: string | Date | Dayjs | null;
  label?: string;
  onChange: (date: string | null) => void;
  dateParser?: (value: string | Date | Dayjs | null) => Dayjs | null;
  printAs?: string;
  dateAdapter?: any;
}

const defaultDateParser = (value: string | Date | Dayjs | null): Dayjs | null => {
  if (value instanceof Date) {
    return dayjs(value);
  }
  if (typeof value === 'string') {
    return dayjs(value);
  }
  return value;
};

export const TimeFilter: React.FC<TimeFilterProps> = ({
  value,
  defaultValue,
  label,
  onChange,
  dateParser = defaultDateParser,
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