import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function MapMarkerIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-map-marker-icon'>
      <svg
        width={size}
        height={size}
        viewBox='2.5 4.5 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M5.10369 8.95074C6.01962 5.01339 11.9848 5.01794 12.8961 8.95528C13.4308 11.265 11.7911 12.5179 10.5032 13.7273C10.0361 14.1682 9.60354 15.9999 8.99989 16C8.39586 16.0001 7.96612 14.1684 7.49638 13.7273C6.21314 12.5179 4.56901 11.2604 5.10369 8.95074Z'
          stroke={color}
        />
        <path d='M8 10H10' stroke={color} stroke-linecap='round' />
        <path d='M9 11V9' stroke={color} stroke-linecap='round' />
      </svg>
    </StyledIcon>
  );
}
