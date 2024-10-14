import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import ErrorSpecter from '../error-search.svg?react';

interface IllustrationSearchProps {
  message: string;
  searchTerm?: string;
}

const IllustrationSearch: React.FC<IllustrationSearchProps> = () => {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          padding: 2,
          textAlign: 'center',
        }}
        elevation={2}
      >
        <ErrorSpecter />
        <Typography variant="body2" color="text.primary" sx={{ marginTop: 2 }}>
          לא נמצאו פריטים התואמים לחיפוש ״מצב הרעב בעזה״. <br /> 
          נסו לחפש ערכים דומים על מנת למצוא תוצאות במערכת.
        </Typography>
      </Card>
    </Grid>
  );
};

export default IllustrationSearch;
