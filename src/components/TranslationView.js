import React from 'react'
import { Typography, } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    root : {
        width : '100%',
        height : '100%',
        display : 'inline-block',
    },
    title : {
        paddingTop : '2%',
        textAlign : "center",
        fontWeight : 600
    },
    content : {
        paddingTop : '5%'
    },
    paper : {
        width : '30%',
        height : '30%',
    },
    textField : {
        width : '100%',
    },
    button : {
        float: 'right'
    },
    box : {
        display: 'flex', justifyContent : 'right'
    }
})

export default function TranslationView(props) {
    const classes = useStyles();

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
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Paper className = {classes.paper}>
                        <TextField className = {classes.textField}
                            id="outlined-multiline-static"
                            multiline
                            rows={7}
                            variant="outlined"
                        />
                        <Box className = {classes.box} >
                            <Button className = {classes.button} variant="contained" disableRipple  color="primary">
                                번역하기
                            </Button>
                        </Box>
                    </Paper>

                    <Paper className = {classes.paper}>
                        <TextField className = {classes.textField}
                            id="outlined-multiline-static"
                            multiline
                            rows={7}
                            variant="outlined"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <Box className = {classes.box} >
                            <Button className = {classes.button} variant="contained" disableRipple  color="primary">
                                복사
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}