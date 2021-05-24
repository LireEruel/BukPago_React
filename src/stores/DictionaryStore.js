import { observable, action } from 'mobx';
import { createContext } from 'react';
import requestGetDictionary from '../controllers/DictionaryController';
import requestSearchDictionary from '../controllers/DictionaryController';

class DictionaryStore {
    @observable dictionarys = [];
    static instance = null;

    constructor() {
        this.context = createContext(this);
    }
    static getInstance() {
        if (!DictionaryStore.instance) this.instance = new DictionaryStore();
        return DictionaryStore.instance;
    }

    @action
    getDictionary() {
        return requestGetDictionary().then((result) => {
            this.dictionarys = [...result];
        });
    }

    @action
    searchDic(code, query) {
        console.log(code, query);
        return requestSearchDictionary(code, query).then((result) => {
            this.dictionarys = [...result];
        });
    }
}
export default DictionaryStore = DictionaryStore.getInstance();
