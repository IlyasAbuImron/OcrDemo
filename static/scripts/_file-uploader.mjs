export class FileUploader {
    constructor() {
        this.uploadFile = null
        this.addNewFileButton = document.getElementById('add-new-file')
        this.uploadInputButton = document.getElementById('upload-input')

        this.addNewFileButton.addEventListener('click', (event) => this.showUploadModal(event))
        this.addNewFileButton.addEventListener('change', (event) => this.addNewFile(event))
    }
    addNewFile(event) {
        const files = event.target.files
        this.uploadFile(files)
    }
    showUploadModal() {
        this.uploadInputButton.click()
    }
}