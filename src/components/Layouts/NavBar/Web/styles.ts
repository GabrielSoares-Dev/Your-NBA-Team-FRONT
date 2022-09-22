import styled from 'styled-components';

export const ContainerNavBarWeb = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
  width: 100%;
`;
export const Logo = styled.p`
  color: #d31027;
  font-size: 18px;
  cursor: pointer;
`;

export const ContainerLogo = styled.div``;
export const ContainerLinks = styled.div``;
export const Links = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    font-weight: bold;
  }
`;
