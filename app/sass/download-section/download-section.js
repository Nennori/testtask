function download(){
  let dropArea = document.querySelector('.download-section__field')
  let input = document.querySelector('.input__file')
  dropArea.addEventListener(['dragenter', 'dragover', 'dragleave', 'drop'], preventDefaults, false)
  dropArea.addEventListener('drop', function(e) {
    let files = e.originalEvent.dataTransfer.files;
    handleFiles(files)
    }
  )
  input.addEventListener('change', () => {
    handleFiles(input.files)
  })
}

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function handleFiles(files){
  files = Array.from(files)
  files.forEach(previewFile)
  files.forEach(uploadFile)
}

function uploadFile(file){
  let url = "http://localhost:8080/api/files"
  var xhr = new XMLHttpRequest()
  var formData = new FormData()
  xhr.open('POST', url, true)
  formData.append('file[]', file, file.name)
  xhr.send(formData)
}

function previewFile(file) {
  console.log(file.name)
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
  let preview = document.createElement('div')
  preview.classList.add('download-section__file')
  var name = document.createElement("div")
  var info = document.createElement("div")
  var trash = document.createElement("div")
  name.innerHTML = file.name
  info.innerHTML = file.type.slice(file.type.indexOf('/')+1).toUpperCase() + '  ' + (file.size/1024/1024).toFixed(1) + 'mb'
  name.classList.add('download-section__title-name')
  info.classList.add('download-section__title-info')
  trash.classList.add('download-section__trash')
  trash.addEventListener('click', () => {
    trash.parentElement.remove()
  })
  preview.appendChild(name)
  preview.appendChild(info)
  preview.appendChild(trash)
  if(file.type.startsWith('image/')){
    let img = document.createElement('img')
    img.src = reader.result
    img.classList.add('download-section__image')
    preview.classList.add('download-section__file-image')
    preview.appendChild(img)
  }
    document.querySelector('.download-section__upload').appendChild(preview)
  }
}

export {download, handleFiles}