export class DragAndDrop {
    dragOverBlock = `
    <div class="is-dragover">
        <div class="drop-file">
            <img class="drop-file-icon" src="static/images/🧬document.add.svg" alt="Add document icon"/>
            <div>Drop your file here</div>
        </div>
        <div class="supported-files">Supported files: PDF, JPG, PNG</div>
    </div>
`

    constructor(id) {
        this.dropZone = document.querySelector(id)

        this.dropZone.addEventListener('dragover', (event) => this.handleDragOver(event))
        this.dropZone.addEventListener('dragleave', (event) => this.handleDragleave(event))
        this.dropZone.addEventListener('drop', (event) => this.handleDrop(event))
    }

    addDragOverBlock() {
        const dragOverElement = this.dropZone.querySelector('.is-dragover')
        if (!dragOverElement) {
            this.dropZone.insertAdjacentHTML('beforeend', this.dragOverBlock)
        }
    }

    removeDragOverBlock() {
        const dragOverElement = this.dropZone.querySelector('.is-dragover')
        if (dragOverElement) {
            this.dropZone.removeChild(dragOverElement)
        }
    }

    handleDragOver(event) {
        event.preventDefault()
        event.stopPropagation()
        this.addDragOverBlock()
    }

    handleDragleave(event) {
        if (event.target.classList.contains('is-dragover')) {
            this.removeDragOverBlock()
        }
    }

    handleDrop(event) {
        event.preventDefault()
        event.stopPropagation()

        const files = event.dataTransfer.files
        for (let i =  0; i < files.length; i++) {
            console.log(files[i].name)
        }

        this.removeDragOverBlock()
    }
}
