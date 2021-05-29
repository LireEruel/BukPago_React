import { makeAutoObservable, observable, computed, action, flow } from "mobx"
import requestApiKey from '../controllers/TranslationApiController'

export class TranslationApiStore {

    constructor() {
        makeAutoObservable(this, {
            requestApiKey: action,
        })
    }

    requestApiKey(name, purpose) {
    console.log("스토어")
        requestApiKey(name, purpose).then((res) => {
            console.log("스토어")
            return res;
        })
    }
}