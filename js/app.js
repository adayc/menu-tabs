

// Declaramos las funciones que se emplearan al cargar la página
// window.onload = function() {
// Declaración de las variables  
var submenu = document.getElementsByClassName('submenu');
for (i = 0;i < submenu.length;i++) {
  submenu[i].addEventListener('click', showMenu);
}
// };


// this hace referencia al elemento al cual le estas dando click en ese momento
function showMenu() {
  // Buscará al primer elemento que tenga la clase itemList dentro del elemento al que le dimos click
  var listMenu = this.getElementsByClassName('itemList')[0];
  // En el caso que tenga la clase hide la removerá y agregara show
  if (listMenu.classList.contains('hide')) {
    listMenu.classList.remove('hide');
    listMenu.classList.add('show');
  } else {
  // En el caso que tenga la clase show la removerá y agregara hide
    listMenu.classList.add('hide');
    listMenu.classList.remove('show');
  }
}