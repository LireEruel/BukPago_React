import React from 'react';
import Post from './Post';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { Typography } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        align: 'center',
        width: '70%',
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
        marginLeft: '50%',
        marginRight: 'auto',
        width: '1200px',
    },
    text:{
        align: 'center'
    }
});

const post = [
    {
        'post_id': '1',
        'category': '이야깃거리',
        'title': '자퇴하는 100가지방법',
        'comments_num': '12',
        'editor': '전민규',
        'edit_time': '13:30',
        'views_num': '141',
        'recommend_num': '3'
    },
    {
        'post_id': '2',
        'category': '먹을거리',
        'title': '퇴학하는 100가지방법',
        'comments_num': '15',
        'editor': '푸틴',
        'edit_time': '13:45',
        'views_num': '123',
        'recommend_num': '4'
    }
]


class FreeBoard extends Post {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <div className={classes.title}>
                    <Typography className={classes.title} variant="h3">
                        자유게시판<br/>
                    </Typography>
                </div>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>게시글 번호</TableCell>
                            <TableCell>카테고리</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell>댓글</TableCell>
                            <TableCell>글쓴이</TableCell>
                            <TableCell>작성시간</TableCell>
                            <TableCell>조회수</TableCell>
                            <TableCell>추천</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {post.map(c => {
                            return <Post
                                post_id={c.post_id}
                                category={c.category}
                                title={c.title}
                                comments_num={c.comments_num}
                                editor={c.editor}
                                edit_time={c.edit_time}
                                views_num={c.views_num}
                                recommend_num={c.recommend_num}
                            />
                        })}
                    </TableBody>
                </Table>
                <Button className={classes.button} variant="contained" color="primary">
                    글쓰기
                </Button>
            </Paper>
        );
    }
}
export default withStyles(styles)(FreeBoard);