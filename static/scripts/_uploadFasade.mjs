import { Dialog } from "./_dialog.mjs"
import { DragAndDrop } from "./_drag-and-drop.mjs"

export class UploadFacade  {
    constructor() {
        this.modal = new Dialog()
        this.dragAndDrop = new DragAndDrop()
    }
    addNewFileByButton(uploadFile) {
        this.modal.addNewFile = (event) => {
            uploadFile(event.target.files)
        }
    }
    handleDrop(uploadFile) {
        this.dragAndDrop.handleDrop = (event) => {
            event.preventDefault()
            event.stopPropagation()

            const files = event.dataTransfer.files
            uploadFile(files)
            for (let i =  0; i < files.length; i++) {
                console.log(files[i].name)
            }

            this.dragAndDrop.removeDragOverBlock()
        }
    }
}