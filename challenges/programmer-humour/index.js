const api = "https://xkcd.now.sh/?comic=latest";
const wrapper = document.getElementById("wrapper");

const displayComic = () => {
  fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const renderComic = document.createElement("img");
    wrapper.appendChild(renderComic);
    renderComic.src = data.img;
    renderComic.alt = data.alt;
  })
  .catch((error) => console.error("Failed to connect", error))
}

displayComic();