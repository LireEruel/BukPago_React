import { makeAutoObservable, observable, computed, action, flow } from "mobx"
export class FileTranslationStore {
    originalFiles = [];
    translatedFiles = [];
    fileCount = 0;

    constructor() {
        makeAutoObservable(this, {
            originalFiles: observable,
            translatedFiles: observable,
            fileCount: observable,
            uploadFile: action
        });
    }

    uploadFile(files) {
        console.log(files)

        for (const file of files) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;

                let fileInfo = {
                    name: file.name,
                    size: file.size,
                    content: content,
                }

                this.originalFiles.push(fileInfo)
                this.fileCount++;
            }
            reader.readAsText(file);
        }


        console.log(this.originalFiles)
    }
};
