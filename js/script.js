let randomNumber = Math.floor(Math.random()*3+1);
console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber==1) {
  computerMove = 'kamień';
printMessage('Mój ruch to: ' + computerMove);
}

else if(randomNumber==2) {
  computerMove = 'papier';
printMessage('Mój ruch to: ' + computerMove);
}

else if(randomNumber==3) {
  computerMove = 'nożyce';
printMessage('Mój ruch to: ' + computerMove);
}
