import { observable, action } from 'mobx';
import { createContext } from 'react';
import requestTranslate,{requestGetApiKey} from '../controllers/TranslationController';


class TranslationStore {
    @observable translates = [];
    static instance = null;

    constructor() {
        this.context = createContext(this);
    }
    static getInstance() {
        if (!TranslationStore.instance) this.instance = new TranslationStore();
        return TranslationStore.instance;
    }

    @action
    translate(northText, code) {
        return requestTranslate(northText, code)
    }


    @action
    getApiKey(name, purpose) {
        return requestGetApiKey(name, purpose).then((res) => {
            return res;
        })
    }


}
export default TranslationStore = TranslationStore.getInstance();
