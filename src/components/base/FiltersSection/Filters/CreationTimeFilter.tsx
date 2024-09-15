import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarIcon, TrashIcon } from '../../../icons';
import { colorPalette } from '../../../../context/theme/lightMode';
import {
  ActionsContainer,
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
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label='בחר תאריך'
              sx={{
                backgroundColor: colorPalette.common.white,
              }}
              onChange={onChange}
              slots={{
                openPickerIcon: () => (
                  <CalendarIcon size={25} color={colorPalette.link.color} />
                ),
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <TrashContainer>
          <TrashIcon size={40} color={colorPalette.link.color} />
        </TrashContainer>
      </ActionsContainer>
    </StyledFilter>
  );
};
