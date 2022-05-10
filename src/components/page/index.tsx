import { CircularProgress, Grid } from '@mui/material';

import React from 'react';

type PageProps = {
  isLoading?: boolean;
};

const Page: React.FC<PageProps> = ({ children, isLoading }) => {
  return isLoading ? (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <CircularProgress />
    </Grid>
  ) : (
    <>{children}</>
  );
};

export { Page };
