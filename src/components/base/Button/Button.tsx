import { StyledButton } from './Button.style';

export interface ButtonProps {
  children: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
  className?: string;
}

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <Button />
 * ```
 */
export function Button({ children, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
