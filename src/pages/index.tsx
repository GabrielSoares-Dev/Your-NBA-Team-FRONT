import { useAppSelector, useAppDispatch } from '@store/hooks';
import { setSun } from '@store/modules/Auth/index.store';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { payload } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(setSun('boi'))}>
        Virar
      </button>
      <button type="button" onClick={() => dispatch(setSun('boi2'))}>
        test
      </button>
      <h1 style={{ color: 'black' }}>test</h1>
      <h1 style={{ color: 'black' }}>{payload.token}</h1>
    </div>
  );
};

export default Home;
