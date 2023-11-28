let myLandscape;
let myClouds;
let myMountain;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  myLandscape = new landScape(width / 2, height, 400,100);
  myClouds = new clouds(width/2, height*0.1,20,20);
  myMountain = new mountain(width*0.2,height*0.8,width/2,height*0.2,width*0.8,height*0.8);
  
}

function draw() {
  background(105,170,255);
  //landScape();
  myLandscape.display();
  myClouds.display();
  myMountain.display();
}

class landScape {
  constructor(xpos, ypos, size, size2) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.size2 = size2;
  }
  
  display() {
    fill(109, 87,67);
    rect(this.xpos, this.ypos*0.9, this.size, this.size2-20);

}
//function landScape() {
  //fill(109, 87,67);
  //rect(xpos, ypos, size,size2);
  
}

class clouds {
    constructor(xpos, ypos, size, size2) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.size2 = size2;
  }
  
  display() {
    noStroke();
    fill(255);
    ellipse(this.xpos-150, this.ypos, this.size+40, this.size2);
    ellipse(this.xpos-130, this.ypos-10, this.size+30, this.size2+10);
    ellipse(this.xpos-110, this.ypos, this.size+20, this.size2);
    ellipse(this.xpos-120, this.ypos+10, this.size+20, this.size2);
    ellipse(this.xpos-160, this.ypos-10, this.size+20, this.size2+10);
  
    ellipse(this.xpos+20, this.ypos, this.size+40, this.size2);
    ellipse(this.xpos+10, this.ypos+10, this.size+40, this.size2+10);
    ellipse(this.xpos-10, this.ypos-10, this.size+30, this.size2+10);
    ellipse(this.xpos-15, this.ypos, this.size+50, this.size2+5);
    ellipse(this.xpos, this.ypos, this.size, this.size2);
  
    ellipse(this.xpos+150, this.ypos, this.size+50, this.size2+10);
    ellipse(this.xpos+130, this.ypos+15, this.size+40, this.size2+5);
    ellipse(this.xpos+110, this.ypos, this.size+40, this.size2+5);
    ellipse(this.xpos+140, this.ypos-15, this.size+50, this.size2+5);
    ellipse(this.xpos+160, this.ypos+15, this.size+40, this.size2);
    
    fill(255, 252, 100)
    ellipse(this.xpos+160, this.ypos+15, this.size+50, this.size2+50);
  }
}

class mountain {
      constructor(xpos, ypos, xpos2, ypos2, xpos3, ypos3) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xpos2 = xpos2;
    this.ypos2 = ypos2;
    this.xpos3 = xpos3;
    this.ypos3 = ypos3;
  }
  display() {
    fill(76,155,100);
    triangle(this.xpos, this.ypos, this.xpos2, this.ypos2, this.xpos3, this.ypos3);
    triangle(this.xpos+100, this.ypos, this.xpos2+100, this.ypos2+30, this.xpos3+100, this.ypos3);
    triangle(this.xpos-130, this.ypos, this.xpos2-130, this.ypos2+120, this.xpos3-130, this.ypos3);
  }

}