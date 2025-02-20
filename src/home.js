import pizzaImg from "./images/pizza.png";
import steakImg from "./images/steak.png";
import spaghettiImg from "./images/spaghetti.png";

const contentContainer = document.getElementById("content");

export const loadHome = () => {

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");

  const imgEl = document.createElement("img");
  imgEl.src = pizzaImg;
  imgEl.classList.add("heroImg");
  imgEl.draggable = "false";

  const sloganContainer = document.createElement("div");
  sloganContainer.classList.add("sloganContainer");

  const slogan = document.createElement("p");

  slogan.classList.add("one");

  slogan.textContent = "Flavor that hits, everything else fades.";

  sloganContainer.appendChild(slogan);

  const seeMenuBtn = document.createElement("button");
  seeMenuBtn.classList.add("btn-slice", "seeMenuBtn");
  
  const divTop = document.createElement("div");
  const divBottom = document.createElement("div");
  const spanTop = document.createElement("span");
  const spanBottom = document.createElement("span");

  divTop.classList.add("top");
  divBottom.classList.add("bottom");
  spanTop.textContent = "SEE MENU";
  spanBottom.textContent = "SEE MENU";

  divTop.appendChild(spanTop);
  divBottom.appendChild(spanBottom);

  seeMenuBtn.appendChild(divTop);
  seeMenuBtn.appendChild(divBottom);

  homeContainer.appendChild(imgEl);
  homeContainer.appendChild(sloganContainer);
  homeContainer.appendChild(seeMenuBtn);

  contentContainer.appendChild(homeContainer);

  changeImgSource();
};

const changeImgSource = () => {
  const images = [
    steakImg,
    spaghettiImg,
    pizzaImg,
];

  let index =  0;
  const imgEl = document.querySelector(".heroImg");

  function changeImg() {
      imgEl.style.opacity = 0; // Fade out

      setTimeout(() => {
          index = (index + 1) % images.length; // Loop back when reaching the end
          imgEl.src = images[index]; // Update the image source
          imgEl.style.opacity = 1; // Fade in
      }, 2000); // Wait for fade-out to complete before changing image
  }

  setInterval(changeImg, 7000);
};