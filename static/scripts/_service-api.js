export function getServiceStatus() {
    return fetch('/health')
}

export function performImageProcessing(requestOptions) {
    return fetch('/perform_image', requestOptions)
}