import React from 'react';
import { DesktopDateTimePicker } from '@mui/x-date-pickers';

interface StyledDesktopDateTimePickerProps {
  label?: string;
  value: any;
  onAccept: (date: any) => void;
  format: string;
  defaultValue: any;
}

export const StyledDesktopDateTimePicker: React.FC<StyledDesktopDateTimePickerProps> = ({
  label,
  value,
  onAccept,
  format,
  defaultValue,
}) => {
  return (
    <DesktopDateTimePicker
      label={label}
      value={value}
      onChange={onAccept}
      inputFormat={format}
      defaultValue={defaultValue}
      renderInput={(params) => <input {...params} />}
    />
  );
};