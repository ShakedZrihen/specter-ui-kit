import React from 'react';
import { LocalizationProvider, DesktopDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateAdapter } from '@mui/x-date-pickers/models';
import dayjs from 'dayjs';

interface TimeFilterProps {
  value: string | Date | null;
  defaultValue?: string | Date | null;
  label?: string;
  onChange: (date: string | null) => void;
  dateParser?: (date: string | Date | null) => dayjs.Dayjs | null;
  printAs?: string;
  dateAdapter?: DateAdapter;
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