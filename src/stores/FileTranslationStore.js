import { makeAutoObservable, observable, computed, action, flow } from "mobx"
export class FileTranslationStore {
    originalFiles = [];
    translatedFiles = [];
    fileCount = 0;
    selected = [];

    constructor() {
        makeAutoObservable(this, {
            originalFiles: observable,
            translatedFiles: observable,
            fileCount: observable,
            selected: observable,
            uploadFile: action,
            DeleteFiles: action,
            setSelected: action,
            setSelectAll: action,
        });
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

    findIndex(file) {
        const fileName = file.name;

        return this.originalFiles.findIndex(e => e.name === fileName);
    }

    DeleteFiles() {
        for (const name of this.selected) {
            this.originalFiles = this.originalFiles.filter((file) => file.name !== name)
        }
        this.fileCount = this.originalFiles.length;
        this.selected = [];
    }

    setSelected(name) {
        const selectedIndex = this.selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(this.selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(this.selected.slice(1));
        } else if (selectedIndex === this.selected.length - 1) {
            newSelected = newSelected.concat(this.selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                this.selected.slice(0, selectedIndex),
                this.selected.slice(selectedIndex + 1),
            );
        }

        this.selected = [...newSelected]
    }

    setSelectAll(event) {
        const newSelected = []

        if (event.target.checked) {
            this.originalFiles.forEach((file) => {
                newSelected.push(file.name)
            })
        }

        this.selected = [...newSelected]
    }
};
