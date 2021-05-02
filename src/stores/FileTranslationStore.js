import React from "react";
import ReactDOM from "react-dom";
import { makeObservable, observable, computed, action, flow } from "mobx"

class FileTranslationStore {
    @observable originalFile = [];
    @observable translatedFile = [];
    @observable rowCount = "0";
    @observable numSelected = "0";

    constructor() {
        makeObservable(this);
    }

    @action
    set setRowCount(newRowCount) {
        this.rowCount = newRowCount;
    }

    @action
    set setNumSelected(newNumSelected) {
        this.numSelected = newNumSelected;
    }

    @computed
    get originalFile() {
        return this.originalFile;
    }

    @computed
    get translatedFile() {
        return this.translatedFile;
    }

    @computed
    get rowCount() {
        return this.rowCount;
    }

    @computed
    get numSelected() {
        return this.numSelected;
    }
}