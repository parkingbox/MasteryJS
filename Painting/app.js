const canvas = document.getElementById("jsCanvas");

let painting = false;


function stopPainting(event) {
  painting = false;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function onMouseLeave(event) {
  painting = false;
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousemove", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
}