let buttons = document.querySelectorAll('.rating-button');
const submitBnt = document.getElementById('submit-btn');
const ratingScreen = document.getElementById('rating-screen');
const thanks = document.getElementById('thanks')

// Adiciona um evento de clique a cada botão
buttons.forEach(function (button) {
  button.onclick = function (event) {
    
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
    });

    // Adiciona a classe 'active' ao botão clicado
    this.classList.add('active');
  };
});

submitBnt.addEventListener('click', function(){
  ratingScreen.style.display = 'none';
  thanks.style.display = 'block';
  

})
/*

*/
