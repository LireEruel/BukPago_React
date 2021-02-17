import './App.css';
import React from 'react';
<<<<<<< Updated upstream
import {
  BrowserRouter as Router, Switch,Route,
} from "react-router-dom";
import {observer} from "mobx-react"
import HomeLayout from "./HomeLayout"
import { makeStyles } from "@material-ui/styles"
import TranslationView from "./components/TranslationView"
import FreeBoard from "./components/FreeBoard.js"
import {  createMuiTheme,} from '@material-ui/core';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
const useStyle = makeStyles(theme=> ({
  '@global': {
        'body, html' : {
          padding : 0,
          margin : 0,
          minHeight: '100%',
          backgroundColor : '#f7fafa'
        },    
      },    
}))
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import HomeLayout from './HomeLayout';
import { makeStyles } from '@material-ui/styles';
import FreeboardView from './components/FreeboardView';
import TranslationView from './components/TranslationView';
import WriteView from './components/WriteView';
import { createMuiTheme } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import SignInView from './components/SignInView';
const useStyle = makeStyles((theme) => ({
    '@global': {
        'body, html': {
            padding: 0,
            margin: 0,
            minHeight: '100%',
            backgroundColor: '#f7fafa',
        },
    },
}));
>>>>>>> Stashed changes

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#58a0d1',
            dark: '#3d7092',
            light: '#79b3da',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ffffff',
            contrastText: '#fff',
        },
    },
});

const App = observer((props) => {
    const classes = useStyle();

<<<<<<< Updated upstream
const App= observer( (props) => {  
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <HomeLayout>
            <Switch>
              <Route exact path="/buk-pago" component={TranslationView}/>
              <Route exact path="/Free-board" component={FreeBoard} />
            </Switch>
          </HomeLayout>
        </Router>
      </MuiThemeProvider>
      
    </div>
  );
}) 
=======
    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <Router>
                    <HomeLayout>
                        <Switch>
                            <Route exact path="/buk-pago" component={TranslationView} />
                            <Route exact path="/Free-board" component={FreeboardView} />
                        </Switch>
                    </HomeLayout>
                    <Switch>
                        <Route path="/write" component={WriteView} />
                        <Route path="/sign-in" component={SignInView} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </div>
    );
});
>>>>>>> Stashed changes

export default App;
