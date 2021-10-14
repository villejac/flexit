let menuBtn = document.getElementById('menu-btn')
let closeBtn = document.getElementById('close-btn')
let menuContainer = document.getElementById('menu-container')

// Sivuston menun avaaminen ja sulkeminen
menuBtn.onclick = function() {
    menuContainer.classList.toggle('active');
    closeBtn.classList.toggle('animate2');
}

closeBtn.onclick = function() {
    menuContainer.classList.toggle('active');

    setTimeout(
        function() {
            closeBtn.classList.toggle('animate2');
        }, 100);
    
}

// Sheikataan sivun latautuessa menu, että se huomataan
  window.onload = function shakeButton() {
    setTimeout(
        function() {
            menuBtn.classList.add('shake-this');
        }, 500);
    
  };

// Dynaaminen footer, jotta päivittäminen käy kerralla kaikille sivuille
  let footer = document.querySelector('footer');

  let divBox = document.createElement('div');
  let textElement = document.createElement('p');

  divBox.classList.add("footer-text-box");

  textElement.innerHTML = "Hierontapalvelut FlexIt | Hierojantie 1 - Seinäjoki | hieroja(at)flexit.fi";
  divBox.appendChild(textElement);
  footer.appendChild(divBox);