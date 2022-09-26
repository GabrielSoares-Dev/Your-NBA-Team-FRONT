import styled from 'styled-components';
import { Grid, Paper } from '@mui/material';

export const PaperCustom = styled(Paper)`
  height: 380px;
  width: 300px;

  @media (max-width: 700px) {
    width: 90%;
  }
`;
export const ContentPaper = styled(Grid)`
  padding: 50px 0;
`;
export const ContainerButton = styled(Grid)`
  width: 85%;
  margin-top: 30px !important;
`;

export const ContainerInput = styled(Grid)`
  width: 85%;
`;
export const ContainerTitlePaper = styled(Grid)``;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px !important;
`;
