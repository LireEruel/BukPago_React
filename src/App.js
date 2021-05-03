import './App.css';
import React from 'react';
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
import DictionaryView from './components/DictionaryView';
import FileTranslationView from './components/FileTranslationView.js'
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
        }
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
                            <Route exact path="/buk-pago/file-translate" component={FileTranslationView} />
                            <Route exact path="/free-board" component={FreeboardView} />
                            <Route exact path="/buk-pago/dictionary" component={DictionaryView} />
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

export default App;
