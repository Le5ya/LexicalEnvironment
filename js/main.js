'use strict';
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
// alert('РеКУРСИя')
function botResponse() {
  let x = randomInteger(1, 100);
  function guessTheNumber() {
      let userNum = +prompt('Угадай число от 1 до 100');
    if(userNum === 0) {
      alert('Игра окончена');
    } else if (userNum === x) {
      alert('Поздравляю, Вы угадали!!!');
    }else if(userNum !== x ) {
      botResponseNo();
      guessTheNumber();
    } 
    function botResponseNo() {
          if(userNum > x) {
            alert('Загаданное число меньше');
          } else if (userNum < x) {
            alert('Загаданное число больше');
          } else if (isNaN(userNum)) {
            alert('Введи число!',);
          };
        }  
  }
  return guessTheNumber; 
}
let f = botResponse(); f();
 