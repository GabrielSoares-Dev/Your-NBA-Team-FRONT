import { useAppSelector, useAppDispatch } from '@store/hooks';
import { setSun } from '@store/modules/Auth/index.store';
import Layout from '@components/Layouts/Layout';
import { TextField, Grid, Paper, Box } from '@mui/material';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  const { payload } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  return (
    <Layout>
      <Box justifyContent="center" display="flex" marginTop={20}>
        <Paper style={{ height: 200, width: '300px' }}>
          <Grid container flexDirection="column" alignItems="center">
            <Grid item>
              <TextField
                color="primary"
                placeholder="email@outlook.com.br"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                color="primary"
                placeholder="email@outlook.com.br"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Login;
