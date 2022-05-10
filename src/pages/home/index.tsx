import { Grid } from '@mui/material';

import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { Card } from '../../components/card';
import { Page } from '../../components/page';

import defaultStore from '../../stores/defaultStore';

const HomePage: React.FC = observer(() => {
  const { houses, error, getHouses } = defaultStore;

  useEffect(() => {
    getHouses({ page: 1 });
  }, []);

  const isLoading = !houses && !error;

  return (
    <Page isLoading={isLoading}>
      <Grid container spacing={2}>
        {houses?.map(item => (
          <Grid item key={item.url} xs={12} md={4}>
            <Card>{item.name}</Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
});

export { HomePage };
