const containerDiv = document.getElementById("container");
const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", refreshCanvas);

let canvasSize = 16;

createCanvas(canvasSize);

function createCanvas(canvasSize){
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }  


  for(let i = 0; i < canvasSize ** 2; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixels";
    pixel.addEventListener("mouseover", (event => {pixel.classList.add("color");}));
    containerDiv.appendChild(pixel);
  }
}

function refreshCanvas() {
  canvasSize = prompt("Type in the desired canvas size");
  createCanvas(canvasSize);
}
