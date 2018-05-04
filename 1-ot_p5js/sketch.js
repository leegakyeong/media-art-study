// 한 번만 불러올 것들
function setup() {
  createCanvas(640, 480); // 캔버스 크기
  background(255,200,220); // 캔버스 배경색 지정 (r,g,b(,투명도))
}

// 매번 불러올 것들
function draw() {
  // 도형 그리기
  fill(200,200,255); // 색, 선 굵기 등 속성은 개체를 부르기 전에 써 주세요
  ellipse(50,50,50,50); // 위치는 원의 중심 기준
  fill(220,255,200);
  rect(150,20,100,55); // 위치는 네모의 좌상 꼭짓점 기준
  
  // 글 쓰기
  fill(0);
  textSize(15);
  text('a happy ellipse',10,100); // 위치는 텍스트의 시작점
  text('rrectanglee',150,100);
  
  // mosueX, mouseY 이용하기
  var xx = map(mouseX,0,640,0,255);
  var yy = map(mouseY,0,480,0,255);
  fill(xx,yy,xx,yy);
  ellipse(mouseX,mouseY,mouseX/2,mouseY/2);
}

function mousePressed() {
    fill(0);
    text(mouseX+', '+mouseY, mouseX,mouseY);
  }
