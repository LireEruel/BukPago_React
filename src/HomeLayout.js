import React, { Component, useState, useEffect } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
    appBar: {
        backgroundColor: '#58a0d1',
    },
    contentGrid: {
        paddingLeft: '3%',
        width: '40%',
    },
    accountGrid: {
        width: '60%',
    },
    title: {
        fontSize: '18px',
        fontWeight: 600,
    },
    contentArea: {
        paddingTop: '5%',
        width: '100%',
        height: '100%',
        minHeight: '80%',
        minWidth: '100%',
        position: 'sticky',
    },
    link: {
        textDecoration: 'none',
    },
    iconBtn: {
        color: 'white',
    },
    accountIcon: {
        float: 'right',
    },
}));

function HomeLayout(props) {
    const { children } = props;
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    const cookies = props.cookies;
    const setHasCookie = props.setHasCookie;
    const removeCookie = props.removeCookie;
    const hasCookie = props.hasCookie;

    const logout = () => {
        setHasCookie(false)
        removeCookie()
        window.location.reload();
    }
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar} alignItems="flex-end" position="fixed">
                    <Grid
                        className={classes.contentGrid}
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
                        <Link
                            to={{
                                pathname: '/buk-pago',
                            }}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button className={classes.title} size="large">
                                北파고
                            </Button>
                        </Link>
                        <Link
                            to={{
                                pathname: '/buk-pago/file-translate',
                            }}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button className={classes.title} size="large">
                                파일번역
                            </Button>
                        </Link>
                        <Link
                            to={{
                                pathname: '/buk-pago/dictionary',
                            }}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button className={classes.title} size="large">
                                북한말 사전
                            </Button>
                        </Link>
                        <Link
                            to={{
                                pathname: '/buk-pago/train',
                            }}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button className={classes.title} size="large">
                                北파고 Train
                            </Button>
                        </Link>
                        <Link
                            to={{
                                pathname: '/buk-pago/api'
                            }}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button className={classes.title} size='large'>
                                北파고 API
                            </Button>
                        </Link>
                    </Grid>
                    <Grid
                        className={classes.accountGrid}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <div className={classes.accountIcon}>
                            {hasCookie == false ? (
                                <div>
                                    <Link
                                        to={{
                                            pathname: '/buk-pago/signIn',
                                        }}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className={classes.title} variant="contained">
                                            로그인
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <div>

                                    <IconButton onClick={logout} >
                                        <ExitToAppIcon fontSize="large" className={classes.iconBtn} />
                                    </IconButton>
                                    <Link
                                        to={{
                                            pathname: '/buk-pago/myPage',
                                        }}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <IconButton
                                            className={classes.accountIcon}
                                        >
                                            <AccountCircle fontSize="large" className={classes.iconBtn} />
                                        </IconButton>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentArea}>{children}</div>
        </div>
    );
}

export default HomeLayout;
