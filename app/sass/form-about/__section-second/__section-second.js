function checkSecondSectionFilled(){
  let section = document.querySelector('.form-about__section-second')
  section.addEventListener(['keyup'], checkInputs, false)
  section.addEventListener(['change'], checkInputs, false)
}

function checkInputs(){
  let inputs = document.querySelectorAll('.input-second'),
  downloadSection = document.querySelector('.download-section'),
  submit = document.querySelector('.primary-button')
  for(var i = 0;i < inputs.length;i++){
    if(inputs[i].value === "" || !inputs[i].value){
      downloadSection.classList.add('download-section_inactive')
      submit.classList.add('primary-button_disabled')
      submit.setAttribute('disabled', true)
      return
    }
  } 
  downloadSection.classList.remove('download-section_inactive')
  submit.classList.remove('primary-button_disabled')
  submit.removeAttribute('disabled')
}
export {checkSecondSectionFilled}