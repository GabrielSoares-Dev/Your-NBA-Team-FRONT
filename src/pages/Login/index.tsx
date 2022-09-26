import { useAppSelector, useAppDispatch } from '@store/hooks';
import { setSun } from '@store/modules/Auth/index.store';
import Layout from '@components/Layouts/Layout';
import { TextField, Box, InputAdornment, IconButton } from '@mui/material';
import type { NextPage } from 'next';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Styled from '@styles/pages/Login/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { payload } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  return (
    <>
      <Box justifyContent="center" display="flex" marginTop={20}>
        <Styled.PaperCustom elevation={2}>
          <Styled.ContentPaper
            container
            flexDirection="column"
            alignItems="center">
            <Styled.ContainerTitlePaper item>
              <Styled.Title>Entre na sua Conta</Styled.Title>
            </Styled.ContainerTitlePaper>
            <Styled.ContainerInput item>
              <TextField
                color="secondary"
                placeholder="email@outlook.com.br"
                variant="outlined"
                label="Email"
                fullWidth
              />
            </Styled.ContainerInput>
            <Styled.ContainerInput item marginTop={2}>
              <TextField
                color="secondary"
                placeholder="senha"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                label="Senha"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end">
                        {showPassword ? (
                          <VisibilityOff fontSize="large" />
                        ) : (
                          <Visibility fontSize="large" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Styled.ContainerInput>
            <Styled.ContainerButton item>
              <LoadingButton
                style={{
                  textTransform: 'none',
                  height: '60px',
                  fontSize: '20px',
                }}
                variant="contained"
                color="secondary"
                type="button"
                fullWidth>
                Entrar
              </LoadingButton>
            </Styled.ContainerButton>
          </Styled.ContentPaper>
        </Styled.PaperCustom>
      </Box>
    </>
  );
};

export default Login;
