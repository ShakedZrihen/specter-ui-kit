import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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
import { useEffect } from 'react';

interface TimeFilterProps {
  onChange: (date: string | null | undefined) => void;
  value?: string;
  defaultValue?: string;
  label: string;
}

export const TimeFilter = ({ label, onChange, value, defaultValue }: TimeFilterProps) => {
  useEffect(() => {
    if (defaultValue) {
      onChange?.(new Date(defaultValue.toString()).toISOString());
    }
  }, []);

  return (
    <StyledFilter>
      <StyledLabel>{label}</StyledLabel>{' '}
      <ActionsContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDesktopDateTimePicker
            value={value ? dayjs(value) : null}
            onChange={date => {
              onChange(date ? new Date(date.toString()).toISOString() : null);
            }}
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
