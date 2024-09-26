import { StatusChip, InfoChip } from './SystemChip.style';

export interface SystemChipProps {
    bgColor: "#BFECB0" | "#FFE7C2" | "#FFC2C2";
    icon?: any;
    onClick: () => null;
    label: string;
}


export function SystemChip({ bgColor, label, onClick, icon }: SystemChipProps) {
  if(icon) {
    return <InfoChip onClick={onClick}>
      {icon} {label}
    </InfoChip> 
  }
  return <StatusChip onClick={onClick} style={{ background: bgColor }}>
    {label}
    </StatusChip>;
}
