// ----------------------------------------------
// vaakaruode.github.io/
// (c) vaakaruode 2022 - vaakaruode(at)gmail.com
// see git multiple accounts - one computer:
// https://talonendm.github.io/2020-11-15-Git_setup/
// --------------------------------------------------

var ilmakiertaavari = "rgba(200,200,255,1)";
var clicks = 0;
var timerValue = 0;
var value = 0;
var endclicks = 0;
var doublec = 0;
var movec = 0;
var ptimer;
var clicked=false, clickTimeout=300;
var clicks2 = 0;
var doublec2 = 0;
var ww = 1000;
var wh = 800;
var s = 1;
var fonttikoko = 20;
function setup() { 
  createCanvas(windowWidth, windowHeight);
	// colorMode(HSB,360,100,100);
  ww = windowWidth;
  wh = windowHeight;
  s = windowWidth / 900 * 0.7;
  fonttikoko = round(30 * s)-2;
	rectMode(CENTER);
	setInterval(timeIt, 100); // https://editor.p5js.org/denaplesk2/sketches/ryIBFP_lG
} 

function draw() { 
  value = 0;
  background(value,10,10);
  rectMode(CENTER);


  var vari = round(50 * mouseX / ww);

	fill(103 + vari, 83+ vari, 90 + vari);
  fill(240, 230 + round(vari/5), 140+ vari);

  s = windowWidth / 900 * 0.7;
  fonttikoko = round(23 * s)-2;
  rect(windowWidth/2, windowHeight/2, 900 * s, 30 * s,4);

  rect(windowWidth/2 - (450 - 50)*s, windowHeight/2 + 27 * s, 100 * s, 22 * s, 2);
  rect(windowWidth/2 + (450 - 50) *s, windowHeight/2 + 27 * s, 100 * s, 22 * s, 2);

  rect(windowWidth/2 - (450 - 50)*s, windowHeight/2 + (30 + 22 + 3) * s, 100 * s, 32 * s, 2);
  rect(windowWidth/2 + (450 - 50) *s, windowHeight/2 + (30 + 22 + 3) * s, 100 * s, 32 * s, 2);


  PiirraRoikkuvaAluskate(false);


	// fill(0,0,100);
	textSize(round(s*23));
	textAlign(CENTER,CENTER);
	textFont('Avenir');

  fill(0,0,255);
  //text("Vaakaruode Oy", windowWidth/2, windowHeight/2 - s * fonttikoko - 3);

  var samerow = true;

  if (samerow) {
    text("Vaakaruode Oy - for better pRoofs", windowWidth/2, windowHeight/2);
    //textSize(round(s*18));
    //fill(100);
    //text("for better pRoofs", windowWidth/2, windowHeight/2 + s * fonttikoko + 1);
  } else {
    text("Vaakaruode Oy", windowWidth/2, windowHeight/2 - 1);
    textSize(round(s*18));
    fill(100);
    text("for better pRoofs", windowWidth/2, windowHeight/2 + s * fonttikoko + 1*s);
  }

  fill(200, 180 + round(vari/5), 120+ vari);
  textSize(round(s*20));
  text("&copy; 2022 @vaakaruode - vaakaruode@gmail.com", windowWidth/2, windowHeight - fonttikoko);
  
  
  fill(90);
  text(movec + " (" + nfc(timerValue / 10,1) + ")", mouseX, mouseY - s * 33 / 2);

	let permin = round(clicks * 600 / timerValue);
	// text('click: ' + clicks + " OR " + clicks2 + "TIME" + nfc(timerValue / 10,1) + "\nperMin:" + permin, width*0.5,height*0.5+2);
	//  text('touch move: ' + movec, width*0.5,height*0.35+2);
	// text('double: ' + doublec + " or " + doublec2, width*0.5,height*0.65+2);
	// text('end: ' + endclicks, width*0.5,height*0.8+2);
}

// TOUCH ------------------------------------------------------------
// full screen: https://editor.p5js.org/slow_izzm/sketches/lgzf4tJk6
function touchStarted () {
  let fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
  value = 0;
  if (ptimer == timerValue) {
	  // double
	  doublec = doublec + 1; //# // within selected time 0.1sec
  } else {
	  clicks = clicks + 1;
  }
  // https://stackoverflow.com/questions/51144762/p5-js-mousepressed-works-but-doublepressed-doesnot
  ptimer = timerValue;
  if(!clicked){ //# https://stackoverflow.com/questions/51144762/p5-js-mousepressed-works-but-doublepressed-doesnot
    clicked=true;
    setTimeout(function(){
      if(clicked){
        console.log("single click");
        clicked=false;
        //single ClickStuff
		clicks2 = clicks2 + 1;
      }
    },clickTimeout);
  }else{
    clicked=false;
    console.log("double click");
    //double click Stuff
	doublec2 = doublec2 + 1;
  }
}

function touchEnded() { 
    value = 50; 
	// Clean code and post answer here: https://github.com/processing/p5.js/issues/1815

	// without this double clicks:
	if(event.type!='mouseup'){ // nicolasbaez commented 20 days ago at https://github.com/processing/p5.js/issues/1815
		//your code :)
		
		endclicks = endclicks + 1;
	}
	
	
} 
// TOUCH MOVED ------------------------------------------------------
function touchMoved() {
	movec = movec + 1;
}

// this function fires with any double click anywhere
//function doubleClicked() {
//	doublec = doublec + 1;
//}

function windowResized() {

  s = (900 / windowWidth / 1.5);
  fonttikoko = round(30 * s)-2;

  resizeCanvas(windowWidth, windowHeight);
}
function timeIt() {
  
    timerValue++;
  
}
/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};




function PiirraRoikkuvaAluskate() {



  var aluskateX = 220 * s;
  var aluskatevari = "rgba(140,140,140,1)";
  var roikkuma = mouseY / 40;



  var alotusx = windowWidth/2 - (450 - 50 - 50)*s;
  var alotusy = windowHeight/2 + (-18 + 30 + 22 + 5) * s;
  var loppux = windowWidth/2 + (450 - 50 - 50) *s;

  let p1 = { x: alotusx, y: alotusy };
  let p2 = { x: windowWidth/2 - aluskateX, y: alotusy + roikkuma };
  let p3 = { x: windowWidth/2 + aluskateX, y: alotusy + roikkuma };
  let p4 = { x: loppux , y: alotusy };


  // https://www.geeksforgeeks.org/p5-js-bezierpoint-function/
  // noFill();
  // fill(ilmakiertaavari);
  noFill();
  stroke(aluskatevari);
  // Draw bezier using bezier()


  if (roikkuma<4) {
    aluskatevari = "rgba(200,100,100,1)";
  }
  
  stroke(aluskatevari);

  line(alotusx - 100*s, alotusy, alotusx , alotusy);
  line(loppux, alotusy, loppux + 100*s, alotusy);

  bezier(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);

  stroke('black');

  


}