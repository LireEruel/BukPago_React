import './App.css';
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import HomeLayout from './HomeLayout';
import { makeStyles } from '@material-ui/styles';
import { useCookies } from 'react-cookie';
import { createMuiTheme } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { SnackbarProvider } from 'material-ui-snackbar-provider'

import TranslationView from './components/TranslationView';
import SignUpView from './components/SignUpView';
import SignInView from './components/SignInView';
import DictionaryView from './components/DictionaryView';
import TrainView from './components/TrainView';
import FileTranslationView from './components/FileTranslationView.js';
import MyPageView from './components/MyPageView';




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
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
            },
        },
    },
});

const App = observer((props) => {
    const classes = useStyle();
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const [hasCookie, setHasCookie] = useState(false);
    console.log(hasCookie);
    React.useEffect(() => {
        if (cookies['jwt'] != undefined) setHasCookie(true);
    });
    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <Router>
                    <HomeLayout
                        cookies={cookies}
                        hasCookie={hasCookie}
                        setHasCookie={setHasCookie}
                        removeCookie={removeCookie}
                        hasCookie={hasCookie}
                    >
                        <Switch>
                            <Route path="/buk-pago/signUp" component={SignUpView} />
                            <Route path="/buk-pago/signIn">
                                <SignInView setHasCookie={setHasCookie}> </SignInView>
                            </Route>
                            <Route exact path="/buk-pago" component={TranslationView} />
                            <Route exact path="/buk-pago/dictionary" component={DictionaryView} />
                            <Route exact path="/buk-pago/train" component={TrainView} />
                            <Route
                                exact
                                path="/buk-pago/file-translate"
                                component={FileTranslationView}
                            />
                            <Route exact path= "/buk-pago/myPage" component={MyPageView}/>
                        </Switch>
                    </HomeLayout>
                </Router>
            </MuiThemeProvider>
        </div>
    );
});

export default App;
