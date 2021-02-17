import React, { Component, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import PostStore from '../stores/PostStore';

const useStyles = makeStyles({
    root: {
        width: '99%',
        height: '100%',
        display: 'inline-block',
    },
    paper: {
        marginTop: '5%',
        width: '77%',
        height: '80%',
        padding: '20px',
        paddingLeft: '30px',
        marginTop: '30px',
        marginLeft: '50px',
    },
    title_text: {
        marginLeft: '10%',
        width: '70%',
        border: 'groove',
        borderBottom: 'solid 1px #ababab',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    content_text: {
        marginLeft: '10%',
        width: '70%',
        resize: 'none',
        border: 'groove',
    },
    box: {
        width: '80%',
    },
    button: {
        float: 'right',
    },
});

export default function WriteView() {
    const classes = useStyles();
    const [titleText, setTitleText] = useState('');
    const [contentText, setContentText] = useState('');
    const postStore = useContext(PostStore.context);
    const handleChangeTitle = (e) => {
        setTitleText(e.target.value);
    };
    const handleChangeContent = (e) => {
        setContentText(e.target.value);
    };
    const handleWrite = (e) => {
        if (titleText === '') {
            return alert('제목을 입력하세요.');
        } else if (contentText === '') {
            return alert('내용을 입력하세요.');
        }
        postStore.addPost(titleText, contentText).then((res) => {
            alert('성공적으로 게시되었습니다.');
        });
    };
    return (
        <div className={classes.root}>
            <div>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Paper className={classes.paper}>
                        <TextField
                            className={classes.title_text}
                            id="title" // 식별값
                            rows={1}
                            placeholder="제목"
                            onChange={handleChangeTitle}
                            value={titleText}
                            variant="outlined"
                        />
                        <TextField
                            className={classes.content_text}
                            id="content"
                            multiline // 줄바꿈 기능
                            rows={30}
                            placeholder="내용"
                            onChange={handleChangeContent}
                            value={contentText}
                            variant="outlined"
                        />
                        <Box className={classes.box}>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={handleWrite}
                            >
                                등록
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </div>
        </div>
    );
}
