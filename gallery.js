var list = [ "Hf-stop.JPG", "FS.JPG", "hqdefault.jpg" ];

var imagevalue = 0;

function Previous(){

  if (imagevalue > 0){
    imagevalue = imagevalue - 1;
    document.getElementById("pics").src = list[imagevalue];
  }
}

function Next(){

  if (imagevalue < 2){
    imagevalue = imagevalue + 1;
    document.getElementById("pics").src = list[imagevalue];
  }

}
