const containerDiv = document.getElementById("container");
const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", refreshCanvas);
createCanvas();



function createCanvas(){
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }  
  
  for(let i = 0; i < 256; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixels";
    pixel.addEventListener("mouseover", (event => {pixel.classList.add("color");}));
    containerDiv.appendChild(pixel);
  }
}

function refreshCanvas() {
  createCanvas();
}
