import { useAppSelector, useAppDispatch } from '@store/hooks';
import { setSun } from '@store/modules/Auth/index.store';
import Layout from '@components/Layouts/Layout';
import BasketBallPlayersAnimation from '@components/Lotties/BasketBallPlayers';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { payload } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  return (
    <Layout>
      <BasketBallPlayersAnimation />
      <h2>test</h2>
    </Layout>
  );
};

export default Home;
