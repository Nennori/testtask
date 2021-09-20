function detectFilled(){
  var inputs = document.querySelectorAll('input');

  function detectContent() {
    if (this.value !== '') {
        this.classList.add('input-filled');
    } else {
      this.classList.remove('input-filled');
    }
  }

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    input.addEventListener('keyup', detectContent, false);
  }
}

export {detectFilled};
