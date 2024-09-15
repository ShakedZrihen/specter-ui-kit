import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function FavoriteIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-favorite-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M10.7974 2.63297L12.1174 5.27297C12.2974 5.64047 12.7774 5.99297 13.1824 6.06047L15.5749 6.45797C17.1049 6.71297 17.4649 7.82297 16.3624 8.91797L14.5024 10.778C14.1874 11.093 14.0149 11.7005 14.1124 12.1355L14.6449 14.438C15.0649 16.2605 14.0974 16.9655 12.4849 16.013L10.2424 14.6855C9.83743 14.4455 9.16993 14.4455 8.75743 14.6855L6.51493 16.013C4.90993 16.9655 3.93493 16.253 4.35493 14.438L4.88743 12.1355C4.98493 11.7005 4.81243 11.093 4.49743 10.778L2.63743 8.91797C1.54243 7.82297 1.89493 6.71297 3.42493 6.45797L5.81743 6.06047C6.21493 5.99297 6.69493 5.64047 6.87493 5.27297L8.19493 2.63297C8.91493 1.20047 10.0849 1.20047 10.7974 2.63297Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
