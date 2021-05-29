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
            translateFiles: action,
            requestFileTranslate: action,
            downloadFiles: action,
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
                    this.originalFiles.push(fileInfo);
                    this.fileCount++;
                } else {
                    this.originalFiles[index] = fileInfo;
                }
            }
        }
    }

    DeleteFiles() {
        for (const name of this.selectedOriginal) {
            this.originalFiles = this.originalFiles.filter((file) => file.name !== name);
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
        const newSelected = [];

        if (caller === 'original') {
            if (event.target.checked) {
                this.originalFiles.forEach((file) => {
                    newSelected.push(file.name)
                })
            }
            this.selectedOriginal = [...newSelected]
        } else if (caller === 'translated') {
            if (event.target.checked) {
                this.translatedFiles.forEach((file) => {
                    newSelected.push(file.name)
                })
            }
            this.selectedTranslated = [...newSelected]
        }
    }

    async requestFileTranslate() {
        const res = await requestFileTranslate(this.originalFiles);
        if (res === null) {
            return null;
        } else {
            const translatedFileArr = res.data.result;
            if (Array.isArray(translatedFileArr)) {
                const tmpArr = [];

                for (const translatedFileInfo of translatedFileArr) {
                    let file = new File([translatedFileInfo.content], translatedFileInfo.name, { type: 'text/plain' });
                    let fileInfo = {
                        name: translatedFileInfo.name,
                        size: file.size,
                        content: translatedFileInfo.content,
                    };
                    tmpArr.push(fileInfo);
                }
                this.translatedFiles = tmpArr;
            }
            return res;
        }
    }

    downloadFiles() {
        for (const name of this.selectedTranslated) {
            const fileInfo = this.translatedFiles.find((value) => value.name === name)

            let file = new File([fileInfo.content], fileInfo.name, { type: 'text/plain' })
            const objURL = window.URL.createObjectURL(file);

            // 이전에 생성된 메모리 해제
            if (window.__Xr_objURL_forCreatingFile__) {
                window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
            }
            window.__Xr_objURL_forCreatingFile__ = objURL;

            var a = document.createElement('a');
            a.download = fileInfo.name;
            a.href = objURL;
            a.click();
        }
    }
};
