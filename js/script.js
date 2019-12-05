//computer rule
let randomNumber = Math.floor(Math.random()*3+1);

console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';

if(randomNumber==1) {
  computerMove = 'kamień';
printMessage('Mój ruch to: ' + computerMove);
} else if(randomNumber==2) {
  computerMove = 'papier';
printMessage('Mój ruch to: ' + computerMove);
} else if(randomNumber==3) {
  computerMove = 'nożyce';
printMessage('Mój ruch to: ' + computerMove);
}

//player rule
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2:papier, 3:nożyce');

console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
  printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == '2') {
  playerMove = 'papier';
  printMessage('Twój ruch to: ' + playerMove);
} else if (playerInput == '3') {
  playerMove = 'nożyce';
  printMessage('Twój ruch to: ' + playerMove);
} else {
  printMessage('nieznany ruch');
}

//Result
if(computerMove == 'kamień' && playerMove == 'papier') {
  printMessage('Brawo! Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Brawo! Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Brawo! Ty wygrywasz!');
} else if (computerMove == playerMove) {
  printMessage('Remis!');
} else if (playerMove == 'nieznany ruch') {
  printMessage('brak wyniku');
} else {
  printMessage('Przykro mi, przegrywasz. Spróbuj szczęścia ponownie');
}
