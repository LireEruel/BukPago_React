import React from 'react';
import Post from './Post'

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
        return (
            <div>
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
            </div>
        );
    }
}
    
export default FreeBoard;