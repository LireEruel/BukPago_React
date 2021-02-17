import React, {useEffect, useContext, useRef, useState} from 'react'
import { Button, Typography, } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import TranslateStore from '../stores/TranslationStore';

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
        fontWeight : 600,
        paddingBottom : '1%'
    },
    table : {
        paddingTop : '1%',
        height: height*0.6,
        width: '75%'
    },
    search : {
        width: '50%'
    }
})

const columns = [
    {field: 'id', headerName : '북한어', width: getWidth(0.75, 2/9)},
    {field: 'south', headerName : '남한어', width: getWidth(0.75, 2/9) },
    {field: 'mean', headerName : '뜻', width: getWidth(0.75, 5/10)}
]


export default function DictionaryView(props) {
    const classes = useStyles();
    const search = () => {
        console.log('검색 시작!') // 검색 관련 함수는 나중에 작성하도록 하자.
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search()
        }
    }
   
    const translateStore = useContext(TranslateStore.context)

    useEffect(() => {
        translateStore.getDictionary();
    }, []);

    return (
        <div className={classes.root}>
            <div className = {classes.title}>
                <Typography className = {classes.title} variant="h3">
                    북한말 사전
                </Typography>
                <div>
                    <TextField className = {classes.search} id="standard-search" type="search" onKeyPress={handleKeyDown}/>
                    <SearchIcon onClick={search}/>
                </div>
            </div>
            <br/>
            <div className = {classes.content}>
                <Grid
                    className = {classes.grid}
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <div className = {classes.table}>
                        <DataGrid columns = {columns} rows = {translateStore.translates} pageSize={8} />
                    </div>
                </Grid>
            </div>
        </div>
    )
}