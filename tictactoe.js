var character = 'O';

//this function handles the onclick event
function turn(location){

  //so a already written character doesn't get over written
  if(document.getElementById(location).innerHTML == ""){

    //update results div with feedback
    document.getElementById("results").innerHTML = "It's " + character + "'s turn!";

    //switch between x and o
    if(character == 'X'){
      character = 'O';
    }
    else{
      character = 'X';
    }

    document.getElementById(location).innerHTML = character;
    //check for winner after turn
    checkWinner();
  }

}

//checks for winner
function checkWinner(){

  //grab HTML of each tic tac toe div (which holds X or O)
  var r1c1 = document.getElementById("r1c1").innerHTML;
  var r1c2 = document.getElementById("r1c2").innerHTML;
  var r1c3 = document.getElementById("r1c3").innerHTML;
  var r2c1 = document.getElementById("r2c1").innerHTML;
  var r2c2 = document.getElementById("r2c2").innerHTML;
  var r2c3 = document.getElementById("r2c3").innerHTML;
  var r3c1 = document.getElementById("r3c1").innerHTML;
  var r3c2 = document.getElementById("r3c2").innerHTML;
  var r3c3 = document.getElementById("r3c3").innerHTML;

  if(((r1c1 == r1c2) && (r1c1 == r1c3) && r1c1 != '') ||
    ((r2c1 == r2c2) && (r2c1 == r2c3) && r2c1 != '') ||
    ((r3c1 == r3c2) && (r3c1 == r3c3) && r3c1 != '') ||
    ((r1c1 == r2c1) && (r1c1 == r3c1) && r1c1 != '') ||
    ((r1c2 == r2c2) && (r2c2 == r3c2) && r1c2 != '') ||
    ((r1c3 == r2c3) && (r1c3 == r3c3) && r1c3 != '') ||
    ((r1c1 == r2c2) && (r1c1 == r3c3) && r1c1 != '') ||
    ((r1c3 == r2c2) && (r3c1 == r3c1) && r1c3 != '')){

    //alert("Winner Winner Chicken Dinner!");

    //update results div
    document.getElementById("results").innerHTML = character + " wins!";
  }

}

function clearAll(){
  document.getElementById("r1c1").innerHTML = "";
  document.getElementById("r1c2").innerHTML = "";
  document.getElementById("r1c3").innerHTML = "";
  document.getElementById("r2c1").innerHTML = "";
  document.getElementById("r2c2").innerHTML = "";
  document.getElementById("r2c3").innerHTML = "";
  document.getElementById("r3c1").innerHTML = "";
  document.getElementById("r3c2").innerHTML = "";
  document.getElementById("r3c3").innerHTML = "";
}
