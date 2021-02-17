import { action, observable } from 'mobx';
import { createContext } from 'react';
import requestLogin from '../controllers/LoginController';

class LoginStore {
    @observable logins = [];
    static instance = null;
    constructor() {
        this.context = createContext(this);
    }
    static getInstance() {
        if (!LoginStore.instance) this.instance = new LoginStore();
        return LoginStore.instance;
    }
    @action
    async login(email, pw) {
        return requestLogin(email, pw);
    }
}
export default LoginStore = LoginStore.getInstance();
