import { useAppSelector, useAppDispatch } from '@store/hooks';
import { setSun } from '@store/modules/Auth/index.store';
import Layout from '@components/Layouts/Layout';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  const { payload } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  return (
    <Layout>
      <h2>Login</h2>
    </Layout>
  );
};

export default Login;
