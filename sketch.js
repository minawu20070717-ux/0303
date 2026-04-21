function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#C9EDDC');

  // 畫臉 (黃色)
  fill('#F7B2AD');
  stroke(0);
  strokeWeight(2);
  circle(width / 2, height / 2, 300);

  // 畫眼睛 (黑色)
  fill(0);
  ellipse(width / 2 - 60, height / 2 - 30, 30, 45);
  ellipse(width / 2 + 60, height / 2 - 30, 30, 45);

  // 畫嘴巴 (弧線)
  noFill();
  strokeWeight(4);
  arc(width / 2, height / 2 + 15, 180, 150, 0, PI);
}
