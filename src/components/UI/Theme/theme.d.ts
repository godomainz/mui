import { Theme, ThemeOptions } from '@mui/material/styles';
import "@mui/material/styles/createPalette";
declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}