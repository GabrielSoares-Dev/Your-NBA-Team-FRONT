type THEME = 'DARK' | 'LIGHT';

const useTheme = (isTheme?: THEME) => {
  const theme = {
    colors: {
      background: '#fff',
      primary: '#000',
      secondary: '#d31027',
    },
  };
  return { theme };
};

export default useTheme;
