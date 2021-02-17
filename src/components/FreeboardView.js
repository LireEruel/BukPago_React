import React, { useState, useContext, Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import LogInView from './LogInView';
import { TablePagination, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import PostStore from '../stores/PostStore';

var elem = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;

var height = elem.clientHeight;
var width = elem.clientWidth;

function getWidth(tableRate, rate) {
    return width * tableRate * rate;
}

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
    search: {
        //   paddingRight: '2%',
        width: '15%',
    },
    table: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: height * 0.7,
        width: '70%',
    },
    fab: {
        marginRight: '15%',
        float: 'right',
    },
});

const options = [
    {
        id: '번호',
        key: 'post_number',
        align: 'center',
        width: getWidth(0.6, 1 / 15),
    },
    { id: '말머리', key: 'category', align: 'center', width: getWidth(0.6, 1 / 15) },
    { id: '제목', key: 'title', align: 'center', width: getWidth(0.6, 8 / 10) },
    {
        id: '댓글수',
        key: 'comment',
        align: 'center',
        width: getWidth(0.6, 1 / 15),
    },
    { id: '글쓴이', key: 'writer', align: 'center', width: getWidth(0.6, 1 / 15) },
    { id: '작성일', key: 'written_time', align: 'center', width: getWidth(0.6, 1 / 15) },
    {
        id: '조회',
        key: 'view',
        align: 'center',
        width: getWidth(0.6, 1 / 15),
    },
    {
        id: '추천',
        key: 'recommendation',
        align: 'center',
        width: getWidth(0.6, 1 / 15),
    },
];
function createData(
    post_number,
    category,
    title,
    comment,
    writer,
    written_time,
    view,
    recommendation,
) {
    return { post_number, category, title, comment, writer, written_time, view, recommendation };
}

const rows = [
    createData(8, '질문', '번역관련 질문합니다', 1, '김박사', '21:00', 10, 0),
    createData(7, '질문', '인식오류 관련 질문', 2, '김철수', '17:00', 10, 15),
    createData(6, '정보', '번역율 올리는 3가지 방법', 10, '김정보', '15:35', 44, 10),
    createData(5, '질문', '파일번역이 안되요', 1, '나바보', '12:35', 8, 2),
    createData(4, '질문', '오늘 점심 추천받아요', 5, '점심밥', '10:22', 22, 15),
    createData(3, '정보', '북한말 사전 이용방법', 4, '김사전', '09:50', 10, 5),
    createData(2, '질문', '번역한거 복사하는 방법', 1, '나질문', '09:11', 4, 0),
    createData(1, '공지', '이용안내', 15, '관리자', '08:33', 120, 20),
    createData(9, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(10, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(11, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(12, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(13, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(14, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(15, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(16, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(17, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(18, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(19, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(20, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(21, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(22, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(23, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(24, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(25, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(26, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(27, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(28, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(29, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(30, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(31, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(32, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(33, 'image', 'World', 15, 're2', '21:00', 10, 15),
    createData(34, 'image', 'World', 15, 're2', '21:00', 10, 15),
];


export default function Freeboard(props) {
/*
    getListData = async = () => {
        awit axios.get('free-board', {
            data : [{
                post_number : Post.post_id,
                category : Post.post_id,
                title, : Post.title,
                comment : Post.number_replay,
                writer : Post.post_editor,
                written_time : Post.edit_time,
                view : Post.view,
                recommendation : Post.number_recommandations
            }]
        })
    }
*/
    const search = () => {
        console.log('검색 시작!');
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    };
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const [open, setOpen] = useState(false);
    const postStore = useContext(PostStore.context);
    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPage = (e) => {
        setRowsPerPage(parseInt(+e.target.value));
        setPage(0);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const data_lists = postStore.readPost();
    var tmp = [];
    var datas = data_lists.tmp;
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.title} variant="h4">
                    자유게시판
                </Typography>
                <br />
                <div>
                    <TextField
                        className={classes.search}
                        id="standard-search"
                        tyep="search"
                        onKeyPress={handleKeyDown}
                    />
                    <SearchIcon onClick={search} />
                </div>
                <br />
                <br />
                <br />
            </div>
            <div className={classes.content}>
                <TableContainer className={classes.table}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {options.map((option) => {
                                    return (    
                                        <TableCell
                                            key={option.key}
                                            align={option.align}
                                            style={{ width: option.width }}
                                        >
                                            {option.id}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10]}
                        component="div"
                        count={data_lists.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPage}
                        ></TablePagination>
                <Link to="/write">
                    <Fab color="primary" aria-label="add" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
            </div>
            <div>
                <Link to="/sign-in">
                    <Button>Hi!</Button>
                </Link>
                <Button onClick={handleOpen}>Open Modal</Button>
                <Modal open={open} onClose={handleClose}>
                    <LogInView />
                </Modal>
            </div>
        </div>
    );
}
/*
                       <TableBody>
                           {data_lists
                               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                               .map((data_list) => {
                                   return (
                                       <TableRow key={datas[data_list]['post_number']}>    
                                           {datas.map((data) => {
                                               const value = data[data_list];
                                               return (
                                                   <TableCell
                                                   key={data}
                                                   >
                                                       {value}
                                                   </TableCell>
                                               );
                                           })}
                                       </TableRow>
                                   );
                               })}
                       </TableBody>
*/