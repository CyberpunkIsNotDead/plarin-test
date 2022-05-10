import { Grid } from '@mui/material';

import { observer } from 'mobx-react-lite';
import React from 'react';

import { Card } from '../../components/card';
import { Page } from '../../components/page';

import defaultStore from '../../stores/defaultStore';

const FavoritesPage: React.FC = observer(() => {
  const { isHydrated, favorites } = defaultStore;

  const isLoading = !isHydrated;

  return (
    <Page isLoading={isLoading}>
      <Grid container spacing={2}>
        {favorites?.map(item => (
          <Grid item key={item.url} xs={12} md={4}>
            <Card>{item.name}</Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
});

export { FavoritesPage };
