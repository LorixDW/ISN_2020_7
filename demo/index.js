let btn = document.getElementById("send")
let reader = new FileReader()
VideoListUpdate()

function Send(){
    let file = document.getElementById('file').files[0]
    reader.readAsDataURL(file)
    reader.onload = function () {
        localStorage.setItem('video', reader.result);
        localStorage.setItem('name', file.name)
    }
    setTimeout(VideoListUpdate, 400)
}

//one video
function VideoListUpdate() {
    let list = document.querySelector('#video')
    let player = document.querySelector('#view')
    console.log(localStorage.key(1))
    list.innerHTML = '';
    player.innerHTML = '';
    if(localStorage.key(1) !== null){
        let p = document.createElement("p")
        p.innerText = localStorage.getItem(localStorage.key(0))
        let view = document.createElement("button")
        view.innerText = "View"
        view.addEventListener("click", function(e){
            player.innerHTML = ""
            let v = document.createElement("video")
            v.controls = true;
            v.src = localStorage.getItem("video")
            v.width = 400
            player.append(v)
        })
        let del = document.createElement("button")
        del.innerText = "Delete"
        del.addEventListener("click", function(e){
            player.innerHTML = ""
            localStorage.removeItem("video")
            VideoListUpdate()
        })
        list.append(p, view, del)
    }
    
}

//many videos
// function VideoListUpdate() {
//     let list = document.querySelector('#list')
//     list.innerHTML = ''
//     let list_ = []
//     for(let i = 0; i < localStorage.length; i += 1){
//         let p = document.createElement("p")
//         let view = document.createElement("button")
//         let del = document.createElement("button")
//         let li = document.createElement("li")
//         p.innerText = localStorage.key(i)
//         view.innerText = "View"
//         del.innerText = "Delete"
//         li.append(p, view, del)
//         list.appendChild(li)
//     }
// }