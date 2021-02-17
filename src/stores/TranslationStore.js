import { observable, action } from 'mobx';
import { createContext } from 'react';
import requestTranslate from '../controllers/TranslationController';

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
    translate(northText) {
<<<<<<< HEAD
        requestTranslate(northText).then((result) => {
            return result;
        });
    }
=======
        return requestTranslate(northText)
    }

>>>>>>> 34130850c0cac83e17c8042558db9e6b39457e3d
}
export default TranslationStore = TranslationStore.getInstance();
