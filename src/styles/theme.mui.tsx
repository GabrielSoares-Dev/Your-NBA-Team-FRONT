import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#000',
    },
    secondary: {
      main: '#d31027',
      light: '#d31027',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    button: {
      fontSize: '15px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 790,
      md: 940,
      lg: 1200,
      xl: 1536,
    },
  },
});
const ThemeMuiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ThemeMuiProvider;
