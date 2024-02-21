export class Dialog {
	constructor(dialogParams) {
		this.modalOverlay = dialogParams.modalOverlay
		this.loadingModal = dialogParams.loadingModal
		this.errorModal = dialogParams.errorModal
		this.loadingCancelButton = dialogParams.loadingCancelButton
		this.closeErrorModalButton = dialogParams.closeErrorModalButton
		this.errorConfirmButton = dialogParams.errorConfirmButton
		this.addNewFileButton = dialogParams.addNewFileButton
		this.uploadInputButton = dialogParams.uploadInputButton
		this.loadingMessage = dialogParams.loadingMessage
		this.errorMessage = dialogParams.errorMessage

		this.loadingCancelButton.addEventListener('click', this.hideModalOverlay.bind(this))
		this.closeErrorModalButton.addEventListener('click', this.hideModalOverlay.bind(this))
		this.errorConfirmButton.addEventListener('click', this.hideModalOverlay.bind(this))

		this.addNewFileButton.addEventListener('click', this.showUploadModal.bind(this))
		this.addNewFileButton.addEventListener('change', (event) => {
			if (event.target.files.length) {
				this.showModalOverlay()
				this.showLoadingModal()
				this.updateLoadingMessage()

				setTimeout(() => {
					this.hideLoadingModal()
					this.showErrorModal()
				}, 4000)
			}
		})

	}

	showModalOverlay() {
		this.modalOverlay.classList.add('modal--show')
	}

	showUploadModal() {
		this.uploadInputButton.click()
	}

	onClickLoadingCancelButton(cancelRequest) {
		this.loadingCancelButton.addEventListener('click', cancelRequest)
	}

	updateLoadingMessage() {
		this.loadingMessage.textContent = 'Loading...'

		setTimeout(() => {
			this.loadingMessage.textContent = 'Recognition in progress...'
		}, 2000)
	}

	showErrorMessage(message) {
		this.errorMessage.textContent = message
	}

	hideModalOverlay() {
		this.modalOverlay.classList.add('modal--hide')
	}

	showLoadingModal() {
		this.loadingModal.classList.remove('modal--hide')
	}

	hideLoadingModal() {
		this.loadingModal.classList.add('modal--hide')
	}

	showErrorModal() {
		this.errorModal.classList.remove('modal--hide')
	}

	hideErrorModal() {
		this.errorModal.classList.add('modal--hide')
	}
}
