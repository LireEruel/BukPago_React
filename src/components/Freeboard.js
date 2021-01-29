import React, { useState, Component } from 'react';
import { TablePagination, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '99%',
        height: '100%',
        display: 'inline-block',
    },
    title: {
        paddingTop: '2%',
        textAlign: 'center',
        fontWeight: 500,
    },
    content: {
        align: 'center',
        backgroundColor: '#ffffff',
        position: 'absolute',
        marginLeft: '10%',
        marginRight: 'auto',
        width: '1200px',
    },
    button: {
        float: 'right',
    },
});

const options = [
    {
        id: '번호',
        key: 'post_number',
        align: 'center',
        width: '7%',
    },
    { id: '말머리', key: 'category', align: 'center', width: '7%' },
    { id: '제목', key: 'title', align: 'center', width: 300 },
    {
        id: '댓글수',
        key: 'comment',
        align: 'center',
        width: '7%',
    },
    { id: '글쓴이', key: 'writer', align: 'center', width: '10%' },
    { id: '작성일', key: 'written_time', align: 'center', width: '7%' },
    {
        id: '조회',
        key: 'view',
        align: 'center',
        width: '6%',
    },
    {
        id: '추천',
        key: 'recommendation',
        align: 'center',
        width: '6%',
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
    createData(1, 'text', 'Hello', 10, 're1', '21:00', 10, 15),
    createData(2, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(3, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(4, 'image', 'World', 11, 're2', '21:00', 10, 15),
    createData(5, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(6, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(7, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(8, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(9, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(10, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(11, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(12, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(13, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(14, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(15, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(16, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(17, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(18, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(19, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(20, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(21, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(22, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(23, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(24, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(25, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(26, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(27, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(28, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(29, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(30, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(31, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(32, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(33, 'image', 'World', 12, 're2', '21:00', 10, 15),
    createData(34, 'image', 'World', 12, 're2', '21:00', 10, 15),
];

export default function Freeboard(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(30);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography className={classes.title} variant="h3">
                    자유게시판
                </Typography>
            </div>
            <br />
            <div className={classes.content}>
                <TableContainer>
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
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow key={row.post_number}>
                                            {options.map((option) => {
                                                const value = row[option.key];
                                                return (
                                                    <TableCell
                                                        key={option.key}
                                                        align={option.align}
                                                        style={{ width: option.width }}
                                                    >
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[50, 100]}
                    //component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPage}
                ></TablePagination>
                <Button className={classes.button} variant="contained" color="primary">
                    글쓰기
                </Button>
            </div>
        </div>
    );
}
