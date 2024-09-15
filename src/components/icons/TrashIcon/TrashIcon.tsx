import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function TrashIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-trash-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M21.75 10.4844C19.2525 10.2369 16.74 10.1094 14.235 10.1094C12.75 10.1094 11.265 10.1844 9.78 10.3344L8.25 10.4844'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M12.375 9.7275L12.54 8.745C12.66 8.0325 12.75 7.5 14.0175 7.5H15.9825C17.25 7.5 17.3475 8.0625 17.46 8.7525L17.625 9.7275'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M20.1376 12.8555L19.6501 20.408C19.5676 21.5855 19.5 22.5005 17.4075 22.5005H12.5925C10.5 22.5005 10.4325 21.5855 10.35 20.408L9.86255 12.8555'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M13.7476 18.375H16.2451'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M13.125 15.375H16.875'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
