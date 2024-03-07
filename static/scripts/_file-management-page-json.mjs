export class FileManagementPageJson {
    constructor() {
        this.documentText = document.getElementById('document-text')
    }
    handleFileJsonInfo(file) {
        const fileItem = file[0]
        this.documentText.textContent = fileItem.name
    }
}