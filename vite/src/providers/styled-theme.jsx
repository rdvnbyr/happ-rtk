import {ThemeProvider, css} from 'styled-components';
import theme from 'styled-theming';

const colors = {
  primary: '#007bff',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#fff',
  transparent: 'transparent',
};

theme('mode', {
  light: css`
    background-color: ${colors.light};
    color: ${colors.dark};
  `,
  dark: css`
    background-color: ${colors.dark};
    color: ${colors.light};
  `,
});

theme.variants(
  'mode',
  'variant',
  Object.keys(colors).reduce((acc, color) => {
    acc[color] = {light: colors[color], dark: colors[color]};
    return acc;
  }, {}),
);

theme('spacing', {
  small: '8px',
  medium: '16px',
  large: '24px',
});

theme('font', {
  sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, Times, "Times New Roman", serif',
  monoSpaced: 'Consolas, monaco, monospace',
});

export default function StyledTheme({children}) {
  // detect user's system preferences
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const mode = prefersDarkMode ? 'dark' : 'light';

  return <ThemeProvider theme={{mode}}>{children}</ThemeProvider>;
}
