import { useAppSelector, useAppDispatch } from '@store/hooks';
import Layout from '@components/Layouts/Layout';
import BasketBallPlayersAnimation from '@components/Lotties/BasketBallPlayers';
import * as Styled from '@styles/pages/Home/styles';
import type { NextPage } from 'next';
import { Grid } from '@mui/material';

const Home: NextPage = () => (
  <Layout>
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center">
      <Grid item sm={8}>
        <Styled.TitleHome>
          Bem-vindos ao <Styled.NameCompany>YOUR NBA TEAM</Styled.NameCompany>{' '}
        </Styled.TitleHome>
      </Grid>
      <Grid item sm={12}>
        <BasketBallPlayersAnimation />
      </Grid>

      <Grid item sm={12}>
        <Styled.SubTitle>
          Monte seu time com os melhores jogadores da NBA
        </Styled.SubTitle>
      </Grid>
    </Grid>
  </Layout>
);

export default Home;
