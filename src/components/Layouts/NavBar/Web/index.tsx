import React from 'react';
import { useRouter } from 'next/router';
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
        <Styled.Links onClick={() => handleNavigate('/Login')}>
          Entrar
        </Styled.Links>
      </Styled.ContainerLinks>
    </Styled.ContainerNavBarWeb>
  );
};

export default NavWeb;
