// Guide to For Loops in JavaScript


var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  for (player in players) {
    console.log(players[player]);
  }
  
  for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  
  players.forEach(function(element) {
    console.log(element);
  });

  /*

  Notes:

  Using i < players.length you don't have to use the -1 method
  to get the correct behaviour.

  The forEach() loop is the more modern format for loop method.

  */