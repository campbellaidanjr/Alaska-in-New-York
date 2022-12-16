function setup() {
  createCanvas(720, 400);
  background(230);
  strokeWeight(2);
}

function draw() {
  if (mouseIsPressed) {
    stroke(300,150, 90);
  } else {
    stroke(100, 35, 86);
  }
  line(mouseX - 0, mouseY, mouseX + 0, mouseY);
  line(mouseX, mouseY - 66, mouseX, mouseY + 66);
}