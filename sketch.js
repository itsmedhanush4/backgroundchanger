var box1;
var box2;
var edges;

function setup(){

  box1=createSprite(100,100,20,20);
  box1.shapeColor="aqua";

  box2=createSprite(200,200,20,20);
  box2.shapeColor="violet";

  edges=createEdgeSprites();
}



function draw(){
  
  background("black");

  //if you press w then backround color will be red
      if(keyDown("w")){
        background("red");
      }


    //if you press a then backround color will be aqua
      if(keyDown("a")){
        background("aqua");
      }



      //if you press s then backround color will be yellow
       if(keyDown("s")){
        background("yellow");
      }



        //if you press d then backround color will be orange
          if(keyDown("d")){
        background("orange");
      }

  drawSprites();
}