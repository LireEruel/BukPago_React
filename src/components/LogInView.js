import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import SignInView from './SignInView';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import axios from 'axios';


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
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleChangeUserId = (e) => {
        setUserId(e.target.value);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeUserPassword = (e) => {
        setUserPassword(e.target.value);
    };
    const handleLoginCheck = () => {
        console.log({ userId }, { userPassword });
        /*
        서버에 확인하는 요청 해야할 것 같음
        */
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
                        <Button onClick={handleOpen}>회원가입</Button>
                        <Modal open={open} onClose={handleClose}>
                             <SignInView />
                         </Modal>
                    </div>
                    <Button className={classes.loginBtn} onClick={handleLoginCheck}>
                        {''}로그인{''}
                    </Button>
                </div>
            </div>
        </div>
    );
}