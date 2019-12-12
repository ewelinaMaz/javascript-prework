{
  let PlayerScore = 0;
  let ComputerScore = 0;

  let playGame = function(playerInput) {
    clearMessages();
    //Rules for computer and player
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    const getMoveName = function(argMoveId) {
      if (argMoveId == '1') {
        return 'kamień';
      } else if (argMoveId == '2') {
        return 'papier';
      } else if (argMoveId == '3') {
        return 'nożyce';
      }
    }
    let argPlayerMove = getMoveName(playerInput)
    printMessage('Twój ruch to ' + argPlayerMove);
    console.log('Gracz wpisał: ' + playerInput);

    let argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to ' + argComputerMove);

    //Results
    console.log('moves:', argComputerMove, argPlayerMove);

    const displyResults = function() {
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
    printMessage('wynik: ' + displyResults(argComputerMove, argPlayerMove));
    GetResult();
  }
  let GetResult = function() {
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
