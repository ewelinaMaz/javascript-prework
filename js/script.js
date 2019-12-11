{
  var PlayerScore = 0;
  var ComputerScore = 0;

  function playGame(playerInput) {
    clearMessages();
    //computer rule
    let randomNumber = Math.floor(Math.random() * 3 + 1),
    argComputerMove = getMoveName(randomNumber);

    function getMoveName(argMoveId) {
      if (argMoveId == '1') {
        return 'kamień';
      } else if (argMoveId == '2') {
        return 'papier';
      } else if (argMoveId == '3') {
        return 'nożyce';
      }
    }
    printMessage('Mój ruch to ' + argComputerMove);
    console.log('Wylosowana liczba to: ' + randomNumber);

    //player rule
    let argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to ' + argPlayerMove);
    console.log('Gracz wpisał: ' + playerInput);

    //Results
    console.log('moves:', argComputerMove, argPlayerMove);
      function displyResult(argComputerMove, argPlayerMove) {
      if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        PlayerScore++;
        return ('Brawo! Ty wygrywasz!');
      } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        PlayerScore++;
        return ('Brawo! Ty wygrywasz!');
      } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        PlayerScore++;
        return ('Brawo! Ty wygrywasz!');
      } else if (argComputerMove == argPlayerMove) {
        return ('Remis!');
      } else if (argPlayerMove == 'nieznany ruch') {
        return ('brak wyniku');
      } else {
        ComputerScore++;
        return ('Przykro mi, przegrywasz. Spróbuj szczęścia ponownie');
      }
    }
    printMessage('wynik: ' + displyResult(argComputerMove, argPlayerMove));
    GetResult();
  }
  function GetResult() {
    document.getElementById('result').innerHTML = 'punkty gracza: ' + PlayerScore + ' | ' + 'punkty przeciwnika: ' + ComputerScore;
  }
  document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
  });
}
