import React from 'react';
import { useRouter } from 'next/router';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setDrawer } from '@store/modules/Configurations/index.store';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import * as Styled from './styles';

const NavMobile: React.FC = () => {
  const { payload } = useAppSelector(state => state.configurations);
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const handleDrawer = () =>
    dispatch(setDrawer(!payload.isOpenDrawerMobileNavBar));
  const handleNavigate = (url: string) => {
    dispatch(setDrawer(false));
    push(url);
  };
  const handleCloseDrawer = () => dispatch(setDrawer(false));
  return (
    <>
      <Styled.ContainerMenuLogo>
        <IconButton
          type="button"
          aria-label="menu"
          size="medium"
          onClick={handleDrawer}>
          <MenuIcon color="primary" fontSize="medium" />
        </IconButton>

        <Styled.Logo onClick={() => handleNavigate('/')}>
          YOUR NBA TEAM
        </Styled.Logo>
      </Styled.ContainerMenuLogo>

      <Drawer
        onClose={handleCloseDrawer}
        open={payload.isOpenDrawerMobileNavBar}>
        <Styled.ContainerInsideDrawer>
          <Styled.ContainerBannerClose>
            <IconButton
              type="button"
              aria-label="menu"
              size="medium"
              onClick={handleDrawer}>
              <CloseIcon color="primary" fontSize="medium" />
            </IconButton>
            <Styled.ContainerLogo>
              <Styled.Logo onClick={() => handleNavigate('/')}>
                YOUR NBA TEAM
              </Styled.Logo>
            </Styled.ContainerLogo>
          </Styled.ContainerBannerClose>

          <List>
            <ListItemButton
              divider
              style={{ fontWeight: 'bold', fontSize: '300px' }}
              onClick={() => handleNavigate('/Login')}>
              <ListItemText
                primary={<Styled.Itemlist>Entrar</Styled.Itemlist>}
              />
            </ListItemButton>
            <ListItemButton divider onClick={() => handleNavigate('/Login')}>
              <ListItemText
                primary={<Styled.Itemlist>Cadastra-se</Styled.Itemlist>}
              />
            </ListItemButton>
          </List>
        </Styled.ContainerInsideDrawer>
      </Drawer>
    </>
  );
};

export default NavMobile;
