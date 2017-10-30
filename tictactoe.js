var character = 'X';

//this function handles the onclick event
function turn(location){

  //switch between x and o
  if(character == 'X'){
    character = 'O';
  }
  else{
    character = 'X';
  }

  document.getElementById(location).innerHTML = character;
}
