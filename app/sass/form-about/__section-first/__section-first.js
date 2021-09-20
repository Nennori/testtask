function checkFirstSectionFilled(){
  let section = document.querySelector('.form-about__section-first')
  section.addEventListener(['keyup'], checkInputs.bind(section))
}

function checkInputs(){
  let input = document.querySelector('.input-first'),
  downloadSection = document.querySelector('.download-section'),
  select = document.querySelector('.select'),
  secondSection = document.querySelector('.form-about__section-second'),
  submit = document.querySelector('.primary-button')
  console.log(select.innerText)
  if(input.value === ""){
    downloadSection.classList.add('download-section-inactive')
    secondSection.classList.add('form-about__section-second_inactive')
    submit.classList.add('primary-button_disabled')
    submit.setAttribute('disabled', true)
  }
  else{
    secondSection.classList.remove('form-about__section-second_inactive')
  }
}
export {checkFirstSectionFilled}