import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Grid, Pagination, Typography } from '@mui/material';

import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import { CardContainer } from '../../components/cardContainer';
import { Page } from '../../components/page';

import defaultStore from '../../stores/defaultStore';

const HomePage: React.FC = observer(() => {
  const { houses, error, pagesCount, getHouses, resetHouses, setFavorite } = defaultStore;

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getHouses({ page });

    () => resetHouses();
  }, [page]);

  const isLoading = !houses && !error;

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

  return (
    <Page isLoading={isLoading}>
      <Grid container spacing={2}>
        {houses?.map(({ url, name }) => (
          <CardContainer key={url}>
            <Typography>{name}</Typography> <StarBorderIcon onClick={() => setFavorite({ url, name })} />
          </CardContainer>
        ))}
      </Grid>
      {pagesCount && <Pagination count={pagesCount} page={page} onChange={onPageChange} />}
    </Page>
  );
});

export { HomePage };
