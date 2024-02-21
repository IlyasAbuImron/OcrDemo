import { Screen } from "./_screen.mjs";
import { Dialog } from "./_dialog.mjs";

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

const dropZone = document.querySelector('.screen')

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('is-dragover')
})

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('is-dragover')
})

dropZone.addEventListener('dragend', () => {
    dropZone.classList.remove('is-dragover')
})

dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    e.stopPropagation()
    dropZone.classList.remove('is-dragover')

    const files = e.dataTransfer.files
    for (let i =  0; i < files.length; i++) {
        console.log(files[i].name)
    }
})
