import React, { Component, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import LoginStore from '../stores/LoginStore';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '480px',
        height: '620px',
        margin: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
        boxSizing: 'border-box',
        margin: '80px auto',
        padding: '20px',
        //      background: '#fff',
    },
    loginContent: {
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        padding: '0 20px 32px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    loginId: {
        width: '100%',
        height: '40px',
        marginTop: '30px',
        padding: '9px 12px',
        outline: 'none',
        boxSizing: 'border-box',
    },
    loginPassword: {
        width: '100%',
        height: '40px',
        marginTop: '15px',
        padding: '9px 12px',
        outline: 'none',
        boxSizing: 'border-box',
    },
    login: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    autoLogin: {
        marginTop: '20px',
        fontSize: '12px',
        color: '#8d8d8d',
        lineHeight: 3,
    },
    loginBtn: {
        height: '40px',
        fontSize: '14px',
        padding: '13px 30px',
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'white',
        lineHeight: '1px',
        marginTop: '20px',
        marginBottom: '12px',
        borderRadius: '3px',
        borderStyle: 'none',
    },
});

export default function LogInView(props) {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [open, setOpen] = useState(true);
    const classes = useStyles();
    const loginStore = useContext(LoginStore.context);
    const handleChangeUserId = (e) => {
        setUserId(e.target.value);
    };
    const handleChangeUserPassword = (e) => {
        setUserPassword(e.target.value);
    };
    const handleLoginCheck = (e) => {
        if (userId != '' && userPassword != '') {
            loginStore.login(userId, userPassword).then((result) => {
                alert('로그인 성공');
            });
        } else {
            alert('로그인 실패');
        }
    };
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.loginContent}>
                    <TextField
                        className={classes.loginId}
                        id="loginId"
                        placeholder="아이디"
                        onChange={handleChangeUserId}
                        value={userId}
                    ></TextField>
                    <TextField
                        className={classes.loginPassword}
                        id="loginPassword"
                        placeholder="비밀번호"
                        onChange={handleChangeUserPassword}
                        value={userPassword}
                    ></TextField>
                    <div className={classes.login}>
                        <label className={classes.autoLogin} for="stay">
                            {''}
                            <input type="checkbox" id="stay" />
                            로그인 유지하기
                        </label>
                        <Link to="/sign-in">
                            <div className={classes.autoLogin}>회원가입</div>
                        </Link>
                    </div>
                    <Button className={classes.loginBtn} onClick={handleLoginCheck}>
                        {''}로그인{''}
                    </Button>
                </div>
            </div>
        </div>
    );
}
