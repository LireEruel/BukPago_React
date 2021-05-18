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

    uploadFile(fileList) {
        console.log(fileList)

        for (const file of fileList) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;

                let fileInfo = {
                    name: file.name,
                    size: file.size,
                    content: content,
                }

                const index = this.isExist(file);

                if (index === -1) {
                    this.originalFiles.push(fileInfo)
                    this.fileCount++;
                } else {
                    this.originalFiles[index] = fileInfo;
                }

            }
            reader.readAsText(file);
        }
    }

    isExist(file) {
        const fileName = file.name;

        return this.originalFiles.findIndex(e => e.name === fileName);
    }
};
