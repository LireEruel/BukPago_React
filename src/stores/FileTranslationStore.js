import { makeAutoObservable, observable, computed, action, flow } from "mobx"

import requestFileTranslate from '../controllers/FileTranslationController'
export class FileTranslationStore {
    originalFiles = [];
    translatedFiles = [];
    fileCount = 0;
    selectedOriginal = [];
    selectedTranslated = [];

    constructor() {
        makeAutoObservable(this, {
            originalFiles: observable,
            translatedFiles: observable,
            fileCount: observable,
            selectedOriginal: observable,
            selectedTranslated: observable,
            uploadFile: action,
            DeleteFiles: action,
            setSelected: action,
            setSelectAll: action,
            translateFiles: action
        });
    }

    findIndex(file) {
        const fileName = file.name;

        return this.originalFiles.findIndex(e => e.name === fileName);
    }

    uploadFile(fileList) {
        for (const file of fileList) {
            const reader = new FileReader();
            reader.readAsText(file);

            reader.onload = (e) => {
                const content = e.target.result;

                let fileInfo = {
                    name: file.name,
                    size: file.size,
                    content: content,
                }

                const index = this.findIndex(file);

                if (index === -1) {
                    this.originalFiles.push(fileInfo)
                    this.fileCount++;
                } else {
                    this.originalFiles[index] = fileInfo;
                }
            }
        }
    }

    DeleteFiles() {
        for (const name of this.selectedOriginal) {
            this.originalFiles = this.originalFiles.filter((file) => file.name !== name)
        }
        this.fileCount = this.originalFiles.length;
        this.selectedOriginal = [];
    }

    setSelected(caller, name) {
        let newSelected = [];

        if (caller === 'original') {
            const selectedIndex = this.selectedOriginal.indexOf(name);

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(this.selectedOriginal, name);
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(this.selectedOriginal.slice(1));
            } else if (selectedIndex === this.selectedOriginal.length - 1) {
                newSelected = newSelected.concat(this.selectedOriginal.slice(0, -1));
            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    this.selectedOriginal.slice(0, selectedIndex),
                    this.selectedOriginal.slice(selectedIndex + 1),
                );
            }

            this.selectedOriginal = [...newSelected]
        } else if (caller === 'translated') {
            const selectedIndex = this.selectedTranslated.indexOf(name);

            if (selectedIndex === -1) {
                newSelected = newSelected.concat(this.selectedTranslated, name);
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(this.selectedTranslated.slice(1));
            } else if (selectedIndex === this.selectedTranslated.length - 1) {
                newSelected = newSelected.concat(this.selectedTranslated.slice(0, -1));
            } else if (selectedIndex > 0) {
                newSelected = newSelected.concat(
                    this.selectedTranslated.slice(0, selectedIndex),
                    this.selectedTranslated.slice(selectedIndex + 1),
                );
            }

            this.selectedTranslated = [...newSelected]
        }
    }

    setSelectAll(caller, event) {
        const newSelected = []
        if (caller === 'original') {
            if (event.target.checked) {
                this.originalFiles.forEach((file) => {
                    newSelected.push(file.name)
                })
            }
            this.selectedOriginal = [...newSelected]
        } else if (caller === 'translated') {
            if (event.target.checked) {
                this.translateFiles.forEach((file) => {
                    newSelected.push(file.name)
                })
            }
            this.selectedTranslated = [...newSelected]
        }
    }

    translateFiles() {
        this.translatedFiles = requestFileTranslate(this.originalFiles);
    }
};
