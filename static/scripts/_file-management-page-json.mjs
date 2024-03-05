export class FileManagementPageJson {
    constructor() {
        this.documentText = document.getElementById('document-text')
    }
    handleFileJsonInfo(file) {
        console.log(file)
        const fileItem = file[0]
        this.documentText.textContent = fileItem.name

    }
}