import React from 'react';
import { useMediaQuery } from '@mui/material';
import NavMobile from './Mobile';
import NavWeb from './Web';
import * as Styled from './styles';

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:700px)');
  return (
    <header>
      <Styled.ContainerNavBar>
        {isMobile ? <NavMobile /> : <NavWeb />}
      </Styled.ContainerNavBar>
    </header>
  );
};

export default NavBar;
