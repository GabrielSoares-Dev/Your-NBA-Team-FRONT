type THEME = 'DARK' | 'LIGHT';

const useTheme = (isTheme?: THEME) => {
  const theme = {
    colors: {
      background: '#fff',
      primary: isTheme === 'DARK' ? '#FFFF' : '#000',
    },
  };
  return { theme };
};

export default useTheme;
