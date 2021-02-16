import React,  { useContext, useState } from 'react'
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
import TranslationStore from '../stores/TranslationStore'



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
        left : '45%',
        top : '90%'
    },
    clearButton : {
        position: 'absolute',
        left : '47%',
        top : '40%',
        marginRight : '2%',
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
    const [outputText, setOutputText] = useState('');
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [severity, setSeverity] = useState('success');
    const maxTextLength = 3000;
    const translationStore = React.useContext(TranslationStore.context)
    const onChange = (e) => {
        const str = e.target.value;
        if(str.length <= maxTextLength)
        {
            setInputText(str);
            setInputTextLength(str.length);
        }
        else {
            setContent('3000자 이하만 입력 가능합니다.')
            setSeverity("warning")
            setOpen(true);
        }
    };

    const textClear = () => {
        setInputText('');
        setInputTextLength(0);
        setOutputText('');
    };

    const copyText = () => {
        navigator.clipboard.writeText(outputText);
        setContent('복사가 완료되었습니다.')
        setSeverity("success")
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    };

    const translate = () => {
        translationStore.translate(inputText).then((result) => 
            {
                console.log(result)
                //여기에 이제 result에서 한국어 뽑아내서 setOutputText(어쩌구) 해야한다.
            }
        )
    }
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
                    className = {classes.grid}
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
                            <Button className = {classes.button} variant="contained" disableRipple onClick={translate} color="primary">
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
                <Snackbar open={open} autoHideDuration={1100} onClose={handleClose} content={content} severity = {severity}>
                    <Alert onClose={handleClose} severity={severity}>
                        {content}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}