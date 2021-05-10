import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import HomeLayout from './HomeLayout';
import { makeStyles } from '@material-ui/styles';
import { useCookies } from 'react-cookie';
import { createMuiTheme } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import TranslationView from './components/TranslationView';
import SignUpView from './components/SignUpView';
import SignInView from './components/SignInView';
import DictionaryView from './components/DictionaryView';
import TrainView from './components/TrainView';

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
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const [hasCookie, setHasCookie] = React.useState(false);
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
                            <Route path="/signUp" component={SignUpView} />
                            <Route path="/signIn" component={SignInView} />
                            <Route exact path="/" component={TranslationView} />
                            <Route exact path="/dictionary" component={DictionaryView} />
                            <Route exact path="/train" component={TrainView} />
                        </Switch>
                    </HomeLayout>
                </Router>
            </MuiThemeProvider>
        </div>
    );
});

export default App;
