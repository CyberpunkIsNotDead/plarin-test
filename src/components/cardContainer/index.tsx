import { Grid } from '@mui/material';
import React from 'react';
import { Card } from '../card';

const CardContainer: React.FC = ({ children }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card>{children}</Card>
    </Grid>
  );
};

export { CardContainer };
