const api = "https://dog.ceo/api/breeds/image/random";
const imageGenerator = document.getElementById("image-generator");
const randomImg = document.getElementById("randomImage");
const reset = document.getElementById("reset");

const generateRandomImg = () => {
  fetch(api)
  .then((response) => response.json())
  .then(data => {
    let list = document.createElement("li");
    let image = document.createElement("img");
    image.setAttribute("id", "image");
    image.src = data.message;
    console.log(data.message);
    image.alt = "cute doggo pic";
    list.append(image);
    imageGenerator.append(list);
  })
  .catch((error) => 
    console.error("Error: Failed to load pictures", error));
}

randomImg.addEventListener("click", generateRandomImg);
reset.addEventListener("click", () => {
  imageGenerator.innerHTML = window.onload;
  randomImg.style.backgroundColor = "#f5cac3";
  reset.style.backgroundColor = "#f5cac3";
})