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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MemberStore from '../stores/MemberStore';
import Member from '../models/Member';
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUpView(props) {
    const classes = useStyles();
    const setHasCookie = props.setHasCookie;
    const memberStore = useContext(MemberStore.context);
    const id = useRef('');
    const pw = useRef('');
    const name = useRef('');
    const email = useRef('');

    function register(e) {
        e.preventDefault();
        if (id.current.value == '') {
            return;
        }
        if (pw.current.value == '') {
            return;
        }
        if (name.current.value == '') {
            return;
        }
        if (email.current.value == '') {
            return;
        }

        var member = new Member(
            id.current.value,
            pw.current.value,
            name.current.value,
            email.current.value,
        );

        console.log(member);
        memberStore.register(member).then((res) => {
            if (res.status == 200) {
                //SnackbarStore.pushMessage(res.data['message'], true);
                setHasCookie(true);
            } else {
                //SnackbarStore.pushMessage(res.data['message'], false);
            }
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    회원가입
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="닉네임"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="아이디"
                                name="email"
                                autoComplete="email"
                                inputRef={id}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputRef={pw}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="이메일"
                                name="email"
                                autoComplete="email"
                                inputRef={email}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={register}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                계정이 이미 있으신가요?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
