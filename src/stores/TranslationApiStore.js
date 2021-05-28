import { makeAutoObservable, observable, computed, action, flow } from "mobx"
import { requestTranslate } from '../controllers/TranslationApiController'

export class TranslationApiStore {

    constructor() {
        makeAutoObservable(this, {
            requestApiKey: action,
        })
    }

    requestApiKey(name, purpose) {
        requestTranslate(name, purpose).then((res) => {
            return res;
        })
    }
}