import { action, observable } from 'mobx';
import { createContext } from 'react';
import requestReadPost, {requestAddPost, requestDeletePost, requestUpdatePost,} from '../controllers/PostController';

class PostStore {
    @observable posts = [];
    static instance = null;
    constructor() {
        this.context = createContext(this);
    }
    static getInstance() {
        if (!PostStore.instance) this.instance = new PostStore();
        return PostStore.instance;
    }
    @action
    readPost() {
        return requestReadPost
    }
    @action
    addPost(post_title, post_content) {
        return requestAddPost(post_title, post_content).then(res => {
            return res
        });
    }
    @action
    updatePost(post_id, post_title, post_content) {
        return requestUpdatePost(post_id, post_title, post_content).then(res => {
            return res
        })
    }
    @action
    deletePost(post_id) {
        return requestDeletePost(post_id).then(res=> {
            if(res == 200)
                return true
            else
                return false
        })
    }
}
export default PostStore = PostStore.getInstance();
