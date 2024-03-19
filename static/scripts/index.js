import {Screen} from "./_screen.mjs"
import {UploadFacade} from "./_uploadFasade.mjs"
import {Dialog} from "./_dialog.mjs"
import JSONFormatter from "./json-formatter.js"
import {DocumentManagementFacade} from "./_document-management-facade.mjs"
import {getServiceStatus, performImageProcessing} from "./_service-api.js"

const uploadFacade = new UploadFacade()
const modal = new Dialog()
const documentManagementFacade = new DocumentManagementFacade()

const cancelRequest = () => {
    console.log('Cancel request')
}

const recognizeButton = document.querySelector('.recognize-button')

recognizeButton.addEventListener('click', (event) => {
    modal.isShowModal(true)

        const formData = new FormData()
        formData.append('image_base64', documentManagementFacade.imageManagement.image)

        const requestOptions = {
            method: 'POST',
            body: formData
        }

        performImageProcessing(requestOptions)
            .then(response => response.json())
            .then(data => {
                modal.isShowModal(false)
                if (data.text) {
                    const formatter = new JSONFormatter(data)
                    const documentTextElement = documentManagementFacade.jsonManagement.documentText
                    documentTextElement.appendChild(formatter.render())
                } else {
                    documentManagementFacade.jsonManagement.showTextNotFoundWarning()
                }
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error)
                modal.showErrorModal(error.message)
            })

    // Mock data
    // fetch('https://dummyjson.com/posts/10')
    //     .then(response => response.json())
    //     .then(data => {
    //         modal.isShowModal(false)
    //         const formatter = new JSONFormatter(data)
    //         const documentTextElement = documentManagementFacade.jsonManagement.documentText
    //         documentTextElement.appendChild(formatter.render())
    //     })
    //     .catch(error => {
    //         console.error('Ошибка при получении данных:', error.message)
    //         modal.showErrorModal(error.message)
    //     })

    // Tesseract OCR
    // try {
    //     const image = fileManagementFacade.imageManagement.image
    //     const worker = await Tesseract.createWorker('rus')
    //     const { data: { text } } = await worker.recognize(image)
    //
    //     const documentTextElement = fileManagementFacade.jsonManagement.documentText
    //     documentTextElement.textContent = text
    //     await worker.terminate()
    // } catch (error) {
    //     console.error('Ошибка распознавания:', error)
    // }
})

const handleFileUpload = (file) => {
    if (file.length) {
        modal.isShowModal(true)
        documentManagementFacade.handleFileInfo(file)
        setTimeout(() => {
            modal.isShowModal(false)
            screen2.show()
        }, 4000)
    }
}

uploadFacade.linkUploadFileToHandlers(handleFileUpload)

modal.onClickLoadingCancelButton(cancelRequest)

const screen1 = new Screen('screen1')
const screen2 = new Screen('screen2')

screen1.show()
screen2.hide()
// screen2.show()

const backToScreen1Button = document.querySelector('.navigation-back-button')
backToScreen1Button.addEventListener('click', (event) => {
    if (event.target) {
        screen2.hide()
        screen1.show()
    }
})

const checkServiceStatus = () => {
    const statusIndicators = document.querySelectorAll('.status-indicator')
    getServiceStatus()
        .then(response => {
            statusIndicators.forEach(indicator => {
                if (response.ok) {
                    indicator.style.backgroundColor = 'green'
                } else {
                    indicator.style.backgroundColor = '#c80202'
                }
            })
        })
        .catch(error => {
            statusIndicators.forEach(indicator => {
                indicator.style.backgroundColor = '#c80202'
            })
            console.error('Ошибка:', error)
        })
}

setInterval(() => {
    checkServiceStatus()
}, 3000)
