import { useState } from 'react';
import { StyledSmallNotification, StyleSnackbar, StyledTitle, StyledLabel, StyledButtonText } from './SmallNotification.style';
import { CloseIcon } from '../../icons';

export interface SmallNotificationProps {
  amountOfNewPosts: number;
  title: string;
  label: string;
  className?: string;
  onChange?: () => void;
  buttonLabel: string;
}

export function SmallNotification({ amountOfNewPosts, label, title, className, onChange = () => { }, buttonLabel }: SmallNotificationProps) {
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
          <StyledLabel>{amountOfNewPosts.toLocaleString()} {label}</StyledLabel>
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
