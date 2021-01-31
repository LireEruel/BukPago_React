import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Post extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.post_id}</TableCell>
                <TableCell>{this.props.category}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.comments_num}</TableCell>
                <TableCell>{this.props.editor}</TableCell>
                <TableCell>{this.props.edit_time}</TableCell>
                <TableCell>{this.props.views_num}</TableCell>
                <TableCell>{this.props.recommend_num}</TableCell>
            </TableRow>
        )
    }
}

export default Post;