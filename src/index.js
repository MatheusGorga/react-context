import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Routes from './router';
import './index.css';
=======
import './index.css';
import Router from 'routes';
>>>>>>> teste11

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
<<<<<<< HEAD
        <Routes />
=======
        <Router/>
>>>>>>> teste11
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
<<<<<<< HEAD
);
=======
);
>>>>>>> teste11
