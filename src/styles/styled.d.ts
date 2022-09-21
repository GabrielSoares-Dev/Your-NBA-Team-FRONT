import 'styled-components';

import useTheme from './theme';

const { theme } = useTheme();
export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
