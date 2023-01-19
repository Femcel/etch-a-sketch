const containerDiv = document.getElementById("container");
for(let i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixel.className = "pixels";
  containerDiv.appendChild(pixel);
}