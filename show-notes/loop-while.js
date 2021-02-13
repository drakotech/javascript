// Guide to While and Do/While Loops in JavaScript


var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
  ];
  
  var i = 0;
  while (i < players.length) {
    console.log(players[i]);
    i++;
  }
  
  var i = 21;
  do {
    console.log(players[i]);
    i++;
  } while (i < players.length)


/*

Notes:

Do while is basically a reversed syntax of a while loop. Main
difference betwen the two is that the while loop will run the
conditional check first and the do while loop will run one time
before running the conditional check.

*/