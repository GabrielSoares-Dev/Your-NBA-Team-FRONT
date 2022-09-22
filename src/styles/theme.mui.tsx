import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
      light: '#FFF',
    },
    secondary: {
      main: '#000',
      light: '#000',
    },
  },
});
const ThemeMuiProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ThemeMuiProvider;
