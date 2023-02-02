const containerDiv = document.getElementById("container");
const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", refreshCanvas);

let canvasSize = 16;
let r = 0;
let g = 0;
let b = 0;

createCanvas(canvasSize);

function createCanvas(canvasSize){
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }  
  containerDiv.setAttribute('style', 'grid-template-columns: repeat(' + canvasSize + ', 1fr)');

  for(let i = 0; i < canvasSize ** 2; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixels";
    pixel.addEventListener("mouseover", (event => {
      pixel.classList.add("color");
      r = Math.random() * 255;
      g = Math.random() * 255;
      b = Math.random() * 255;
      pixel.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b});`);
    }));
    
    
    containerDiv.appendChild(pixel);
  }
}

function refreshCanvas() {
  canvasSize = prompt("Type in the desired canvas size");
  createCanvas(canvasSize);
}
