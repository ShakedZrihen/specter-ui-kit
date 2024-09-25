import { TimeFilter } from '../../TimeFilter';

interface CreationTimeFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (date: any) => void;
  value?: string;
  label?: string;
}

export const CreationTimeFilter = ({
  onChange,
  value,
  label = 'זמן יצירה',
}: CreationTimeFilterProps) => {
  return <TimeFilter onChange={onChange} value={value} label={label} />;
};
