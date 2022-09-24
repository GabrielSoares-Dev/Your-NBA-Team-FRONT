import { useAppSelector, useAppDispatch } from '@store/hooks';
import Layout from '@components/Layouts/Layout';
import BasketBallPlayersAnimation from '@components/Lotties/BasketBallPlayers';
import * as Styled from '@styles/pages/Home/styles';
import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

const Home: NextPage = () => (
  <Layout>
    <Styled.Container container>
      <Styled.ContainerTitle item sm={8}>
        <Styled.TitleHome>
          Bem-vindos ao <Styled.NameCompany>YOUR NBA TEAM</Styled.NameCompany>{' '}
        </Styled.TitleHome>
      </Styled.ContainerTitle>
      <Grid item sm={12}>
        <BasketBallPlayersAnimation />
      </Grid>
      <Grid item sm={12}>
        <Styled.SubTitle>
          Monte seu time com os melhores jogadores da NBA
        </Styled.SubTitle>
      </Grid>
      <Grid item sm={12} width="90vw">
        <Button color="secondary" variant="contained" fullWidth>
          Monte seu time
        </Button>
      </Grid>
    </Styled.Container>
  </Layout>
);

export default Home;
