var c=document.getElementById("gamaker");
c.style.background="#000000";
var ctx=c.getContext("2d");
ctx.canvas.width=800;
ctx.canvas.height=600;
ctx.fillStyle="white";
ctx.font="15px sans-serif";

// Status variables

function menu(){

  ctx.clearRect(0,0,800,600);
  ctx.drawImage(door_001,0,30);
  c.addEventListener("mousedown",lope,false)

}

function lope(ev){

  processed=0;
  updateMousePosition(ev);
  switch(current_frame){

  }

  writeinventory();
}

function updateMousePosition(ev) {

  last_click=[ev.clientX-c.offsetLeft+window.scrollX,ev.clientY+window.scrollY-c.offsetTop];
  console.log("Click on "+current_frame+" frame",last_click[0],last_click[1]);
  
}

function writeinventory(){

  
}

function writemessage(string){

  ctx.fillText(string,20,585)
}

//Loader
// Resource list
items=[];

// Loader specification
spin=2*Math.PI;
itemincrement=spin/items.length;
ctx.lineWidth=5; ctx.strokeStyle="#FABADA";
x=400; y=300; decpath=false; startrad=3*(Math.PI/2);

function loader(items, allDone) {

  // Return nothing if the item list is empty
  if (!items) {return;}
  if ("undefined"===items.length) {items=[items];}
  // Action every time a image loads
    var count=items.length;
    var thingToDoCompleted=function (items, i) {
    count--;
    // If all items loaded, launch specified function
    if (count==0) {allDone();}
    // If not, draw loading bar+message
    else {
      ctx.clearRect(0,0,800,600);
      ctx.beginPath();
      ctx.arc(x,y,50,startrad,startrad+itemincrement*(items.length-count),false);
      ctx.stroke();
      ctx.fillText((items.length-count)+"/"+items.length,x-20,y+5);
    }};
  // Actual loading loop
  for (var i=0; i<items.length; i++) {
    loadImage(items, i, thingToDoCompleted);}}

function loadImage(items, n, onComplete) {

  var onLoad=function (e) {
    e.target.removeEventListener("load", onLoad);
    onComplete(items, n);}

  // Defining variable name
  photoname=items[n].replace("./images/","").replace(".png","");
  // Create object and specify source
  // No var is used to it's created as a global object attribute
  eval(photoname+"=new Image()");
  eval(photoname+".addEventListener('load', onLoad, false)");
  eval(photoname+".src=items[n]");
}

loader(items, menu);
console.log("Images loaded"); 
