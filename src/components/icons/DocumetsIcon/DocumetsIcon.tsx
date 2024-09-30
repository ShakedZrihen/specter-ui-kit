import { IconProps } from '../IconProps';
import { StyledIcon } from '../StyledIcon';

export function DocumetsIcon(props: IconProps) {
  const { size = 30,color='darkblue', className } = props;

  return (
    <StyledIcon color={color} data-testid='specter-documets-icon'>
      <svg
        width={size}
        height={size}
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M16.2451 7.82988L15.5101 10.9649C14.8801 13.6724 13.6351 14.7674 11.2951 14.5424C10.9201 14.5124 10.5151 14.4449 10.0801 14.3399L8.82013 14.0399C5.69263 13.2974 4.72513 11.7524 5.46013 8.61738L6.19513 5.47488C6.34513 4.83738 6.52513 4.28238 6.75013 3.82488C7.62763 2.00988 9.12013 1.52238 11.6251 2.11488L12.8776 2.40738C16.0201 3.14238 16.9801 4.69488 16.2451 7.82988Z'
          stroke={color}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M11.2957 14.5427C10.8307 14.8577 10.2457 15.1202 9.53324 15.3527L8.34824 15.7427C5.37074 16.7027 3.80324 15.9002 2.83574 12.9227L1.87574 9.9602C0.915744 6.9827 1.71074 5.4077 4.68824 4.4477L5.87324 4.0577C6.18074 3.9602 6.47324 3.8777 6.75074 3.8252C6.52574 4.2827 6.34574 4.8377 6.19574 5.4752L5.46074 8.6177C4.72574 11.7527 5.69324 13.2977 8.82074 14.0402L10.0807 14.3402C10.5157 14.4452 10.9207 14.5127 11.2957 14.5427Z'
          stroke={color}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M9.48047 6.39746L13.118 7.31996'
          stroke={color}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M8.74414 9.2998L10.9191 9.85481'
          stroke={color}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </StyledIcon>
  );
}
