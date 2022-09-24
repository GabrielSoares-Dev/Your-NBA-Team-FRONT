import React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import * as Styled from './styles';

const NavWeb: React.FC = () => {
  const { push } = useRouter();
  const handleNavigate = (url: string) => push(url);
  return (
    <Styled.ContainerNavBarWeb>
      <Styled.ContainerLogo>
        <Styled.Logo onClick={() => handleNavigate('/')}>
          YOUR NBA TEAM
        </Styled.Logo>
      </Styled.ContainerLogo>
      <Styled.ContainerLinks>
        <Button
          style={{
            textTransform: 'none',
            fontSize: '80x',
            marginRight: '20px',
            fontWeight: '600',
          }}
          variant="text"
          color="primary"
          onClick={() => handleNavigate('/Login')}>
          Entrar
        </Button>
        <Button
          style={{ textTransform: 'none', fontSize: '18x' }}
          variant="contained"
          color="secondary"
          onClick={() => handleNavigate('/Login')}>
          Cadastrar-se
        </Button>
      </Styled.ContainerLinks>
    </Styled.ContainerNavBarWeb>
  );
};

export default NavWeb;
