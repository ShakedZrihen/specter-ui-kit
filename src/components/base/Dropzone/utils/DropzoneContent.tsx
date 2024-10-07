import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const DropzoneContent = () => {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant='h6'>{t('dropzone.dragAndDrop')}</Typography>
      <Typography variant='body2'>{t('dropzone.clickToSelect')}</Typography>
    </div>
  );
};

export default DropzoneContent;
