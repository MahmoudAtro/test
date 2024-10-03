function showImage() {
  var image = document.getElementById("image");
  image.style.display = "block";
}

let counter = 0;
function generateRandomButton() {
  counter++;
  if (counter == 5) {
    showImage();
    return;
  }

  const containerWidth = 500;
  const containerHeight = 700;

  const newButton = document.createElement("button");
  newButton.textContent = "انقري هنا";

  const randomX = Math.random() * (containerWidth - 100);
  const randomY = Math.random() * (containerHeight - 50);

  newButton.style.left = `${randomX}px`;
  newButton.style.top = `${randomY}px`;

  document.body.appendChild(newButton);

  newButton.onclick = generateRandomButton;
}
