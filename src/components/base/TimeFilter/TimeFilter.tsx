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

interface TimeFilterProps {
  onChange: (date: string | null | undefined) => void;
  value?: string;
  defaultValue?: string;
  label: string;
}

export const TimeFilter = ({
  label,
  onChange,
  value,
  defaultValue,
}: TimeFilterProps) => {
  return (
    <StyledFilter>
      <StyledLabel>{label}</StyledLabel>{' '}
      <ActionsContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDesktopDateTimePicker
            value={value ? dayjs(value) : null}
            onAccept={date => {
              onChange(date ? new Date(date.toString()).toISOString() : null);
            }}
            format='DD/MM/YYYY hh:mm A'
            defaultValue={defaultValue ? dayjs(defaultValue) : null}
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
