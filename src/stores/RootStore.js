import { FileTranslationStore } from './FileTranslationStore';
import { TranslationApiStore } from './TranslationApiStore';

export class RootStore {
    FileTranslationStore;
    TranslationApiStore;

    constructor() {
        this.FileTranslationStore = new FileTranslationStore();
        this.TranslationApiStore = new TranslationApiStore();
    }
}