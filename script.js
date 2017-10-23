//create a list of strings, to hold 8 ball responses
//start counting from 0 (for lists in coding)
var list = [//0
"Yes",
//1
"No",
//2
"It is decidedly so.",
//3
"Outlook not so good.",
//4
"Concentrate and ask again.",
//5
"Try again.",
//6
"Don't count on it.",
//7
"My reply is no.",
//8
"Signs point to yes",
//9
"Reply hazy, try again.",
//10
"Stop asking me and get on with your life.",
//11
"Lol idk.",
//12
"Just google it."];

//this function outputs a random number
function randomNum(){
  return Math.floor(Math.random() * 13);
}

//this function responds with a fortune
//when click the magic 8 ball
function shakeMagic8Ball(){
  //alert("test");

  //grabs image by id
  document.getElementById("magic8ball").src="magic8ball1.png";

  //grab the results
  document.getElementById("results").innerHTML=list[randomNum()];

  //alert(randomNum());
}
