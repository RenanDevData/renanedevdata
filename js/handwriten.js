const textToWrite = document.querySelector('#me');
const textP = document.querySelector('#aboutMe');


function writeAndEraseText(el) {
  const originalText = el.innerHTML;
  const textArray = originalText.split('');
  let currentIndex = 0;

  el.innerHTML = '';


  function typeLetter() {
    if (currentIndex < textArray.length) {
      el.innerHTML += textArray[currentIndex];
      currentIndex++;
      setTimeout(typeLetter, 75);
    } else {
      setTimeout(eraseLetter, 1000); // pausa antes de apagar
    }
  }

  function eraseLetter() {
    if (currentIndex > 0) {
      el.innerHTML = el.innerHTML.slice(0, -1);
      currentIndex--;
      setTimeout(eraseLetter, 50);
    } else {
      setTimeout(typeLetter, 500); // pausa antes de recomeçar
    }
  }

  typeLetter(); // inicia
}



function writeOnTheScreen(text){
  const textArrayAbout =  text.innerHTML.split('')
  textP.innerHTML = ''
  textArrayAbout.forEach((letter, index) => {
    setTimeout(() => {
      textP.innerHTML += letter
    }, index * 75);
  })
}



writeAndEraseText(textToWrite);
writeOnTheScreen(textP)
