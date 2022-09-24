import React from 'react';
import { useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider/Divider';
import NavMobile from './Mobile';
import NavWeb from './Web';
import * as Styled from './styles';

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <header>
      <Styled.ContainerNavBar>
        {isMobile ? <NavMobile /> : <NavWeb />}
      </Styled.ContainerNavBar>
      <Divider textAlign="center" />
    </header>
  );
};

export default NavBar;
