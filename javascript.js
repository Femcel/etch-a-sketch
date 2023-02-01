const containerDiv = document.getElementById("container");
for(let i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixel.className = "pixels";
  pixel.addEventListener("mouseover", (event => {
    pixel.classList.add("color");

  }));
  containerDiv.appendChild(pixel);
}
