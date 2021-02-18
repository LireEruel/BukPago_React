import {observable , action} from 'mobx';
import {createContext} from "react";
import requestGetDictionary from "../controllers/DictionaryController"

class DictionaryStore {
    @observable dictionarys = [];
    static instance = null;

    constructor() {
        this.context = createContext(this)
    }
    static getInstance () {
        if (!DictionaryStore.instance)
            this.instance = new DictionaryStore();
        return DictionaryStore.instance;
    }

    @action
    getDictionary(query) {
        return requestGetDictionary(query).then(
            result => {
                this.dictionarys = [...result]
            }
        )
    }
}
export default DictionaryStore = DictionaryStore.getInstance()