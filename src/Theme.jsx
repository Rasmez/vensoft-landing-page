import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';

const primaryColor = '#D32F2F';
const secondaryColor = '#EF9A9A';
const errorColor = '#F44336';

const customtheme = createTheme({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Roboto',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
  },
});

function vstheme(top, children, bottom) {
  return (
    <ThemeProvider theme={customtheme}>
      <CssBaseline />
      {top}
      {children}
      {bottom}
    </ThemeProvider>
  );
}

export default vstheme;
