var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var color = "blue";
var line_width = 2;
var last_pos_x, last_pos_y;
var current_pos_x, current_pos_y;
var newWidth = screen.width - 70;
var newHeight = screen.height - 300;

if(screen.width < 90){
    canvas.width = newWidth;
    canvas.height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",ready);
function ready(e){
    last_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    last_pos_y = e.touches[0].clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    line_width = document.getElementById("width").value;
}

canvas.addEventListener("touchmove",draw);
function draw(e){
    current_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    current_pos_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_pos_x,last_pos_y);
    ctx.lineTo(current_pos_x,current_pos_y);
    ctx.stroke();
    last_pos_x = current_pos_x;
    last_pos_y = current_pos_y;
}

function clear_canvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}