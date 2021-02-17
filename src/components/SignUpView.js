import React, { Component, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MemberStore from '../stores/MemberStore';
import Member from '../models/Member'


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
    registerContent: {
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        padding: '0 20px 32px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    registerId: {
        width: '100%',
        height: '40px',
        marginTop: '30px',
        padding: '9px 12px',
        outline: 'none',
        boxSizing: 'border-box',
    },
    registerPassword: {
        width: '100%',
        height: '40px',
        marginTop: '15px',
        padding: '9px 12px',
        outline: 'none',
        boxSizing: 'border-box',
    },
    register: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    autoRegister: {
        marginTop: '20px',
        fontSize: '12px',
        color: '#8d8d8d',
        lineHeight: 3,
    },
    registerBtn: {
        variant: "contained",
        color: "white",
        height: '40px',
        fontSize: '14px',
        padding: '13px 30px',
        cursor: 'pointer',
        backgroundColor: 'black',
        lineHeight: '1px',
        marginTop: '20px',
        marginBottom: '12px',
        borderRadius: '3px',
        borderStyle: 'none',
    },
});

export default function SignUpView(props) {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [checkPassword, setUserCheckPassword] = useState('');
    const [userNickname, makeUserNickname] = useState('');
    const memberStore = useContext(MemberStore.context)
    const classes = useStyles();
    const handleChangeUserId = (e) => {
        setUserId(e.target.value);
    };
    const handleChangeUserPassword = (e) => {
        setUserPassword(e.target.value);
    };
    const handleChangeUserCheckPassword = (e) => {
        setUserCheckPassword(e.target.value);
    };
    const makeChangeUserNickname = (e) => {
        makeUserNickname(e.target.value);
    };
    const handleRegisteUser = (e) => {
        var member = new Meber(userId, userPassword, userNickname)
        memberStore.signUp(member).then(res => {
            if(res.status == 200) {
                alert(res.data['message'])
            } else {
                alert(res.data['message'])
            }
        })
    };
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.registerContent}>
                <TextField
                        className={classes.registerPassword}
                        id="registerNickname"
                        placeholder="별명"
                        onChange={makeChangeUserNickname}
                        value={userNickname}
                    ></TextField>
                    <TextField
                        className={classes.registerId}
                        id="registerId"
                        placeholder="아이디"
                        onChange={handleChangeUserId}
                        value={userId}
                    ></TextField>
                    <TextField
                        className={classes.registerPassword}
                        id="registerPassword"
                        placeholder="비밀번호"
                        onChange={handleChangeUserPassword}
                        value={userPassword}
                    ></TextField>
                    <TextField
                        className={classes.registerPassword}
                        id="checkPassword"
                        placeholder="비밀번호 확인"
                        onChange={handleChangeUserCheckPassword}
                        value={checkPassword}
                    ></TextField>

                    <Button className={classes.registerBtn} onClick={handleRegisteUser}>
                        {''}가입하기{''}
                    </Button>
                </div>
            </div>
        </div>
    );
}