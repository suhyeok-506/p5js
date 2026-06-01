function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(18, 3, 9);
  
  let pulse = sin(frameCount * 0.05); 
  let sizeModifier = pulse * 25; 

  //ellipses
  strokeWeight(3);
  stroke(123, 0, 102);
  fill(44, 0, 26);
  ellipse(300, 320, 500 + sizeModifier * 1.5, 140 + sizeModifier * 0.5);
  
  stroke(196, 77, 255);
  fill(82, 0, 51);
  ellipse(300, 320, 400 + sizeModifier, 120 + sizeModifier * 0.4);
  
  stroke(255, 140, 102);
  fill(120, 35, 70); 
  ellipse(300, 320, 300 + sizeModifier * 0.5, 100 + sizeModifier * 0.3);

  //Figures
  strokeWeight(8);
  stroke(115, 89, 107);
  line(0, 50, 600, 50);
  stroke(69, 53, 64);
  line(0, 110, 600, 110);
  stroke(23, 18, 22);
  line(0, 170, 600, 170);
  
  // 배경도형의 색 변경을 위한 hsb모드적용
  colorMode(HSB, 360, 100, 100);
  let baseHue = (frameCount * 1.5) % 360;

  // 좌측 반원
  stroke(baseHue, 90, 90);
  fill(baseHue, 95, 95);
  arc(100, 170, 130, 120, radians(180), radians(0), CHORD);
  
  // 우측 부채꼴
  let secondHue = (baseHue + 120) % 360;
  stroke(secondHue, 90, 90);
  fill(secondHue, 95, 95);
  arc(400, 100, 160, 150, radians(300), radians(0), PIE);
  
  // 중앙 사각형
  let thirdHue = (baseHue + 240) % 360;
  stroke(thirdHue, 50, 80);
  fill(thirdHue, 40, 80);
  quad(150, 40, 250, 160, 450, 180, 350, 110);
  
  colorMode(RGB, 255); // rgb모드 복구

  stroke(84, 65, 78);
  line(0, 80, 600, 80);
  stroke(46, 36, 44);
  line(0, 140, 600, 140);
  stroke(23, 18, 22);
  line(0, 170, 180, 170);
  stroke(23, 18, 22);
  line(500, 170, 600, 170);
  
  //Main Cone
  strokeWeight(3);
  fill(92, 245, 0);
  noStroke();
  triangle(300, 97, 175, 301, 425, 301);
  stroke(0, 143, 0);
  arc(300, 300, 250, 100, radians(0), radians(180), OPEN);
  
  stroke(163, 177, 138);
  fill(217, 217, 217);
  triangle(300, 100, 240, 343, 360, 343);
  stroke(0, 143, 0);
  arc(300, 300, 249, 100, radians(35), radians(144));
  line(300, 97, 425, 300);
  line(300, 97, 175, 300);
  
  //Points
  let twinkle = random(-2, 2);
  stroke(205, 225, 255);
  strokeWeight(10 + twinkle);
  point(298, 35);
  stroke(255, 255, 255);
  point(412, 223);
  stroke(248, 249, 255);
  point(557, 300);
  stroke(205, 225, 255);
  point(120, 230); 
  stroke(230, 214, 255);
  point(34, 190);
  stroke(230, 214, 255);
  point(490, 65);
  strokeWeight(7 + twinkle);
  stroke(248, 249, 255);
  point(178, 30);
  stroke(255, 244, 194);
  point(577, 389);
  stroke(255, 201, 242);
  point(120, 100);
  stroke(212, 194, 255);
  point(520, 250);
  stroke(255, 232, 163);
  point(550, 200);
  stroke(255, 211, 107);
  point(570, 160);
  stroke(230, 214, 255);
  point(220, 200);
  stroke(230, 214, 255);
  point(20, 300);
  stroke(255, 255, 255);
  point(20, 20);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('saveGif', 3);
  }
}