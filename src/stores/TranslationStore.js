import {observable , action} from 'mobx';
import {createContext} from "react";
import requestTranslate from "../controllers/TranslationController"

class TranslationStore {
    @observable translates = [];
    static instance = null;

    constructor() {
        this.context = createContext(this)
    }
    static getInstance () {
        if (!TranslationStore.instance)
            this.instance = new TranslationStore();
        return TranslationStore.instance;
    }

    @action
    translate(northText) {
        requestTranslate(northText).then(result => {
            return result
        }) 
    }
    

}
export default TranslationStore = TranslationStore.getInstance()