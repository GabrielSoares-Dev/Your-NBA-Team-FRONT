type THEME = 'DARK' | 'LIGHT';

const useTheme = (isTheme?: THEME) => {
  const theme = {
    colors: {
      background: isTheme === 'DARK' ? '#000' : '#fff',
      primary: isTheme === 'DARK' ? '#FFFF' : '#000',
    },
  };
  return { theme };
};

export default useTheme;
