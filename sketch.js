// ----------------------------------------------
// vaakaruode.github.io/
// (c) vaakaruode 2022 - vaakaruode(at)gmail.com
// see git multiple accounts - one computer:
// https://talonendm.github.io/2020-11-15-Git_setup/
// --------------------------------------------------


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
  s = 900 / windowWidth / 1.5;
  fonttikoko = round(30 * s)-2;
	rectMode(CENTER);
	setInterval(timeIt, 100); // https://editor.p5js.org/denaplesk2/sketches/ryIBFP_lG
} 

function draw() { 
  value = 0;
  background(value,10,10);
  rectMode(CENTER);
	fill(123,123,90);
  
  rect(mouseX, mouseY, 900 * s, 30 * s,4);
	// fill(0,0,100);
	textSize(round(s*30));
	textAlign(CENTER,CENTER);
	textFont('Avenir');

  text("VAAKARUODE - for better pRoofs: coming soon ", mouseX, mouseY - s * 33);

  fill(100);
  text(movec + " (" + nfc(timerValue / 10,1) + ")", mouseX, mouseY + s * 33);

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