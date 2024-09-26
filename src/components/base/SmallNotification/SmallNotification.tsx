import { useState } from 'react';
import {
  StyledSmallNotification,
  StyleSnackbar,
  StyledTitle,
  StyledLabel,
  StyledButtonText,
  StyledButtonClose,
  CloseButton
} from './SmallNotification.style';
import { CloseIcon } from '../../icons';
import { colorPalette } from '../../../context/theme/lightMode';

export interface SmallNotificationProps {
  title: string;
  label: string;
  className?: string;
  onChange?: () => void;
  buttonLabel: string;
  onClose?: () => void;
}

export function SmallNotification({
  label,
  title,
  className,
  onChange = () => {},
  buttonLabel,
  onClose = () => {},
}: SmallNotificationProps) {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    onClose();
  };

  const onRefresh = () => {
    onChange();
  }

  return (
    <StyledSmallNotification className={className}>
      <StyleSnackbar
        disableWindowBlurListener
        autoHideDuration={null}
        open={open}
        onClose={handleClose}
        message={
          <div>
            <StyledTitle>{title}</StyledTitle>
            <StyledLabel>{label}</StyledLabel>
          </div>
        }
        action={
          <>
            <button className='action-button' onClick={onRefresh}>
              <StyledButtonText>{buttonLabel}</StyledButtonText>
            </button>
            <div onClick={() => alert("here")} >
              <StyledButtonClose color={colorPalette.colors.primary} />
            </div>
              {/* <CloseIcon color='black' /> */}
          </>
        }
      />
    </StyledSmallNotification>
  );
}
