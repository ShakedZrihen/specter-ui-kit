import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import ErrorSpecter from '../error-filters.svg?react';

const IllustrationFilters: React.FC = () => {
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
          לא נמצאו פריטים התואמים לפילטור הנבחר.
          <br />
          נסו להוריד פילטרים על מנת למצוא פריטים רלוונטים.
        </Typography>
      </Card>
    </Grid>
  );
};

export default IllustrationFilters;
