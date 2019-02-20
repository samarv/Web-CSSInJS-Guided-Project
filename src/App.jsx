import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Container from './components/Container';

const theme = {
  primary: 'red',
  secondary: 'orange',
};

ReactDOM.render(
  <ThemeProvider theme={theme}><Container /></ThemeProvider>, document.querySelector('#target'),
);
