import { useAppSelector, useAppDispatch } from '@store/hooks';
import Layout from '@components/Layouts/Layout';
import BasketBallPlayersAnimation from '@components/Lotties/BasketBallPlayers';
import * as Styled from '@styles/pages/Home/styles';
import type { NextPage } from 'next';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { push } = useRouter();

  const handleNavigate = () => {
    push('/YourTeam');
  };

  return (
    <Layout>
      <Styled.Container container>
        <Styled.Content container spacing={4}>
          <Styled.ContainerTitle item xs={12}>
            <Styled.TitleHome>
              Monte seu Time e <Styled.Slogan> Torne-se Campeão </Styled.Slogan>
            </Styled.TitleHome>
          </Styled.ContainerTitle>
          <Styled.ContainerDescription item xs={12}>
            <Styled.Description>
              Monte sua formação dos sonhos coms os melhores jogadores da NBA!
            </Styled.Description>
          </Styled.ContainerDescription>
          <Styled.ContainerButton item sm={12} md={2} lg={2}>
            <Button
              onClick={handleNavigate}
              style={{
                textTransform: 'none',
              }}
              color="secondary"
              variant="contained"
              fullWidth>
              Monte seu time
            </Button>
          </Styled.ContainerButton>
        </Styled.Content>
      </Styled.Container>
    </Layout>
  );
};

export default Home;
