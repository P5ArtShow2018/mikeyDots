function setup() {
  createCanvas(500,500)
}

function draw() {
  background(0)
  stroke(255)
  strokeWeight(5)
  noFill();
  
  if (mouseX > 50) {
    fill(0,255,200)
  if (mouseX > 100)
    fill(0,255,255)
  if(mouseX > 200)
    fill(0,0,255)
  //if(mouseX > 250) {
    //ellipse(250,100,75)
    //ellipse(250,400,75)
    //ellipse(400,250,75)
    //ellipse(100,250,75)
  //}
    
  }
  
  var d = dist(mouseX, mouseY, 250, 250);
  if(d < (75/2)) { 
    ellipse(250,100,75)
    ellipse(250,400,75)
    ellipse(400,250,75)
    ellipse(100,250,75)
    ellipse(100,100,75)
    ellipse(400,100,75)
    ellipse(100,400,75)
    ellipse(400,400,75)
  }
  
  ellipse(250,250,100)
  //console.log(mouseX)
}