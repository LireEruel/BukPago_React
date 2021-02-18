import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

export default function PostView() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>
                    <input type='text' id='title_text' name='title' defaultValue={xxx}></input>
                    <div className={classes.date}>
                        시간 들어갈 예정
                    </div>
                </div>
                <div>
                    <TextField></TextField>
                </div>
            </div>
        </div>
    )
}