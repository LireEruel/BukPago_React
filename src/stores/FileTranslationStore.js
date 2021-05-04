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
    uploadFile(files) {
        const originalFiles = [];

        for (const file of files) {
            const fileInfo = this.extractFileInfo(file);
            this.fileCount++;
            originalFiles.push(fileInfo);
        }

        this.originalFiles = {
            ...this.originalFiles,
            originalFiles
        }
    }

    extractFileInfo(file) {
        const fileInfo = {
            name: file.name,
            size: file.size
        }

        return fileInfo;
    }
};

export default FileTranslationStore = FileTranslationStore.getInstance();
