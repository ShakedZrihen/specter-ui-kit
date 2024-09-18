import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function DocumetsIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-documets-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M27.075 13.0501L25.85 18.2751C24.8 22.7876 22.725 24.6126 18.825 24.2376C18.2 24.1876 17.525 24.0751 16.8 23.9001L14.7 23.4001C9.48748 22.1626 7.87498 19.5876 9.09998 14.3626L10.325 9.12513C10.575 8.06263 10.875 7.13763 11.25 6.37513C12.7125 3.35013 15.2 2.53763 19.375 3.52513L21.4625 4.01263C26.7 5.23763 28.3 7.82513 27.075 13.0501Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M18.8251 24.2375C18.0501 24.7625 17.0751 25.2 15.8876 25.5875L13.9126 26.2375C8.95006 27.8375 6.33756 26.5 4.72506 21.5375L3.12506 16.6C1.52506 11.6375 2.85006 9.0125 7.81256 7.4125L9.78756 6.7625C10.3001 6.6 10.7876 6.4625 11.2501 6.375C10.8751 7.1375 10.5751 8.0625 10.3251 9.125L9.10006 14.3625C7.87506 19.5875 9.48756 22.1625 14.7001 23.4L16.8001 23.9C17.5251 24.075 18.2001 24.1875 18.8251 24.2375Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15.8 10.6621L21.8625 12.1996'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M14.575 15.5L18.2 16.425'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
