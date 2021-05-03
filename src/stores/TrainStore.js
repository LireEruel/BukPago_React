import { observable, action } from 'mobx';
import { createContext } from 'react';
import requestGetTestCase from '../controllers/TrainController';
import requestTransLike from '../controllers/TrainController';
import requestTransOffer from '../controllers/TrainController';


class TrainStore {
    @observable trains = [];
    static instance = null;

    constructor() {
        this.context = createContext(this);
    }

    static getInstance() {
        if (!TrainStore.instance) this.instance = new TrainStore();
        return TrainStore.instance;
    }

    @action
    transLike(isLike, inputText, outputText){
        
        return requestTransLike(isLike, inputText, outputText).then(res => {
            return res
        })
    }

    @action
    getTestCase(){
        return requestGetTestCase().then(result=>{
            return result
        })
    }

    @action
    transOffer(inputText,outputText){
        return requestTransOffer(inputText,outputText).then(res => {
            return res
        })
    }
}

export default TrainStore = TrainStore.getInstance();
