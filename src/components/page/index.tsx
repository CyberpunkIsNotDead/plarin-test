import { Box, CircularProgress, Grid, Tab, Tabs } from '@mui/material';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type PageProps = {
  isLoading?: boolean;
};

const Page: React.FC<PageProps> = ({ children, isLoading }) => {
  const { pathname } = useLocation();

  return (
    <Box width="100%">
      <Tabs centered value={pathname}>
        <Tab label="Home" value="/" component={Link} to="/" />
        <Tab label="Favorites" value="/favorites" component={Link} to="/favorites" />
      </Tabs>
      {isLoading ? (
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
      )}
    </Box>
  );
};

export { Page };
