var c=document.getElementById("gamaker");
c.style.background="#000000";
var ctx=c.getContext("2d");
ctx.canvas.width=800;
ctx.canvas.height=600;
ctx.fillStyle="white";
ctx.font="15px sans-serif";

var last_click="none";
var current_frame="menu";
var statusd={
  "bajobrlight":0, "loccdoor":0, "locrdoor":0, "electrodrawer":0, "pcsdrawer":0, 
  "loclock": 0, "floppyopen":0, "cerrojokey":0, "cerrojoopen":0
};
var inventory={"flashlight":0, "lockpick":0, "ttool":0, "smallkey":0, "allenkey":0}
processed=0

function menu(){

  ctx.clearRect(0,0,800,600);
  ctx.drawImage(menu,0,30);
  c.addEventListener("mousedown",lope,false)
}

function lope(ev){

  processed=0;
  updateMousePosition(ev);
  switch(current_frame){

    case "menu":
    if(last_click[0]>380 && last_click[0]<635 && last_click[1]>80 && last_click[1]<185 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="wake1";
      var imagename=current_frame;
      console.log("Clicked start, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Huh?")
      processed=1;
    }
    break;

    case "wake1":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="wake2";
      var imagename=current_frame;
      console.log("Clicked start, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("What happened?")
      processed=1;
    }
    break;

    case "wake2":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locl";
      var imagename=current_frame;
      console.log("Clicked start, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("I passed out? I need to get out and buy a snack")
      processed=1;
    }
    break;

    case "locl":
    if(last_click[0]>750 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locc";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<50 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locf";
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>418 && last_click[0]<549 && last_click[1]>183 && last_click[1]<268 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="powertools";
      var imagename=current_frame;
      console.log("Clicked powertools, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Just what are you thinking?")
      processed=1;
    }
    if(last_click[0]>60 && last_click[0]<346 && last_click[1]>75 && last_click[1]<246 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="electro";
      var imagename=current_frame+statusd.electrodrawer;
      console.log("Clicked electro, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>451 && last_click[0]<621 && last_click[1]>41 && last_click[1]<125 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="ventana";
      var imagename=current_frame;
      console.log("Clicked window, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Not through HERE")
      processed=1;
    }
    break;

    case "electro":
    if(last_click[0]>259 && last_click[0]<480 && last_click[1]>398 && last_click[1]<538 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="electro";
      if (statusd.electrodrawer==0){statusd.electrodrawer=1}
      else {
        if (inventory.lockpick==0) {
          inventory.lockpick=1
          writemessage("A lockpick! Nice")
        }
        else {statusd.electrodrawer=0}}
      var imagename=current_frame+statusd.electrodrawer;
      console.log("Clicked drawer, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locc";
      statusd.electrodrawer=0
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "locf":
    if(last_click[0]>0 && last_click[0]<50 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locr";
      var imagename=current_frame+statusd.locrdoor;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>750 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locl";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>468 && last_click[0]<552 && last_click[1]>144 && last_click[1]<279 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="escaleratop";
      var imagename=current_frame;
      console.log("Clicked stairs, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>77 && last_click[0]<299 && last_click[1]>63 && last_click[1]<235 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="shelvestl";
      var imagename=current_frame;
      console.log("Clicked shelves (TL), loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>109 && last_click[0]<301 && last_click[1]>262 && last_click[1]<333 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="shelvesbl";
      var imagename=current_frame;
      console.log("Clicked shelves (BL), loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>298 && last_click[0]<444 && last_click[1]>87 && last_click[1]<223 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="shelvestr";
      var imagename=current_frame;
      console.log("Clicked shelves (TR), loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>311 && last_click[0]<439 && last_click[1]>242 && last_click[1]<295 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="shelvesbr";
      var imagename=current_frame;
      console.log("Clicked shelves (BR), loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "storagea":
    if(last_click[0]>700 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locl";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>447 && last_click[0]<600 && last_click[1]>48 && last_click[1]<241 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="storageb";
      var imagename=current_frame;
      console.log("Clicked front, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "storageb":
    if(last_click[0]>750 && last_click[0]<800 && last_click[1]>0 && last_click[1]<200 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="glassback";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("This is not helping")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="storagea";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "glassback":
    if(last_click[0]>700 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="storageb";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "locc":
    if(last_click[0]>0 && last_click[0]<50 && last_click[1]>0 && last_click[1]<360 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locl";
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>750 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locr";
      var imagename=current_frame+statusd.locrdoor;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>318 && last_click[0]<389 && last_click[1]>49 && last_click[1]<245 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locpuerta";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked door, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>419 && last_click[0]<492 && last_click[1]>90 && last_click[1]<201 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="guitar";
      var imagename=current_frame;
      console.log("Clicked guitar, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("What IS that thing?")
      processed=1;
    }
    if(last_click[0]>520 && last_click[0]<738 && last_click[1]>130 && last_click[1]<403 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="electro";
      var imagename=current_frame+statusd.electrodrawer;
      console.log("Clicked electro, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>56 && last_click[0]<315 && last_click[1]>141 && last_click[1]<253 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pcs";
      var imagename=current_frame+statusd.pcsdrawer;
      console.log("Clicked on pcs, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<100 && last_click[1]>100 && last_click[1]<552 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="mochila";
      var imagename=current_frame;
      console.log("Clicked on backpack, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("That's mine")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="escaleratop";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "ventana":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locl";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "powertools":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locl";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "locpuerta":
    if(last_click[0]>259 && last_click[0]<311 && last_click[1]>218 && last_click[1]<283 && processed==0 && statusd.loclock==0){
      ctx.clearRect(0,0,800,600);
      if (statusd.loclock==0){
        current_frame="loccer";
        var imagename=current_frame;
        console.log("Clicked on lock, loading "+imagename);
        ctx.drawImage(eval(imagename),0,30);
        writemessage("Locked!")
      }
      else {writemessage("I remember opening this")}
      processed=1;
    }
    if(last_click[0]>240 && last_click[0]<700 && last_click[1]>50 && last_click[1]<500 && processed==0 && statusd.loccdoor==0){
      ctx.clearRect(0,0,800,600);
      if (statusd.loclock==1){statusd.loccdoor=1}
      current_frame="locpuerta";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked on door, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      if (statusd.loclock==0){writemessage("It's locked!")}
      processed=1;
    }
    if(last_click[0]>577 && last_click[0]<800 && last_click[1]>0 && last_click[1]<500 && processed==0 && statusd.loccdoor==1){
      ctx.clearRect(0,0,800,600);
      statusd.loccdoor=0
      current_frame="locpuerta";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked on door, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locc";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>262 && last_click[0]<300 && last_click[1]>470 && last_click[1]<560 && processed==0 && statusd.loccdoor==1){
      ctx.clearRect(0,0,800,600);
      current_frame="tarjetasuelo";
      var imagename=current_frame;
      console.log("Clicked card, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "tarjetasuelo":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locpuerta";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>201 && last_click[0]<389 && last_click[1]>203 && last_click[1]<424 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="tarjetaf";
      var imagename=current_frame;
      console.log("Clicked card, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "tarjetaf":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locpuerta";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>700 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="tarjetab";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<100 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="tarjetab";
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>100 && last_click[0]<650 && last_click[1]>86 && last_click[1]<447 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="tarjetaf";
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Cute")
      processed=1;
    }
    break;

    case "tarjetab":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locpuerta";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>700 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="tarjetaf";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<100 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="tarjetaf";
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>166 && last_click[0]<324 && last_click[1]>82 && last_click[1]<153 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="tarjetab";
      var imagename=current_frame;
      console.log("Clicked number, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("I bet it's a code for something")
      processed=1;
    }
    break;
    
    case "loccer":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locpuerta";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>237 && last_click[0]<297 && last_click[1]>259 && last_click[1]<317 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="loccer";
      var imagename=current_frame;
      console.log("Clicked on lock, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      if (inventory.lockpick==1 && inventory.ttool==1 && statusd.loclock==0){
        statusd.loclock=1
        writemessage("Boom, open!")
      }
      else if (statusd.loclock==1){
        writemessage("I've already opened it")
      }
      else if (inventory.lockpick!=inventory.ttool){
        writemessage("I need something else")
      }
      else if (inventory.lockpick==0 && inventory.ttool==0){
        writemessage("I don't have the key")
      }
      
      processed=1;
    }
    break;

    case "mochila":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locc";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked on pcs, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>56 && last_click[0]<600 && last_click[1]>233 && last_click[1]<453 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="mochila";
      var imagename=current_frame;
      console.log("Clicked on pocket, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      if (inventory.flashlight==0){
        writemessage("I'll take my flashlight")
        inventory.flashlight=1
      }
      else{
        writemessage("I already got what I needed")
      }
      
      processed=1;
    }
    break;

    case "guitar":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locc";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "mesa3d":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locr";
      var imagename=current_frame+statusd.locrdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>196 && last_click[0]<232 && last_click[1]>300 && last_click[1]<400 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="mesa3d";
      var imagename=current_frame;
      console.log("Clicked on spray, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("FSSSHHHH. Now I look fabulous!")
      processed=1;
    }
    if(last_click[0]>529 && last_click[0]<760 && last_click[1]>268 && last_click[1]<417 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="prusa";
      var imagename=current_frame;
      console.log("Clicked on printer, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("What a mess")
      processed=1;
    }
    if(last_click[0]>750 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pcs";
      var imagename=current_frame+statusd.pcsdrawer;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "pcs":
    if(last_click[0]>361 && last_click[0]<518 && last_click[1]>344 && last_click[1]<403 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pcs";
      statusd.pcsdrawer=1
      var imagename=current_frame+statusd.pcsdrawer;
      console.log("Clicked on drawer, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Full of pens and stuff")
      processed=1;
    }
    if(last_click[0]>554 && last_click[0]<683 && last_click[1]>388 && last_click[1]<449 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pcs";
      statusd.pcsdrawer=2
      var imagename=current_frame+statusd.pcsdrawer;
      console.log("Clicked on drawer, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Just general computer stuff")
      processed=1;
    }
    if(last_click[0]>544 && last_click[0]<679 && last_click[1]>435 && last_click[1]<498 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pcs";
      statusd.pcsdrawer=3
      var imagename=current_frame+statusd.pcsdrawer;
      console.log("Clicked on drawer, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>541 && last_click[0]<671 && last_click[1]>482 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pcs";
      statusd.pcsdrawer=4
      var imagename=current_frame+statusd.pcsdrawer;
      console.log("Clicked on drawer, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("This one is empty")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locc";
      statusd.pcsdrawer=0
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<50 && last_click[1]>0 && last_click[1]<500 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="mesa3d";
      statusd.pcsdrawer=0
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>50 && last_click[0]<141 && last_click[1]>203 && last_click[1]<275 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pcpapeles";
      statusd.pcsdrawer=0
      var imagename=current_frame;
      console.log("Clicked on papers, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Uh...")
      processed=1;
    }
    break;

    case "pcpapeles":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pcs";
      statusd.pcsdrawer=0
      var imagename=current_frame+statusd.pcsdrawer;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "prusa":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="mesa3d";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>120 && last_click[0]<329 && last_click[1]>224 && last_click[1]<360 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="tripas";
      var imagename=current_frame;
      console.log("Clicked guts, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("That's not working anytime soon")
      processed=1;
    }
    if(last_click[0]>361 && last_click[0]<574 && last_click[1]>193 && last_click[1]<372 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="cabeza";
      var imagename=current_frame;
      console.log("Clicked head, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Neat")
      processed=1;
    }
    break;

    case "cabeza":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="prusa";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "tripas":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="prusa";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "locr":
    if(last_click[0]>0 && last_click[0]<50 && last_click[1]>0 && last_click[1]<360 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locc";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>750 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locf";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>258 && last_click[0]<423 && last_click[1]>98 && last_click[1]<309 && processed==0){
      ctx.clearRect(0,0,800,600);
      if (statusd.locrdoor==0){
        statusd.locrdoor=1
        current_frame="locr";
        var imagename=current_frame+statusd.locrdoor;
        console.log("Clicked door, loading "+imagename);
        ctx.drawImage(eval(imagename),0,30);
      }
      else if (inventory.flashlight==1){
        current_frame="storagea"
        var imagename=current_frame;
        console.log("Clicked door, loading "+imagename);
        ctx.drawImage(eval(imagename),0,30);
        writemessage("")
      }
      else {
        current_frame="locr";
        var imagename=current_frame+statusd.locrdoor;
        console.log("Clicked door, loading "+imagename);
        ctx.drawImage(eval(imagename),0,30);
        writemessage("Not going in there without light")
      }
      processed=1;
    }
    if(last_click[0]>479 && last_click[0]<741 && last_click[1]>194 && last_click[1]<358 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="mesa3d";
      var imagename=current_frame;
      console.log("Clicked 3d table, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

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
      current_frame="locc";
      var imagename=current_frame+statusd.loccdoor;
      console.log("Clicked hackerspace, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
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
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="escaleratop";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>10 && last_click[0]<450 && last_click[1]>10 && last_click[1]<450 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajoc";
      var imagename=current_frame;
      console.log("Clicked on bajol, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "shelvesbl":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locf";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "shelvestr":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locf";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>521 && last_click[0]<740 && last_click[1]>217 && last_click[1]<355 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="books";
      var imagename=current_frame;
      console.log("Clicked books, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "books":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="shelvestr";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>241 && last_click[0]<358 && last_click[1]>93 && last_click[1]<500 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="books";
      var imagename=current_frame;
      console.log("Clicked book, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Not with this headache")
      processed=1;
    }
    if(last_click[0]>368 && last_click[0]<800 && last_click[1]>40 && last_click[1]<500 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="books";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("Mostly catalogues")
      processed=1;
    }
    break;

    case "shelvestl":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locf";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "shelvesbr":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="locf";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "estudio":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajol";
      var imagename=current_frame;
      console.log("Clicked back "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "bajol":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobl";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>341 && last_click[0]<603 && last_click[1]>37 && last_click[1]<139 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajol";
      var imagename=current_frame;
      console.log("Clicked trash, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("More junk")
      processed=1;
    }
    if(last_click[0]>43 && last_click[0]<440 && last_click[1]>188 && last_click[1]<516 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="estudio";
      var imagename=current_frame;
      console.log("Clicked study, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>504 && last_click[0]<534 && last_click[1]>175 && last_click[1]<481 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bano";
      var imagename=current_frame+inventory.flashlight;
      console.log("Clicked wc, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      if (inventory.flashlight==0){writemessage("I can't see shit in here")}
      else {writemessage("")}
      processed=1;
    }
    if(last_click[0]>636 && last_click[0]<736 && last_click[1]>175 && last_click[1]<531 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pasillo";
      var imagename=current_frame;
      console.log("Clicked hallway, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>750 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajoc";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "bajoc":
    if(last_click[0]>750 && last_click[0]<800 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajor";
      var imagename=current_frame;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<50 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajol";
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobl";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "pasillo":
    if(last_click[0]>103 && last_click[0]<234 && last_click[1]>60 && last_click[1]<500 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="lavabo";
      var imagename=current_frame;
      console.log("Clicked on toilet, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>291 && last_click[0]<394 && last_click[1]>183 && last_click[1]<500 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="puerta";
      var imagename=current_frame;
      console.log("Clicked on door, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajol";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>297 && last_click[0]<489 && last_click[1]>31 && last_click[1]<128 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="desvan";
      var imagename=current_frame;
      console.log("Clicked up, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "desvan":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pasillo";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "lavabo":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pasillo";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "taquillas":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajor";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "bajor":
    if(last_click[0]>420 && last_click[0]<679 && last_click[1]>185 && last_click[1]<417 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="taquillas";
      var imagename=current_frame;
      console.log("Clicked in lockers, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>732 && last_click[0]<800 && last_click[1]>184 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobr";
      var imagename=current_frame+statusd.bajobrlight;
      console.log("Clicked right, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<50 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajoc";
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "bano":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>400 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajol";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>311 && last_click[0]<386 && last_click[1]>59 && last_click[1]<103 && processed==0 && inventory.flashlight==1){
      ctx.clearRect(0,0,800,600);
      current_frame="agujero";
      var imagename=current_frame;
      console.log("Clicked in hole, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("I bet there's something there. Probably spiders.")
      processed=1;
    }
    break;

    case "agujero":
    if(last_click[0]>266 && last_click[0]<594 && last_click[1]>247 && last_click[1]<419 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="agujero";
      if (inventory.smallkey==0){
        inventory.smallkey=1
        writemessage("A small key! And spiders!")
      }
      else {
        writemessage("Not putting my hand there again")
      }
      var imagename=current_frame;
      console.log("Clicked on hole, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bano";
      var imagename=current_frame+inventory.flashlight;
      console.log("Clicked back, loading "+imagename);
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
    if(last_click[0]>483 && last_click[0]<511 && last_click[1]>292 && last_click[1]<351 && processed==0 && inventory.flashlight==1){
      ctx.clearRect(0,0,800,600);
      current_frame="floppy";
      var imagename=current_frame+statusd.floppyopen;
      console.log("Clicked creepy place "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      if (statusd.floppyopen==0){writemessage("What")}
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
    if(last_click[0]>50 && last_click[0]<250 && last_click[1]>145 && last_click[1]<431 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajomesa";
      var imagename=current_frame;
      console.log("Clicked table, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("It's just a table")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<50 && last_click[1]>0 && last_click[1]<560 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobl";
      var imagename=current_frame;
      console.log("Clicked left, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajor";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "floppy":
    if(last_click[0]>413 && last_click[0]<464 && last_click[1]>394 && last_click[1]<444 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="floppy";
      if (inventory.smallkey==1 && statusd.floppyopen==0){
        statusd.floppyopen=1
        inventory.allenkey=1
        inventory.smallkey=0
        writemessage ("dah dah dah daaaaaaah")
      }
      else if (inventory.smallkey==0){
        writemessage("It's locked")
      }
      else if (statusd.floppyopen==1){
        writemessage("It's already open")
      }
      var imagename=current_frame+statusd.floppyopen;
      console.log("Clicked floppies place "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>0 && last_click[1]<100 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobr";
      var imagename=current_frame+statusd.bajobrlight;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>252 && last_click[0]<402 && last_click[1]>238 && last_click[1]<326 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="floppy";
      if (statusd.floppyopen==0){
        writemessage("How on earth...")
      }
      else {
        writemessage("I won't ask")
      }
      var imagename=current_frame+statusd.floppyopen;
      console.log("Clicked key, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "puerta":
    if(last_click[0]>313 && last_click[0]<370 && last_click[1]>480 && last_click[1]<519 && processed==0){
      ctx.clearRect(0,0,800,600);
      if (inventory.flashlight==0){
        current_frame="puerta";
        var imagename=current_frame;
        console.log("Clicked on lock, loading "+imagename);
        writemessage("I can't see a thing")
      }
      else{
        current_frame="cerrojo";
        var imagename=current_frame+statusd.cerrojokey+statusd.cerrojoopen;
        console.log("Clicked on lock, loading "+imagename);
        writemessage("The handle is missing!")
      }

      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="pasillo";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "cerrojo":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>500 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="puerta";
      var imagename=current_frame;
      console.log("Clicked back, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    if(last_click[0]>411 && last_click[0]<443 && last_click[1]>295 && last_click[1]<331 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="cerrojo";
      if (statusd.cerrojokey==0 && inventory.allenkey==1){
        statusd.cerrojokey=1
        inventory.allenkey=0
        writemessage("It fits perfectly")
      }
      else if (statusd.cerrojokey==1){
        statusd.cerrojoopen=1
        writemessage("FIN")
      }
      else if (inventory.allenkey==0){
        writemessage("I have nothing to pull the bolt")
      }
      var imagename=current_frame+statusd.cerrojoopen+statusd.cerrojokey;
      console.log("Clicked lock, loading "+imagename);
      ctx.drawImage(eval(imagename),0,30);
      writemessage("")
      processed=1;
    }
    break;

    case "bajomesa":
    if(last_click[0]>0 && last_click[0]<800 && last_click[1]>400 && last_click[1]<565 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="bajobr";
      var imagename=current_frame+statusd.bajobrlight;
      console.log("Clicked back "+imagename);
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
    if(last_click[0]>561 && last_click[0]<703 && last_click[1]>244 && last_click[1]<336 && processed==0){
      ctx.clearRect(0,0,800,600);
      current_frame="escaleratrastos";
      if (inventory.ttool==0){
        inventory.ttool=1
        writemessage("A wiper bristle! I need that")
      }
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
  console.log(current_frame,last_click[0],last_click[1]);
  
}

function writeinventory(){

  inventorya=[]
  invstring=""
  if (inventory.flashlight==1){inventorya.push("Flashlight")}
  if (inventory.lockpick==1){inventorya.push("Pick")}
  if (inventory.ttool==1){inventorya.push("T. tool")}
  if (inventory.smallkey==1){inventorya.push("Key")}
  if (inventory.allenkey==1){inventorya.push("Allen k.")}
  for (i=0; i<inventorya.length; i++){
    if (i==inventorya.length-1){
      invstring+=inventorya[i]
    }
    else{
      invstring+=(inventorya[i]+", ")
    }
  ctx.fillText("INVENTORY: "+invstring,400,585)
  }
}

function writemessage(string){

  ctx.fillText(string,20,585)
}

//Loader
// Resource list
items=[
"./images/agujero.png",//   
"./images/bajobr1.png",//   
"./images/bajor.png",//      
"./images/cerrojo01.png",    
"./images/escaleratrastos.png",//  
"./images/pegatinas.png",//
"./images/bajobesc.png",//  
"./images/bajoc.png",//     
"./images/bano0.png",//      
"./images/cerrojo11.png",    
"./images/estudio.png",//          
"./images/puerta.png",//
"./images/bajobl.png",//    
"./images/bajol.png",//     
"./images/bano1.png",//      
"./images/desvan.png",//       
"./images/lavabo.png",//           
"./images/taquillas.png",//
"./images/bajobr0.png",//   
"./images/bajomesa.png",//  
"./images/cerrojo00.png",  
"./images/escaleratop.png",//  
"./images/menu.png",//
"./images/books.png",
"./images/cabeza.png",//
"./images/electro0.png",//
"./images/electro1.png",//
"./images/floppy0.png",//
"./images/floppy1.png",//
"./images/glassback.png",//
"./images/guitar.png",
"./images/locc0.png",//
"./images/locc1.png",//
"./images/loccer.png",//
"./images/loccris.png",//
"./images/locf.png",//
"./images/locl.png",//
"./images/locpuerta0.png",//
"./images/locpuerta1.png",//
"./images/locr0.png",//
"./images/locr1.png",//
"./images/mesa3d.png",//
"./images/mochila.png",//
"./images/pcpapeles.png",//
"./images/pcs0.png",//
"./images/pcs1.png",//
"./images/pcs2.png",//
"./images/pcs3.png",//
"./images/pcs4.png",//
"./images/powertools.png",//
"./images/prusa.png",//
"./images/shelvesbl.png",//
"./images/shelvesbr.png",//
"./images/shelvestl.png",//
"./images/shelvestr.png",//
"./images/storagea.png",//
"./images/storageb.png",//
"./images/tarjetab.png",//
"./images/tarjetaf.png",//
"./images/tarjetasuelo.png",//
"./images/tripas.png",//
"./images/ventana.png",//
"./images/wake1.png",
"./images/wake2.png",
"./images/pasillo.png"//
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
