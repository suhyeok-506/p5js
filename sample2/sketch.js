function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(173, 216, 230);  
  
  // 몸
  stroke(0);
  strokeWeight(4);
  fill(85, 107, 47);
  arc(200, 600, 300, 400, radians(180), radians(0));
  
  // 카라
  quad(140, 420, 120, 440, 180, 510, 190, 500);
  quad(260, 420, 280, 440, 220, 510, 210, 500);
  
  // 목
  fill(255, 224, 189);
  quad(140, 420, 190, 500, 210, 500, 260, 420);
 
  // 귀
  strokeWeight(4);
  fill(255, 224, 189);
  arc(87, 325, 50, 70, radians(0), radians(270));
  arc(310, 325, 50, 70, radians(180), radians(90));

  // 얼굴
  stroke(0);
  fill(255, 224, 189);
  ellipse(200, 310, 230, 270);
  
  // 머리카락
  fill(70);
  noStroke();
  triangle(85, 280, 150, 230, 107, 230);
  triangle(312, 280, 250, 230, 296, 235);
  fill(20);
  arc(200, 239, 193, 127, radians(180), radians(0));
  
  // 안경
  noFill();
  stroke(0, 168, 107);
  strokeWeight(5);
  rect(115, 300, 80, 63, 25); 
  rect(205, 300, 80, 63, 25);
  strokeWeight(4);
  line(195, 325, 205, 325); 
  line(84, 294, 115, 315); 
  line(285, 315, 315, 294);

  // 눈
  noStroke();
  fill(240);
  ellipse(245, 325, 35, 20);
  ellipse(155, 325, 35, 20);
  fill(0);
  ellipse(155, 325, 10, 14);
  ellipse(245, 325, 10, 14);
  
  // 눈썹
  quad(120, 295, 125, 282, 180, 290, 190, 299);
  quad(280, 295, 275, 282, 220, 290, 210, 299);  
  
  // 코
  stroke(180, 140, 120);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(200, 345);
  vertex(190, 360);
  vertex(200, 368);
  endShape();

  // 입
  stroke(200, 100, 100);
  arc(200, 400, 50, 20, radians(0.2), radians(179));
  
  // 왼어깨 마크 (태극 문양 레이어)
  stroke(0, 0, 128);
  fill(255);
  quad(100, 470, 140, 490, 125, 520, 85, 500);
  noStroke();
  fill(0, 0, 255);
  arc(112, 495, 25, 25, radians(40), radians(220)); 
  fill(255, 0, 0);
  arc(112, 495, 25, 25, radians(220), radians(400));
  fill(255, 0, 0);
  arc(107.4, 491.2, 12.5, 12.5, radians(40), radians(220));
  fill(0, 0, 255);
  arc(116.6, 498.8, 12.5, 12.5, radians(220), radians(400));

}