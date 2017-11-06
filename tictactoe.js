var character = 'O';

//this function handles the onclick event
function turn(location){

  //so a already written character doesn't get over written
  if(document.getElementById(location).innerHTML == ""){
    document.getElementById(location).innerHTML = character;
  }

    //switch between x and o
    if(character == 'X'){
      character = 'O';
    }
    else{
      character = 'X';
    }

    //update results div with feedback
    document.getElementById("results").innerHTML = "It's " + character + "'s turn!";

}
