import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import ErrorSpecter from '../errorSpecter.svg?react';

export interface IllustrationPageProps {
  message: string; 
  is404?: boolean; 
}

const IllustrationPage: React.FC<IllustrationPageProps> = ({ is404 }) => {
  if (!is404) {
    return null; 
  }

  return (
    <Grid item xs={12}>
      <Card
        sx={{
          padding: 4,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
        }}
        elevation={2}
      >
        <ErrorSpecter />
        <Typography variant="body2" color="text.primary" sx={{ marginTop: 2, fontFamily: 'Roboto, sans-serif' }}>
            אופס.. יש לנו בעיה במערכת <br />
            נסו לרפרש או לחזור בעוד מספר דקות
        </Typography>
      </Card>
    </Grid>
  );
};

export default IllustrationPage;
