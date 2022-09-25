import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Container = styled(Grid)`
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled(Grid)`
  justify-content: center;
  align-items: center;
`;
export const TitleHome = styled.h1`
  font-size: 50px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Slogan = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.8;
  text-align: center;
`;
export const ContainerButton = styled(Grid)`
  @media (max-width: 700px) {
    width: 90%;
  }
`;
export const ContainerDescription = styled(Grid)``;
export const ContainerTitle = styled(Grid)``;
