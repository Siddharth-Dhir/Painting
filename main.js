var Mevent ="Empty";
var LastX, LastY;
Canvas = document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");
color ="Black";
lineWidth=1;
Canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color= document.getElementById("Color").value;
    lineWidth= document.getElementById("Width").value;
    Mevent="mouseDown";

}

Canvas.addEventListener("mousemove",MyMouseMove);
function MyMouseMove(e){
    currentX=e.clientX - Canvas.offsetLeft;
    currentY=e.clientY - Canvas.offsetTop;
    if(Mevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        console.log("Last Position Of X And Y Are= ");
        console.log("X= " +LastX +" Y= " + LastY);
        ctx.moveTo(LastX,LastY);
        console.log("Current Position Of X And Y Are= ");
        console.log("X= " +currentX +" Y= " + currentY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();


    }
    LastX= currentX;
    LastY= currentY;


}


Canvas.addEventListener("mouseup", MyMouseUp);
function MyMouseUp(e){
    Mevent="mouseUp";
}
Canvas.addEventListener("mouseleave", MyMouseLeave);

function MyMouseLeave(e){
    Mevent="mouseLeave";
}
function Clear(){
    ctx.clearRect(0,0,ctx.Canvas.width,ctx.canvas.height);
}