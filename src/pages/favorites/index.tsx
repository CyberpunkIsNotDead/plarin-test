import { Grid } from '@mui/material';

import { observer } from 'mobx-react-lite';
import React from 'react';

import { CardContainer } from '../../components/cardContainer';
import { Page } from '../../components/page';

import defaultStore from '../../stores/defaultStore';

const FavoritesPage: React.FC = observer(() => {
  const { isHydrated, favorites } = defaultStore;

  const isLoading = !isHydrated;

  return (
    <Page isLoading={isLoading}>
      <Grid container spacing={2}>
        {favorites?.map(item => (
          <CardContainer key={item.url}>{item.name}</CardContainer>
        ))}
      </Grid>
    </Page>
  );
});

export { FavoritesPage };
