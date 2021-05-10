import { FileTranslationStore } from './FileTranslationStore';

export class RootStore {
    FileTranslationStore;

    constructor() {
        this.FileTranslationStore = new FileTranslationStore();
    }
}