export function saveVideoLocal(file, keyName){
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
        localStorage.setItem(keyName, reader.result)
    }
}
export function deleteVideoLocal(keyName){
    localStorage.removeItem(keyName)
}
export function getVideoLocal(keyName){
    return localStorage[keyName]
}