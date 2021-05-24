import React, { useRef, useContext } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MemberStore from '../stores/MemberStore';
import Member from '../models/Member';
import { useSnackbar } from 'material-ui-snackbar-provider';
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
    const memberStore = useContext(MemberStore.context);
    const id = useRef('');
    const pw = useRef('');
    const name = useRef('');
    const email = useRef('');
    const snackbar = useSnackbar();

    function register(e) {
        e.preventDefault();
        if (name.current.value === '') {
            snackbar.showMessage(
                '닉네임을 입력해 주세요',
                '확인'
            )
        }
        if (id.current.value === '') {
            snackbar.showMessage(
                '아이디를 입력해 주세요',
                '확인'
            )
        }
        if (pw.current.value === '') {
            snackbar.showMessage(
                '비밀번호를 입력해주세요',
                '확인'
            )
        }
        if (email.current.value === '') {
            snackbar.showMessage(
                '이메일을 입력해 주세요',
                '확인'
            )
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
            } else {
                //SnackbarStore.pushMessage(res.data['message'], false);
            }
            snackbar.showMessage(
                res.message,
            )
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
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
                                autoComplete="email"
                                inputRef={name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="아이디"
                                autoComplete="email"
                                inputRef={id}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
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
                            <Link href="/buk-pago/signIn" variant="body2">
                                계정이 이미 있으신가요?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
