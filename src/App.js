import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import HomeLayout from './HomeLayout';
import { makeStyles } from '@material-ui/styles';
import Freeboard from './components/Freeboard';
import TranslationView from './components/TranslationView';
import { createMuiTheme } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
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

    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <Router>
                    <HomeLayout>
                        <Switch>
                            <Route exact path="/buk-pago" component={TranslationView} />
                            <Route exact path="/Free-board" component={Freeboard} />
                        </Switch>
                    </HomeLayout>
                </Router>
            </MuiThemeProvider>
        </div>
    );
});

export default App;
