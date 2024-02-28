export class Dialog {
	dialogParams = {
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
	constructor() {
		this.modalOverlay = this.dialogParams.modalOverlay
		this.loadingModal = this.dialogParams.loadingModal
		this.errorModal = this.dialogParams.errorModal
		this.loadingCancelButton = this.dialogParams.loadingCancelButton
		this.closeErrorModalButton = this.dialogParams.closeErrorModalButton
		this.errorConfirmButton = this.dialogParams.errorConfirmButton
		this.addNewFileButton = this.dialogParams.addNewFileButton
		this.uploadInputButton = this.dialogParams.uploadInputButton
		this.loadingMessage = this.dialogParams.loadingMessage
		this.errorMessage = this.dialogParams.errorMessage

		this.loadingCancelButton.addEventListener('click', this.hideModalOverlay.bind(this))
		this.closeErrorModalButton.addEventListener('click', this.hideModalOverlay.bind(this))
		this.errorConfirmButton.addEventListener('click', this.hideModalOverlay.bind(this))

		this.addNewFileButton.addEventListener('click', this.showUploadModal.bind(this))
		this.addNewFileButton.addEventListener('change', (event) => this.addNewFile(event))

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

	addNewFile(event) {}

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
