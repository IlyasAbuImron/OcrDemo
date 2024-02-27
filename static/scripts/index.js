import { Screen } from "./_screen.mjs";
import { Dialog } from "./_dialog.mjs";
import {DragAndDrop} from "./_drag-and-drop.mjs";

const dialogParams = {
    modalOverlay: document.getElementById('modal-overlay'),
    loadingModal: document.getElementById('loading-modal'),
    errorModal: document.getElementById('error-modal'),
    loadingCancelButton: document.getElementById('loading-cancel-button'),
    closeErrorModalButton: document.getElementById('close-error-modal-button'),
    errorConfirmButton: document.getElementById('error-confirm-button'),
    addNewFileButton: document.getElementById('add-new-file'),
    uploadInputButton: document.getElementById('upload-input'),
    loadingMessage: document.querySelector('.loading-message'),
    errorMessage: document.querySelector('.error-message')
}

const modal = new Dialog(dialogParams)

const cancelRequest = () => {
    console.log('Cancel request')
}
modal.onClickLoadingCancelButton(cancelRequest)

modal.showErrorMessage('File is corrupted')

modal.hideErrorModal()

const screen1 = new Screen('screen1')
const screen2 = new Screen('screen2')

screen1.show()
screen2.hide()

const dragAndDrop = new DragAndDrop('.app')

dragAndDrop.handleDrop = function (event) {
    event.preventDefault()
    event.stopPropagation()

    const files = event.dataTransfer.files
    for (let i =  0; i < files.length; i++) {
        console.log(files[i].name)
    }

    this.removeDragOverBlock()

    if (files.length > 0) {
        modal.showModalOverlay()
        modal.showLoadingModal()
        modal.updateLoadingMessage()

        setTimeout(() => {
            modal.hideModalOverlay()
            screen2.show()
        }, 4000)
    }
}
