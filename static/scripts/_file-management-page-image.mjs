export class FileManagementPageImage {
    constructor() {
        this.documentName = document.getElementById('document-name')
        this.image = document.getElementById('document-image')
    }
    handleFileImage(file) {
        console.log(file)
        const fileItem = file[0]
        this.documentName.textContent = fileItem.name
        this.image.src = URL.createObjectURL(fileItem)
    }
}