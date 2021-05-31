import { action, makeAutoObservable, observable } from "mobx";
import requestEvaluationLog from "../controllers/AdminPageController";

export class AdminPageStore {
    evaluationLog = [];

    constructor() {
        makeAutoObservable(this, {
            evaluationLog: observable,
            requestEvaluationLog: action,
        });
    }

    async requestEvaluationLog() {
        const res = await requestEvaluationLog();
        this.evaluationLog = res.data.result;
    }
}