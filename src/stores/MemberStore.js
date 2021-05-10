import { action, observable } from 'mobx';
import { createContext } from 'react';
import requestLogin, { requestSignUp, requestGetRanker } from '../controllers/MemberController';
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
        const newMember = new Member(id, pw, name, email, 0, 0);
        console.log(newMember);
        return requestSignUp(newMember).then((result) => {
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
}
export default MemberStore = MemberStore.getInstance();
