export class JsonDocumentHandler {
    constructor() {
        this.documentText = document.getElementById('document-text')
        this.saveButton = document.getElementById('save-button')
        this.copyButton = document.getElementById('copy-button')
        this.textNotFound = document.querySelector('.document-text-empty')

        this.saveButton.addEventListener('click', () => this.saveText())
        this.copyButton.addEventListener('click', () => this.copyText())
    }
    handleFileJsonInfo(file) {
        this.resetTextNotFoundWarning()
        // const fileItem = file[0]
        // this.documentText.textContent = fileItem.name
    }
    showTextNotFoundWarning() {
        this.textNotFound.classList.add('show-warning')
    }
    resetTextNotFoundWarning() {
        this.textNotFound.classList.remove('show-warning')
    }
    saveText() {
        const text = this.documentText.textContent
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = "savedText.txt"
        link.click()
    }

    copyText() {
        const text = this.documentText.textContent
        const textarea = document.createElement("textarea")
        textarea.textContent = text
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
        alert('Текст скопирован в буфер обмена!')
    }
}