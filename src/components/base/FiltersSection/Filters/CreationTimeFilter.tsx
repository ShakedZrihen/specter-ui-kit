import { TimeFilter } from '../../TimeFilter';

interface CreationTimeFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (date: any) => void;
  value?: string;
  label?: string;
  defaultValue?: string;
}

export const CreationTimeFilter = ({
  onChange,
  value,
  label = 'זמן יצירה',
  defaultValue
}: CreationTimeFilterProps) => {
  return <TimeFilter onChange={onChange} defaultValue={defaultValue} value={value} label={label} />;
};
