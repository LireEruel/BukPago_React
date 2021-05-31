import { FileTranslationStore } from './FileTranslationStore';
import { TranslationApiStore } from './TranslationApiStore';
import { AdminPageStore } from './AdminPageStore'
export class RootStore {
    FileTranslationStore;
    TranslationApiStore;
    AdminPageStore;

    constructor() {
        this.FileTranslationStore = new FileTranslationStore();
        this.TranslationApiStore = new TranslationApiStore();
        this.AdminPageStore = new AdminPageStore();
    }
}