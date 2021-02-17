import React, {useEffect, useContext, useRef, useState} from 'react'
import { Button, Typography, } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

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

const rows = [
    {id : '가갸표', south : '반절본문' , mean : '한글을 반절식으로 배열한 것' },
    {id : '가격격차금', south : '가격편차금' , mean : '기관과 기업들의 생산과 유통 과정에서 같은 물건에 대한 구입 가격과 판매 가격 사이에 생기는 차액' },
    {id : '가녁', south : '가녘' , mean : '가장자리를 말하는 북한말' },
    {id : '가내댁', south : '댁내' , mean : '집안의 여자들' },
    {id : '가느초롬하', south : '-' , mean : '작고 가느스름하다' },
    {id : '가는밸', south : '작은창자' , mean : '-' },
    {id : '가두녀성', south : '전업주부' , mean : '다른 직업에 종사하지 않고 가정 살림만을 맡아 하는 주부' },
    {id : '가들랑거리', south : '가들랑대다' , mean : '자꾸 멋없이 가볍게 행동하다.' },
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
    const search = () => {
        console.log('검색 시작!') // 검색 관련 함수는 나중에 작성하도록 하자.
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search()
        }
    }
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
                        <DataGrid columns = {columns}   rows = {rows} pageSize={8} />
                    </div>
                </Grid>
            </div>
        </div>
    )
}