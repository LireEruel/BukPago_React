import React, { useRef, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { observer } from 'mobx-react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MemberStore from '../stores/MemberStore';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'material-ui-snackbar-provider'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignInView = observer((props) => {
    const classes = useStyles();
    const memberStore = useContext(MemberStore.context);
    const id = useRef('');
    const pw = useRef('');
    const setHasCookie = props.setHasCookie;
    let history = useHistory();
    const snackbar = useSnackbar();

    function login(e) {
        e.preventDefault();
        if (id.current.value === '' || pw.current.value === '') {
            snackbar.showMessage(
                '아이디 또는 비밀 번호를 입력해 주세요.',
                '확인'
            )
        }
        memberStore.login(id.current.value, pw.current.value).then((res) => {
            if (res.status == 200) {
                setHasCookie(true);
                history.push('/buk-pago');
                snackbar.showMessage(
                    res.data.message,
                )
            } else {
                snackbar.showMessage(
                '아이디 또는 비밀 번호를 확인해 주세요.',
                '확인'
            )

            }
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="id"
                        autoComplete="current-id"
                        autoFocus
                        inputRef={id}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        inputRef={pw}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={login}
                    >
                        로그인
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/buk-pago/signUp" variant="body2">
                                {'회원가입 하기'}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
});

export default SignInView;
