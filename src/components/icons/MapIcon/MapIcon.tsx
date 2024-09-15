import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function MapIcon(props: IconProps) {
  const { size = 30, color = 'white', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-map-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M2.86255 9.72448V21.887C2.86255 24.262 4.55005 25.237 6.60005 24.062L9.53755 22.387C10.175 22.0245 11.2375 21.987 11.9 22.3245L18.4625 25.612C19.125 25.937 20.1875 25.912 20.825 25.5495L26.2375 22.4495C26.925 22.0495 27.5 21.0745 27.5 20.2745V8.11198C27.5 5.73698 25.8126 4.76198 23.7626 5.93698L20.825 7.61198C20.1875 7.97448 19.125 8.01198 18.4625 7.67448L11.9 4.39948C11.2375 4.07448 10.175 4.09948 9.53755 4.46198L4.12505 7.56198C3.42505 7.96198 2.86255 8.93698 2.86255 9.72448Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M10.7 5V21.25'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M19.6625 8.27539V25.0004'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
