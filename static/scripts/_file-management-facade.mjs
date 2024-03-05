import {FileManagementPageImage} from "./_file-management-page-image.mjs"
import {FileManagementPageJson} from "./_file-management-page-json.mjs"

export class FileManagementFacade {
    constructor() {
        this.imageManagement = new FileManagementPageImage()
        this.jsonManagement = new FileManagementPageJson()
    }
    handleFileInfo(file) {
        this.imageManagement.handleFileImage(file)
        this.jsonManagement.handleFileJsonInfo(file)
    }
}