var c=document.getElementById("gamaker");
c.style.background="#000000";
var ctx=c.getContext("2d");
ctx.canvas.width=800;
ctx.canvas.height=600;
ctx.fillStyle="white";
ctx.font="15px sans-serif";

var last_click="none";
var current_frame="escaleratop";
var statusd={"bajobrlight":0};
processed=0

function menu(){

  ctx.clearRect(0,0,800,600);
  ctx.drawImage(escaleratop,0,30);
  c.addEventListener("mousedown",lope,false)

}

function lope(ev){

  processed=0;
  updateMousePosition(ev);
  switch(current_frame){
    case "escaleratop":
    if(last_click[0]>252 && last_click[0]<422 && last_click[1]>210 && last_click[1]<494 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobl";
      var imagename=current_frame;
      console.log("Clicked stairs to bottom, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>639 && last_click[0]<739 && last_click[1]>34 && last_click[1]<198 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="escaleratop";
      var imagename=current_frame;
      console.log("Clicked hackerspace, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("zone not done yet")
      processed=1;
    }
    if(last_click[0]>158 && last_click[0]<370 && last_click[1]>32 && last_click[1]<150 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="escaleratop";
      var imagename=current_frame;
      console.log("Clicked junk, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("That looks like literal junk")
      processed=1;
    }
    break;

    case "bajobl":
    if(last_click[0]>700 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobr";
      var imagename=current_frame+statusd.bajobrlight;
      console.log("Clicked on right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "bajobr":
    if(last_click[0]>250 && last_click[0]<270 && last_click[1]>140 && last_click[1]<149 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobr";
      if (statusd.bajobrlight==0) {statusd.bajobrlight=1; writemessage("Someone should fix this")}
      else {statusd.bajobrlight=0}
      var imagename=current_frame+statusd.bajobrlight;
      console.log("Clicked bajobr lights, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>284 && last_click[0]<563 && last_click[1]>148 && last_click[1]<422 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobr";
      var imagename=current_frame+statusd.bajobrlight;
      console.log("Clicked creepy place "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Creepy. Maybe there's nothing there?")
      processed=1;
    }
    if(last_click[0]>609 && last_click[0]<706 && last_click[1]>147 && last_click[1]<432 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobesc";
      var imagename=current_frame;
      console.log("Clicked stairs "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "bajobesc":
    if(last_click[0]>283 && last_click[0]<513 && last_click[1]>143 && last_click[1]<386 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="escaleratop";
      var imagename=current_frame;
      console.log("Clicked top stairs "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>269 && last_click[0]<401 && last_click[1]>399 && last_click[1]<558 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="escaleratrastos";
      var imagename=current_frame;
      console.log("Clicked stair things "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>550 && last_click[0]<662 && last_click[1]>106 && last_click[1]<215 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pegatinas";
      var imagename=current_frame;
      console.log("Clicked stickers "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>139 && last_click[0]<216 && last_click[1]>40 && last_click[1]<552 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobr";
      var imagename=current_frame+statusd.bajobrlight;
      console.log("Clicked left "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "pegatinas":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>400 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobesc";
      var imagename=current_frame;
      console.log("Clicked back "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "escaleratrastos":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>400 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobesc";
      var imagename=current_frame;
      console.log("Clicked back "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

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
items=[
"./images/agujero.png",   
"./images/bajobr1.png",   
"./images/bajor.png",      
"./images/cerrojo01.png",    
"./images/escaleratrastos.png",  
"./images/pegatinas.png",
"./images/bajobesc.png",  
"./images/bajoc.png",     
"./images/bano0.png",      
"./images/cerrojo11.png",    
"./images/estudio.png",          
"./images/puerta.png",
"./images/bajobl.png",    
"./images/bajol.png",     
"./images/bano1.png",      
"./images/desvan.png",       
"./images/lavabo.png",           
"./images/taquillas.png",
"./images/bajobr0.png",   
"./images/bajomesa.png",  
"./images/cerrojo00.png",  
"./images/escaleratop.png",  
"./images/pasillo.png"
];

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
