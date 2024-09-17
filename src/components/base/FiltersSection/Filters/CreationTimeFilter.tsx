import { TimeFilter } from '../../TimeFilter';

interface CreationTimeFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (date: any) => void;
  value?: string;
}

export const CreationTimeFilter = ({
  onChange,
  value,
}: CreationTimeFilterProps) => {
  return <TimeFilter onChange={onChange} value={value} label='זמן יצירה' />;
};
