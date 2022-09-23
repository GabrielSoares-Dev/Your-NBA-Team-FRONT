import styled from 'styled-components';

export const TitleHome = styled.h1`
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }

  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
`;

export const NameCompany = styled.span`
  font-size: 30px;
  color: #d31027;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;
