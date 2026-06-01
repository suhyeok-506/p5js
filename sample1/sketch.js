function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(18, 3, 9);

  // 뒤쪽 배경 타원 3개
  strokeWeight(3);
  stroke(123, 0, 102);
  fill(44, 0, 26);
  ellipse(300, 320, 500, 140);
  
  stroke(196, 77, 255);
  fill(82, 0, 51);
  ellipse(300, 320, 400, 120);
  
  stroke(255, 140, 102);
  fill(120, 35, 70);
  ellipse(300, 320, 300, 100);

  // 뒤쪽 배경 가로선들
  strokeWeight(8);
  stroke(115, 89, 107);
  line(0, 50, 600, 50);
  stroke(69, 53, 64);
  line(0, 110, 600, 110);
  stroke(23, 18, 22);
  line(0, 170, 600, 170);
  
  // 뒤쪽 기하학 도형 3개 (가로선과 완벽히 일치하는 테두리 색상)
  strokeWeight(8);
  
  // 좌측 반원
  stroke(224, 0, 22);
  fill(245, 0, 24);
  arc(100, 170, 130, 120, radians(180), radians(0), CHORD);
  
  // 우측 팩맨 원
  stroke(222, 193, 2);
  fill(241, 211, 2);
  arc(400, 100, 160, 150, radians(300), radians(0), PIE);
  
  // 중앙 비틀어진 사각형
  stroke(114, 134, 192);
  fill(128, 143, 198);
  quad(150, 40, 250, 160, 450, 180, 350, 110);

  // 중간 레이어 가로선들
  stroke(84, 65, 78);
  line(0, 80, 600, 80);
  stroke(46, 36, 44);
  line(0, 140, 600, 140);
  stroke(23, 18, 22);
  line(0, 170, 180, 170);
  stroke(23, 18, 22);
  line(500, 170, 600, 170);
  
  // 메인 원뿔 구조 (Main Cone)
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
  
  // 배경의 고정된 별들
  stroke(205, 225, 255);
  strokeWeight(10);
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
  
  strokeWeight(7);
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