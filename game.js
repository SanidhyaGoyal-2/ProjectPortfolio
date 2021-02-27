var n=8;
var guess= prompt("Guess a Number");
if(Number(guess)===n)
 alert("Number Matched");
else if(Number(guess)<n)
 alert("Too Low!! Guess Again");
else
 alert("Too High!! Guess Again");
