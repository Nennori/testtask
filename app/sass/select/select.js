function select() {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  })

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  })

  function selectToggle() {
    let icon = this.querySelector('.select__icon')
    icon.classList.toggle('select__icon-active')
    this.parentElement.classList.toggle('select-active')
    this.classList.toggle('select__header-active')
  }

  function selectChoose(){
    let text = this.innerText,
    select = this.closest('.select'),
    currentText = select.querySelector('.select__current')
    currentText.innerText = text;
    select.classList.remove('select-active');
    this.classList.toggle('select__header-active')
  }
}
export {select}