import { StatusChip, InfoChip } from './SystemChip.style';

export interface SystemChipProps {
    bgColor: "#BFECB0" | "#FFE7C2" | "#FFC2C2" | "#F2F3F6";
    icon?: any;
    onClick: () => null;
    label: string;
}


export function SystemChip({ bgColor, label, onClick, icon }: SystemChipProps) {
  // return <StatusChip onClick={onClick} style={{ background: bgColor }}>
  //   {label}
  //   </StatusChip>;
  return <InfoChip style={{
    display: "flex",
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
  }} onClick={onClick}>
    {icon} {label}
  </InfoChip>
}
