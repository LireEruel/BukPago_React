import axios from 'axios';
//페이징
export default async function requestReadPost() {
    return await axios.get(
        '/api/post').catch((error) => {return []}).then(res => {
            return res;
        });
}
export async function readPost(post_id) {
    return await axios.get(`/api/post/${post_id}/`).catch(err => {return [] }).then(res => {
        if(res.data != null) {
            var tmp = res.data
            console.log(tmp)
        }
    })
}
//등록
export async function requestAddPost(post_title, post_content) {
    return await axios.post(
        '/api/freeBoard', {
            title: post_title,
            content: post_content,
        })
        .catch((err) => {
            console.warn(err);
        })
        .then((res) => {
            return res;
        });
}
//수정
export async function requestUpdatePost(post_id, post_title, post_content) {
    return await axios.put('/api/post/', {
        id : post_id,
        title: post_title,
        content: post_content
    }).catch(err => {console.warn(err)}).then(res => {return res})
}
//삭제
export async function requestDeletePost(post_id) {
    return await axios({methon:'Delete', url:'/api/post/', data:{id : post_id}}).catch(err => console.warn(err)).then(res => {return res.status})
}