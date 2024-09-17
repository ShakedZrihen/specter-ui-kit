import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarIcon } from '../../../icons';
import { colorPalette } from '../../../../context/theme/lightMode';
import dayjs from 'dayjs';
import {
  ActionsContainer,
  StyledDesktopDateTimePicker,
  StyledFilter,
  StyledLabel,
  Trash,
} from './CreationTimeFilter.style';

interface CreationTimeFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (date: any) => void;
  value?: string;
}

export const CreationTimeFilter = ({
  onChange,
  value,
}: CreationTimeFilterProps) => {
  return (
    <StyledFilter>
      <StyledLabel>זמן יצירה</StyledLabel>{' '}
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
