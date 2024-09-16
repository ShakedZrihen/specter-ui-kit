import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarIcon, TrashIcon } from '../../../icons';
import { colorPalette } from '../../../../context/theme/lightMode';
import dayjs from 'dayjs';
import {
  ActionsContainer,
  StyledDesktopDateTimePicker,
  StyledFilter,
  StyledLabel,
  TrashContainer,
} from './CreationTimeFilter.style';

interface CreationTimeFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (date: any) => void;
}

export const CreationTimeFilter = ({ onChange }: CreationTimeFilterProps) => {
  return (
    <StyledFilter>
      <StyledLabel>זמן יצירה</StyledLabel>{' '}
      <ActionsContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDesktopDateTimePicker
            defaultValue={dayjs('2022-04-17T15:30')}
            onChange={onChange}
            slots={{
              openPickerIcon: () => (
                <CalendarIcon size={20} color={colorPalette.link.color} />
              ),
            }}
          />
        </LocalizationProvider>
        <TrashContainer>
          <TrashIcon size={40} color={colorPalette.link.color} />
        </TrashContainer>
      </ActionsContainer>
    </StyledFilter>
  );
};
