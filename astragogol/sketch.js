let backgroundImage, persoImage, personnageX, personnageY, y ,x 



function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundImage = loadImage("360_F_271500423_Ls3YOwFx6DqHy4nUvAV2P0G2UQwFeQaq.jpg")
  backgroundImage.resize(width, height)
  persoImage = loadImage("kisspng-spacecraft-clip-art-spaceship-png-file-5a7852b57963f2.0443367815178349334972-removebg-preview.png")
  personnageY = 600
}

function draw() {
  background(backgroundImage);
  joueur(persoImage)
}
function joueur() {
  image(persoImage, x, y, persoImage.width /4, persoImage.height /4 )
 if (mouseIsPressed) {
   x  = mouseX-70 
  y  = mouseY
 }
}


