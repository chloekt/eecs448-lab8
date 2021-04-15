let slidenum = 1;

function nextSlide(){
  let image = document.getElementById("imageID");

  if(slidenum == 1){
    slidenum ++;
    image.src = 'chair.jpg';
  }
  else if(slidenum == 2){
    slidenum ++;
    image.src = 'kitty.jpeg';
  }
  else if(slidenum == 3){
    slidenum ++;
    image.src = 'carrot.jpeg';
  }
  else if(slidenum == 4){
    slidenum ++;
    image.src = 'puffs.jpeg';
  }
  else if(slidenum == 5){
    slidenum = 1;
    image.src = 'maskjay.jpg';
  }
}

function backSlide(){
  let image = document.getElementById("imageID");

  if(slidenum == 1){
    slidenum = 5;
    image.src = 'puffs.jpeg';
  }
  else if(slidenum == 2){
    slidenum--;
    image.src = 'maskjay.jpg';
  }
  else if(slidenum == 3){
    slidenum--;
    image.src = 'chair.jpg';
  }
  else if(slidenum == 4){
    slidenum--;
    image.src = 'carrot.jpeg';
  }
  else if(slidenum == 5){
    slidenum--;
    image.src = 'kitty.jpeg';
  }
}
