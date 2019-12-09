function playGame(playerInput) {
clearMessages();
//computer rule
  let randomNumber = Math.floor(Math.random()*3+1);
  let argComputerMove = getMoveName(randomNumber);
  function getMoveName(argMoveId) {
    if(argMoveId == '1') {
      return 'kamień';
    } else if(argMoveId == '2') {
      return 'papier';
    } else if (argMoveId == '3') {
      return 'nożyce';
    }}
  printMessage('Mój ruch to ' + argComputerMove);
  console.log('Wylosowana liczba to: ' + randomNumber);

//player rule
  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2:papier, 3:nożyce');
  let argPlayerMove = getMoveName(playerInput);
  printMessage('Twój ruch to ' + argPlayerMove);
  console.log('Gracz wpisał: ' + playerInput);

//Results
  console.log('moves:', argComputerMove, argPlayerMove);
  function displyResult(argComputerMove, argPlayerMove) {
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      return('Brawo! Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return('Brawo! Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return('Brawo! Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      return('Remis!');
    } else if (argPlayerMove == 'nieznany ruch') {
      return('brak wyniku');
    } else {
      return('Przykro mi, przegrywasz. Spróbuj szczęścia ponownie');
    }}
    printMessage('wynik: ' + displyResult(argComputerMove, argPlayerMove));

    console.log(PlayerScore, ComputerScore);
    var PlayerScore = 0;
    var ComputerScore = 0;

    function GetResult(PlayerScore, ComputerScore) {
    if (displyResult(argPlayerMove, argComputerMove) == 'Brawo! Ty wygrywasz!') {
      return (PlayerScore++ && ComputerScore);
    } else if (displyResult(argPlayerMove, argComputerMove) == 'Przykro mi, przegrywasz. Spróbuj szczęścia ponownie') {
      return (ComputerScore++ && PlayerScore);
    } else {
      return (PlayerScore && ComputerScore);
      }
    }
    printMessage('Punkty gracza: ' + GetResult(PlayerScore));
    printMessage('Punkty przeciwnika: ' +GetResult(ComputerScore));
  }

    document.getElementById('play-rock').addEventListener('click',function(){
      playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click',function(){
      playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click',function(){
      playGame(3);
    });


    /*wyniki*/
