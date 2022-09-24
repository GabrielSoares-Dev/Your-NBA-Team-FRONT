import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
  p{
    font-family: 'Montserrat', sans-serif;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto', sans-serif;
  }
  background-color:${({ theme }) => theme.colors.background};

  width:100%;
  height:100%;
}

`;
