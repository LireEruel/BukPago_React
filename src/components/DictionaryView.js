import React, {useState } from 'react'
import { Typography, } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';

var elem = (document.compatMode === "CSS1Compat") ? 
    document.documentElement :
    document.body;

var height = elem.clientHeight;
var width = elem.clientWidth;


function getWidth(tableRate,rate){
    return width*tableRate*rate
}

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
    table : {
        height: 400,
        width: '75%'
    }
})

const columns = [
    {field: 'id', headerName : '북한어', width: getWidth(0.75, 2/9) },
    {field: 'south', headerName : '남한어', width: getWidth(0.75, 2/9) },
    {field: 'mean', headerName : '뜻', width: getWidth(0.75, 5/10)}
]

const rows = [
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
    {id : '북', south : '남' , mean : '냥' },
]
export default function DictionaryView(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div className = {classes.title}>
                <Typography className = {classes.title} variant="h3">
                    북한말 사전
                </Typography>
            </div>
            <br/>
            <div className = {classes.content}>
                <Grid
                    classNmae = {classes.grid}
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <div className = {classes.table}>
                        <DataGrid rows = {rows} columns = {columns} pageSize={5} />
                    </div>
                </Grid>
            </div>
        </div>
    )
}