import { saveVideoLocal } from './node_modules/video_saving_service/vidio_saving.js'

document.getElementById('send').onclick(SendVideo())

function SendVideo(){
    let file = document.getElementById('file').files[0]
    saveVideoLocal(file, 'base')
}