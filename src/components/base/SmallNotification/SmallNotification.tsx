import { useState } from 'react';
import { StyledSmallNotification, StyleSnackbar, StyledTitle, StyledLabel, StyledButtonText } from './SmallNotification.style';
import { CloseIcon } from '../../icons';

export interface SmallNotificationProps {
  amountOfNewPosts: number;
}

export function SmallNotification({ amountOfNewPosts }: SmallNotificationProps) {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
  };

  return <StyledSmallNotification>
     <StyleSnackbar
      open={open}
      onClose={handleClose}
      message={
        <div>
          <StyledTitle>שימו לב</StyledTitle>
          <StyledLabel>{amountOfNewPosts.toLocaleString()} פרטים נוספים נקצרו</StyledLabel>
        </div>
      }
      action={
        <>
        <button className="action-button" onClick={() => alert('Refresh')}>
          <StyledButtonText>
            ריענון
          </StyledButtonText>
        </button>
        <CloseIcon className="close-icon" color='black' onClick={handleClose} />
        </>
      }
    />
  </StyledSmallNotification>;
}
