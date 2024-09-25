import { useState } from 'react';
import { StyledSmallNotification, StyleSnackbar, StyledTitle, StyledLabel, StyledButtonText } from './SmallNotification.style';
import { CloseIcon } from '../../icons';

export interface SmallNotificationProps {
  title: string;
  label: string;
  className?: string;
  onChange?: () => void;
  buttonLabel: string;
}

export function SmallNotification({ label, title, className, onChange = () => { }, buttonLabel }: SmallNotificationProps) {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
    onChange();
  };

  return <StyledSmallNotification className={className}>
     <StyleSnackbar
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
        <button className="action-button" onClick={() => alert('Refresh')}>
          <StyledButtonText>
            {buttonLabel}
          </StyledButtonText>
        </button>
        <CloseIcon className="close-icon" color='black' onClick={handleClose} />
        </>
      }
    />
  </StyledSmallNotification>;
}
