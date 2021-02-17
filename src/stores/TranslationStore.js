import {observable , action} from 'mobx';
import {createContext} from "react";
import requestTranslate from "../controllers/TranslationController"
import requestGetDictionary from "../controllers/TranslationController"

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
        return requestTranslate(northText)
    }

    @action
    getDictionary(query) {
        return requestGetDictionary(query).then(
            result => {
                this.translates = [...result]
            }
        )
    }
}
export default TranslationStore = TranslationStore.getInstance()