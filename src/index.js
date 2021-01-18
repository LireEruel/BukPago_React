import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const theme = createMuiTheme({
   palette: {
      primary: {
         main: "#58a0d1" 
                },
      secondary: {
         main: "#ffcc80" 
                 }
            },
});

reportWebVitals();
