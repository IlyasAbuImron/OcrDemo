import {Screen} from "./_screen.mjs"
import {UploadFacade} from "./_uploadFasade.mjs"
import {Dialog} from "./_dialog.mjs"
import {FileManagementFacade} from "./_file-management-facade.mjs"

const uploadFacade = new UploadFacade()
const modal = new Dialog()
const fileManagementFacade = new FileManagementFacade()

const cancelRequest = () => {
    console.log('Cancel request')
}

const handleFirstScreenModal = () => {
    modal.showModalOverlay()
    modal.hideAddNewFileModal()
    modal.showLoadingModal()
    modal.updateLoadingMessage()

    setTimeout(() => {
        modal.hideModalOverlay()
        screen2.show()
    }, 4000)
}

const handleSecondScreenModal = () => {
    modal.showModalOverlay()
    modal.hideAddNewFileModal()
    modal.showLoadingModal()
    modal.updateLoadingMessage()

    setTimeout(() => {
        modal.hideModalOverlay()
    }, 4000)
}

const recognizeButton = document.querySelector('.recognize-button')

recognizeButton.addEventListener('click', async (event) => {
    handleSecondScreenModal()
    try {
        const image = fileManagementFacade.imageManagement.image
        const worker = await Tesseract.createWorker('rus')
        const { data: { text } } = await worker.recognize(image)

        const documentTextElement = fileManagementFacade.jsonManagement.documentText
        documentTextElement.textContent = text
        await worker.terminate()
    } catch (error) {
        console.error('Ошибка распознавания:', error)
    }
})
const handleFileUpload = (file) => {
    if (file.length) {
        fileManagementFacade.handleFileInfo(file)
        handleFirstScreenModal()
    }
}

uploadFacade.linkUploadFileToHandlers(handleFileUpload)

modal.onClickLoadingCancelButton(cancelRequest)

modal.showErrorMessage('File is corrupted')

modal.hideLoadingModal()

modal.hideErrorModal()

const screen1 = new Screen('screen1')
const screen2 = new Screen('screen2')

screen1.show()
screen2.hide()
