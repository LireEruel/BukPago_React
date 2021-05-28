import { makeAutoObservable, observable, computed, action, flow } from "mobx"
import requestApiKey from '../controllers/TranslationApiController'

export class TranslationApiStore {

    constructor() {
        makeAutoObservable(this, {
            requestApiKey: action,
        })
    }

    requestApiKey(name, purpose) {
        requestApiKey(name, purpose).then((res) => {
            return res;
        })
    }
}