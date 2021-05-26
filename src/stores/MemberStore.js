import { action, observable } from 'mobx';
import { createContext } from 'react';
import requestLogin, { requestSignUp, requestGetRanker,requestGetUserInfo,requestGetMyRank,requestUpdateUser } from '../controllers/MemberController';
import Member from '../models/Member';
import { CookiesProvider } from 'react-cookie';

class MemberStore {
    @observable members = [];
    static instance = null;
    constructor() {
        this.context = createContext(this);
    }
    static getInstance() {
        if (!MemberStore.instance) this.instance = new MemberStore();
        return MemberStore.instance;
    }

    @action
    register(id, pw, name, email) {
        return requestSignUp(id, pw, name, email).then((result) => {
            return result;
        });
    }

    @action
    login(id, pw) {
        return requestLogin(id, pw).then((result) => {
            return result;
        });
    }

    @action
    getRanker() {
        return requestGetRanker().then((result) => {
            return result;
        });
    }

    @action
    getUserInfo(){
        return requestGetUserInfo().then((result)=> {
            return result;
        })
    }

    @action
    getMyRank() {
        return requestGetMyRank().then((result) => {
            return result;
        })
    }

    @action
    updateUser(){
        return requestUpdateUser().then((result) => {
            return result;
        })
    }
}
export default MemberStore = MemberStore.getInstance();
