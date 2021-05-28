import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import TranslationStore from '../stores/TranslationStore';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TrainStore from '../stores/TrainStore';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles({
    root: {
        width: '99%',
        height: '100%',
        display: 'inline-block',
    },
    title: {
        paddingTop: '2%',
        textAlign: 'center',
        fontWeight: 600,
    },
    content: {
        paddingTop: '1%',
    },
    paper: {
        marginTop: '1%',
        width: '35%',
        height: '50%',
        position: 'relative',
    },
    textField: {
        width: '100%',
    },
    button: {
        float: 'right',
    },
    box: {
        //display: 'flex',
        //flex: 1,
        //flexDirection: 'row-reverse',
    },
    textLength: {
        position: 'absolute',
        right: '2%',
        bottom: '10%',
    },
    clearButton: {
        position: 'absolute',
        right: '0%',
        top: '0%',
    },
    bukPaper: {
        textAlign: 'center',
        width: '10%',
        backgroundColor: '#ffd6d6',
    },
    namPaper: {
        textAlign: 'center',
        width: '10%',
        backgroundColor: '#d6f8ff',
    },
    upDownBtn: {
        float: 'left',
    },
});

export default function TranslationView(props) {
    const classes = useStyles();
    const [inputText, setInputText] = useState('');
    const [inputTextLength, setInputTextLength] = useState(0);
    const [outputTextLength, setOutputTextLength] = useState(0);
    const [outputText, setOutputText] = useState('');
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [severity, setSeverity] = useState('success');
    const [translateState, setTranslateState] = useState(false);
    const maxTextLength = 3000;
    const translationStore = React.useContext(TranslationStore.context);
    const trainStore = React.useContext(TrainStore.context);
    const [code, setCode] = useState(false);
    const [transCode, setTransCode] = useState('맞춤법 검사')

    const handleChange = (e) => {
        if(e.target.checked == true)
        {
            setTransCode('기계 번역')
            setCode(true)
        }
        else{
            setTransCode('맞춤법 검사')
            setCode(false)
        }
    }
    const onInputChange = (e) => {
        const str = e.target.value;
        setTranslateState(false);
        if (str.length <= maxTextLength) {
            setInputText(str);
            setInputTextLength(str.length);
        } else {
            setContent('3000자 이하만 입력 가능합니다.');
            setSeverity('warning');
            setOpen(true);
        }
    };

    const onOutputChange = (e) => {
        const str = e.target.value;
        if (str.length <= maxTextLength) {
            setOutputText(str);
            setOutputTextLength(str.length);
        } else {
            setContent('3000자 이하만 입력 가능합니다.');
            setSeverity('warning');
            setOpen(true);
        }
    };
    const textClear = () => {
        setInputText('');
        setInputTextLength(0);
        setTranslateState(false);
        setOutputText('');
    };

    const copyText = () => {
        navigator.clipboard.writeText(outputText);
        setContent('복사가 완료되었습니다.');
        setSeverity('success');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const transLike = () => {
        trainStore
            .transLike(true, inputText, outputText)
            .then((result) => {
                console.log(result);
                setContent('피드백 감사합니다! :)');
                setSeverity('success');
                setOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const transDislike = () => {
        trainStore
            .transLike(false, inputText, outputText)
            .then((result) => {
                setContent('피드백 감사합니다! :)');
                setSeverity('success');
                setOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const translate = () => {
        if(inputText.length <4)
        {
            setContent('4글자 이상 작성해주세요!');
            setSeverity('error');
            setOpen(true);
            setTranslateState(false);
        }
        else
        {
            translationStore
            .translate(inputText, code)
            .then((result) => {
                setOutputText(result);
                setTranslateState(true);
            })
            .catch((err) => {
                console.log(err);
            });
        }
        
    };

    const transOffer = () => {
        trainStore
            .transOffer(inputText, outputText)
            .then((result) => {
                setContent('피드백 감사합니다! :)');
                setSeverity('success');
                setOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.title} variant="h3">
                    북한어 번역
                </Typography>
                
            </div>
            <br />
            <div className={classes.content}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >

                <Switch
                    checked={code}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                /> 
                <div>
                <Typography  variant="h6">
                    {transCode}
                </Typography>
                </div>
                
            </Grid>
                
                
                <Grid
                    className={classes.grid}
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Paper className={classes.bukPaper}>
                        <Typography variant="h5">북한어</Typography>
                    </Paper>
                    <Paper className={classes.namPaper}>
                        <Typography variant="h5">남한어</Typography>
                    </Paper>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    
                    <Paper className={classes.paper}>
                        <TextField
                            className={classes.textField}
                            id="outlined-multiline-static"
                            multiline
                            autoFocus
                            rows={17}
                            onChange={onInputChange}
                            value={inputText}
                            variant="outlined"
                        />
                        <Typography className={classes.textLength}>
                            {inputTextLength} / {maxTextLength}
                        </Typography>
                        <Box className={classes.box}>
                            <Button
                                className={classes.button}
                                variant="contained"
                                disableRipple
                                onClick={translate}
                                color="primary"
                            >
                                번역하기
                            </Button>
                            {inputTextLength == 0 ? null : (
                                <IconButton
                                    className={classes.clearButton}
                                    variant="contained"
                                    onClick={textClear}
                                >
                                    <ClearIcon></ClearIcon>
                                </IconButton>
                            )}
                        </Box>
                    </Paper>

                    <Paper className={classes.paper}>
                        {translateState == false ? (
                            <TextField
                                className={classes.textField}
                                id="outlined-multiline-static"
                                multiline
                                rows={17}
                                variant="outlined"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={outputText}
                            />
                        ) : (
                            <TextField
                                className={classes.textField}
                                id="outlined-multiline-static"
                                multiline
                                rows={17}
                                variant="outlined"
                                value={outputText}
                                onChange={onOutputChange}
                            />
                        )}
                        <Box className={classes.box}>
                            {translateState == false ? null : (
                                <ButtonGroup
                                    color="primary"
                                    aria-label="outlined primary button group"
                                >
                                    <Button
                                        className={classes.upDownBtn}
                                        disableRipple
                                        color="primary"
                                        onClick={transLike}
                                    >
                                        <ThumbUpAltIcon></ThumbUpAltIcon>
                                    </Button>
                                    <Button
                                        className={classes.upDownBtn}
                                        disableRipple
                                        color="primary"
                                        onClick={transDislike}
                                    >
                                        <ThumbDownAltIcon></ThumbDownAltIcon>
                                    </Button>
                                    <Button
                                        className={classes.upDownBtn}
                                        disableRipple
                                        color="primary"
                                        onClick={transOffer}
                                    >
                                        수정하기
                                    </Button>
                                </ButtonGroup>
                            )}

                            <Button
                                className={classes.button}
                                variant="contained"
                                disableRipple
                                color="primary"
                                onClick={copyText}
                            >
                                <FileCopyIcon></FileCopyIcon>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Snackbar
                    open={open}
                    autoHideDuration={1100}
                    onClose={handleClose}
                    content={content}
                    severity={severity}
                >
                    <Alert onClose={handleClose} severity={severity}>
                        {content}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}
