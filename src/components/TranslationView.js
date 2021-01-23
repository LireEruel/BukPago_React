import React,  { useState } from 'react'
import { Typography, } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
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




const useStyles = makeStyles({
    root : {
        width : '99%',
        height : '100%',
        display : 'inline-block',
    },
    title : {
        paddingTop : '2%',
        textAlign : "center",
        fontWeight : 600
    },
    content : {
        paddingTop : '1%'
    },
    paper : {
        marginTop : '1%', 
        width : '35%',
        height : '50%',
    },
    textField : {
        width : '100%',
    },
    button : {
        float: 'right'
    },
    box : {
        display: 'flex',
        flex : 1,
        flexDirection : 'row-reverse'
    },
    textLength : {
        position: 'absolute',
        left : 690,
        top : 600
    },
    clearButton : {
        position: 'absolute',
        left : 730,
        top : 270,
        marginRight : '2%',
    },
    grid : {
        width :'50%',
    },
    bukPaper : {
        textAlign : "center",
        width : '10%',
        backgroundColor : '#ffd6d6'
    },
    namPaper : {
        textAlign : "center",
        width : '10%',
        backgroundColor : '#d6f8ff'
    },
})

export default function TranslationView(props) {
    const classes = useStyles();
    const [inputText, setInputText] = useState('');
    const [inputTextLength, setInputTextLength] = useState(0);
    const [outputText, setOutputText] = useState('임시 텍스트');
    const [open, setOpen] = useState(false);
    const maxTextLength = 3000;

    const onChange = (e) => {
        const str = e.target.value;
        setInputText(str);
        setInputTextLength(str.length);
    };

    const textClear = () => {
        setInputText('');
        setInputTextLength(0);
        setOutputText('');
    };

    const copyText = () => {
        navigator.clipboard.writeText(outputText);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    };

    return(
        <div className={classes.root} >
            <div  className = {classes.title}>
                <Typography className = {classes.title} variant="h3">
                    북한어 번역
                </Typography>
            </div>
            <br/>
            <div className = {classes.content} >
                <Grid
                    classNmae = {classes.grid}
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Paper className = {classes.bukPaper}>
                        <Typography  variant="h5" >
                            북한어
                        </Typography>
                    </Paper>
                    <Paper className = {classes.namPaper} >
                        <Typography  variant="h5" >
                            남한어
                        </Typography>
                    </Paper>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Paper className = {classes.paper}>
                        <TextField className = {classes.textField}
                            id="outlined-multiline-static"
                            multiline                           
                            autoFocus
                            rows={17}
                            onChange={onChange} 
                            value={inputText}
                            variant="outlined"
                            
                        />
                        <Typography className = {classes.textLength}>{inputTextLength} / {maxTextLength}</Typography>
                        <Box className = {classes.box} >
                            <Button className = {classes.button} variant="contained" disableRipple  color="primary">
                                번역하기
                            </Button>
                            {
                               inputTextLength == 0 ? null :(
                                   <IconButton className = {classes.clearButton} variant="contained" disableRipple onClick={textClear}>
                                        <ClearIcon ></ClearIcon>
                                    </IconButton>
                               )
                            }
                            
                        </Box>
                    </Paper>

                    <Paper className = {classes.paper}>
                        <TextField className = {classes.textField}
                            id="outlined-multiline-static"
                            multiline
                            rows={17}
                            variant="outlined"
                            InputProps={{
                                readOnly: true,
                            }}
                            value = {outputText}
                        />
                        <Box className = {classes.box} >
                            <Button className = {classes.button} variant="contained" disableRipple  color="primary" onClick={copyText}>
                                <FileCopyIcon></FileCopyIcon>
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Snackbar open={open} autoHideDuration={1100} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        복사에 성공했습니다.
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}