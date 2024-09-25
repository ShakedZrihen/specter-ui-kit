import { TablePaginationProps } from '@mui/material';
import { StyledBasePagination } from './BasePagination.style';

/**
 * TODO: document component functionality
 *
 * [Figma](https://https://www.figma.com/file/...)
 *
 * ```tsx
 * <BasePagination />
 * ```
 */
export function BasePagination(props: TablePaginationProps) {
  return <StyledBasePagination {...props} labelRowsPerPage='' />;
}
