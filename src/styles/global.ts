import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
  background-color:${({ theme }) => theme.colors.background};
  font-family: Roboto, sans-serif;
  width:100%;
  height:100%;
}

`;
