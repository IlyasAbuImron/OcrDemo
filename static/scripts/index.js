import { Screen } from "./_screen.mjs";
import { UploadFacade } from "./_uploadFasade.mjs";
import { Dialog } from "./_dialog.mjs";

const uploadFacade = new UploadFacade()
const modal = new Dialog()

const cancelRequest = () => {
    console.log('Cancel request')
}

const handleFileUpload = (file) => {
    if (file.length) {
        modal.showModalOverlay()
        modal.showLoadingModal()
        modal.updateLoadingMessage()

        setTimeout(() => {
            modal.hideModalOverlay()
            screen2.show()
        }, 4000)
    }
}
uploadFacade.linkUploadFileToHandlers(handleFileUpload)

modal.onClickLoadingCancelButton(cancelRequest)

modal.showErrorMessage('File is corrupted')

modal.hideErrorModal()

const screen1 = new Screen('screen1')
const screen2 = new Screen('screen2')

screen1.show()
screen2.hide()
