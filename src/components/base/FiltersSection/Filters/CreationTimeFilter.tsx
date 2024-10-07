import { TimeFilter } from '../../TimeFilter';
import { useTranslation } from 'react-i18next'; // Импортируйте useTranslation

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
  const { t } = useTranslation(); 

  return (
    <TimeFilter
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      label={t(label)}
    />
  );
};
