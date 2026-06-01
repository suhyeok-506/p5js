let radioY = 0; lightningX = 0, helmetY = 0;

let showLightning = true; 



function setup() {

  createCanvas(400, 600);

}



function draw() {

  background(173, 216, 230);  

  //몸

  stroke(0);

  strokeWeight(4);

  fill(85, 107, 47);

  arc(200, 600, 300, 400, radians(180), radians(0));

  

  //카라

  quad(140, 420, 120, 440, 180, 510, 190, 500);

  quad(260, 420, 280, 440, 220, 510, 210, 500);

  

  //목

  fill(255, 224, 189);

  quad(140, 420, 190, 500, 210, 500, 260, 420);

 

  //귀

  strokeWeight(4);

  fill(255, 224, 189);

  arc(87, 325, 50, 70, radians(0), radians(270));

  arc(310, 325, 50, 70, radians(180), radians(90));



  //얼굴

  stroke(0);

  fill(255, 224, 189);

  ellipse(200, 310, 230, 270);

  

  //머리카락

  fill(70);

  noStroke();

  triangle(85, 280, 150, 230, 107, 230);

  triangle(312, 280, 250, 230, 296, 235);

  fill(20);

  arc(200, 239, 193, 127, radians(180), radians(0));

  

  //안경

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

  

  //눈썹

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

  arc(200, 400, 50, 20,radians(0.2), radians(179));

  

  // 왼어깨

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

  

  // 방탄모 색

  fill(85, 107, 47); 

  noStroke();



  // 방탄모  

  arc(200, helmetY + 60, 215, 195, PI, 0); 

  ellipse(200, helmetY + 65, 225, 30);

  

  // 무전기 색

  fill(50); 

  noStroke();

  

  // 무전기 본체

  rect(288 - 15, radioY - 20, 40, 50); 

  fill(230);

  rect(288 - 10, radioY - 10, 30, 20);

  

  // 무전기 안테나

  stroke(50);

  strokeWeight(4);

  line(288 + 13, radioY - 15, 288 + 13, radioY - 55);

  

  // 무전기 버튼

  fill(255, 0, 0);

  noStroke();

  ellipse(297, radioY + 18, 5, 5);

    

if (keyIsPressed) {

  if (keyCode === RIGHT_ARROW) {

    lightningX = lightningX + 5;

  } else if (keyCode === LEFT_ARROW) {    

    lightningX = lightningX - 5;

  }

    

  lightningX = constrain(lightningX, 0, 400);

}

if (showLightning) { 

    fill(255, 255, 0); 

    noStroke();



    // 번개 1

    beginShape();

      vertex(lightningX + 25, 410); 

      vertex(lightningX + 15, 440); 

      vertex(lightningX + 30, 445); 

      vertex(lightningX, 470);      

      vertex(lightningX + 20, 450); 

      vertex(lightningX + 10, 445); 

    endShape(CLOSE);



    // 번개 2

    fill(255, 255, 0); 

    beginShape();

      vertex(lightningX + 35, 520); 

      vertex(lightningX + 25, 490); 

      vertex(lightningX + 40, 485); 

      vertex(lightningX + 10, 460); 

      vertex(lightningX + 30, 480); 

      vertex(lightningX + 20, 485); 

    endShape(CLOSE);

  } 



} 





// 번개 번쩍임 효과

function keyPressed() {

  if (keyCode === ENTER) {

    showLightning = !showLightning;

  }

    

  if (key === "s") {

    saveGif('mySketch', 10);

  }

}



// 마우스 상호작용 효과

function mouseMoved() {

  let targetY = map(mouseX, 0, 400, 0, 470);  

  radioY = constrain(targetY, 0, 470);

  let targetHelmetY = map(mouseY, 0, 400, 0, 200);   

  helmetY = constrain(targetHelmetY, 0, 200);

}