import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  ActionsContainer,
  StyledDesktopDateTimePicker,
  StyledFilter,
  StyledLabel,
  Trash,
} from './TimeFilter.style';
import { CalendarIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';

interface TimeFilterProps {
  onChange: (date: string | null | undefined) => void;
  value?: string | Date;
  defaultValue?: string | Date;
  label: string;
  dateAdapter?: any;
  dateParser?: (date: string | Date) => Date | null;
  printAs?: string;
}

export const TimeFilter = ({
  label,
  onChange,
  value,
  defaultValue,
  dateAdapter,
  dateParser = (date) => (typeof date === 'string' ? new Date(date) : date),
  printAs = 'DD/MM/YYYY hh:mm A',
}: TimeFilterProps) => {
  const parsedValue = value ? dateParser(value) : null;
  const parsedDefaultValue = defaultValue ? dateParser(defaultValue) : null;

  return (
    <StyledFilter>
      <StyledLabel>{label}</StyledLabel>
      <ActionsContainer>
        <LocalizationProvider dateAdapter={dateAdapter}>
          <StyledDesktopDateTimePicker
            value={parsedValue}
            onAccept={(date) => {
              onChange(date ? new Date(date.toString()).toISOString() : null);
            }}
            format={printAs}
            defaultValue={parsedDefaultValue}
            slots={{
              openPickerIcon: () => (
                <CalendarIcon size={20} color={colorPalette.link.color} />
              ),
            }}
          />
        </LocalizationProvider>
        <Trash
          onClick={() => {
            onChange(null);
          }}
          size={35}
          color={colorPalette.link.color}
        />
      </ActionsContainer>
    </StyledFilter>
  );
};