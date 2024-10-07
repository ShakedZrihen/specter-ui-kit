import { styled } from '@mui/material';

const StyledDropzone = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px dashed',
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  userSelect: 'none',
  transition: theme.transitions.create(['background-color', 'border-color'], {
    duration: theme.transitions.duration.short,
  }),
  '&[data-accept]': {
    backgroundColor: theme.palette.success.light,
    borderColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  '&[data-reject]': {
    backgroundColor: theme.palette.error.light,
    borderColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  '&[data-loading], &:not([data-activate-on-click])': {
    cursor: 'default',
  },
  '&[data-disabled]': {
    cursor: 'not-allowed',
  },
}));

export default StyledDropzone;
