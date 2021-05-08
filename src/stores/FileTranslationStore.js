import { makeObservable, observable, computed, action, flow } from "mobx"
import React, { createContext } from "react";
class FileTranslationStore {
    @observable originalFiles = [];
    @observable translatedFiles = [];
    @observable fileCount = 0;
    @observable numSelected = 0;
    @observable selected = [];

    static instance = null;

    constructor() {
        makeObservable(this);
        this.context = createContext(this);
    }

    static getInstance() {
        if (!FileTranslationStore.instance) this.instance = new FileTranslationStore();
        return FileTranslationStore.instance
    }

    @action
    uploadFile(fileInfo) {
        this.originalFiles.push(fileInfo);
        this.fileCount++;
    }

    readFileText(file) {

    }
};

export default FileTranslationStore = FileTranslationStore.getInstance();
