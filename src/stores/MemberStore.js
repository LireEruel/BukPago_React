import { action, observable } from 'mobx';
import { createContext } from 'react';
import requestLogin, { requestSignUp } from '../controllers/MemberController';
import Member from '../models/Members'
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
    signUp(member) {
        return requestSignUp(member)
    }
    @action
    async login(email, pw) {
        return requestLogin(email, pw);
    }
}
export default MemberStore = MemberStore.getInstance();
