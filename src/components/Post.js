import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.post_id}</p>
                <p>{this.props.category}</p>
                <p>{this.props.title}</p>
                <p>{this.props.comments_num}</p>
                <p>{this.props.editor}</p>
                <p>{this.props.edit_time}</p>
                <p>{this.props.views_num}</p>
                <p>{this.props.recommend_num}</p>
            </div>
        )
    }
}

export default Post;