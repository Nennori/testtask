import {checkFirstSectionFilled} from './__section-first/__section-first.js'
import {checkSecondSectionFilled} from './__section-second/__section-second.js'
function validate(){
  var form = document.querySelector('.form-about')
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    removeValidation(form)
    let checkInput = checkInputs(), checkSel = checkSelect()
    if(checkInput && checkSel){
      console.log('success')
      sendData()
      return true
    }
    return false
  })
}

function checkInputs(){
  let inputs = document.querySelectorAll('.input')
  let errors = 0

  for (var i = 0; i < inputs.length-1; i++) {
    inputs[i].classList.remove('input_incorrect')
    if(!inputs[i].value){
      createError(inputs[i], "Empty field")
      inputs[i].classList.add('input_incorrect')
      errors = errors + 1
    } else if(inputs[i].value.match(/\d/)) {
      createError(inputs[i], "Field must be a string")
      inputs[i].classList.add('input_incorrect')
      errors = errors + 1
    }
  }
  inputs[i].classList.remove('input_incorrect')
  if(!inputs[i].value){
    createError(inputs[i], "Empty field")
    inputs[i].classList.toggle('input_incorrect')
    errors = errors + 1
  }
  if(errors !== 0){
    return false
  }
  return true
}

function checkSelect(){
  let select = document.querySelector('.select__header')
  let currentText = select.innerText
  let selects = document.querySelectorAll('.select__item')
  select.classList.remove('input_incorrect')
  for(var i = 0; i < selects.length; i++) {
    var item = selects[i]
    console.log(item.innerText)
    if(currentText === item.innerText){
      return true
    }
  }
  createError(select.parentNode, "Empty field")
  inputs[i].classList.add('input_incorrect')
  return false
}

function createError(node, message){
  var error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = message
  node.after(error)
}

function removeValidation(node) {
  var errors = node.querySelectorAll('.error')
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

function sendData(){
  let select = document.querySelector('.select__header')
  var formData = new FormData(document.forms.about);
  formData.append('gender', select.innerText.toLowerCase())
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8080/api/user");
  xhr.send(formData);
}

export {validate, checkFirstSectionFilled, checkSecondSectionFilled}