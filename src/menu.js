import pizzaImg from "./images/pizza.png";
import steakImg from "./images/steak.png";
import spaghettiImg from "./images/spaghetti.png";
import burgerImg from "./images/burger.png";
import chickenImg from "./images/chicken.png";
import frenchFriesImg from "./images/french-fries.png";

import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';
import { Navigation } from "swiper/modules";

const contentContainer = document.getElementById("content");

export const loadMenu = () => {

  // Create & configure swiper
  const swiperEl = document.createElement("div");
  swiperEl.classList.add("swiper", "mySwiper");

  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");

  const slides = [
    {
      img: pizzaImg,
      name: "PIZZA",
      desc: "A crispy golden crust, rich tomato sauce, and layers of gooey, melted cheese. Every bite is a perfect balance of flavor—savory, smoky, and irresistibly satisfying. Topped with the finest ingredients and baked to perfection, this is pizza at its best."
    },
    {
      img: spaghettiImg,
      name: "SPAGHETTI",
      desc: "Delicate, al dente pasta coated in a rich, savory sauce—whether it's a classic marinara, creamy Alfredo, or a bold, meaty ragù. Every bite is a harmony of flavors, with fragrant herbs, premium ingredients, and just the right touch of seasoning. Simple, satisfying, and endlessly delicious."
    },
    {
      img: steakImg,
      name: "STEAK",
      desc: "A perfectly seared crust, locking in rich, juicy flavors. Tender, buttery, and bursting with smoky depth, each bite melts effortlessly. Seasoned to perfection and grilled just right, this is steak at its finest—bold, satisfying, and unforgettable."
    },
    {
      img: burgerImg,
      name: "BURGER",
      desc: "Soft, toasted buns embracing a juicy, flavorful patty, layered with melted cheese, crisp lettuce, and fresh toppings. Every bite is a perfect balance of smoky, savory, and mouthwatering goodness. Bold flavors, premium ingredients, and pure indulgence—this is what a burger should be."
    },
    {
      img: chickenImg,
      name: "GRILLED CHICKEN",
      desc: "Perfectly grilled to golden perfection, each bite is tender, juicy, and infused with a smoky, charred aroma. Seasoned with the finest spices, balancing bold flavors with a subtle crispiness. Simple, savory, and irresistibly satisfying."
    },
    {
      img: frenchFriesImg,
      name: "FRENCH FRIES",
      desc: "Perfectly fried to a golden crisp, each bite delivers a satisfying crunch with a soft, fluffy center. Lightly salted and irresistibly delicious, these fries are the perfect balance of texture and flavor. One bite is never enough."
    }
  ];
  
  slides.forEach(({ img, name, desc }) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide", "menuContainer");

    const imgEl = document.createElement("img");
    imgEl.classList.add("menuContainerImg");
    imgEl.src = img;
    imgEl.alt = `${name} Image`;

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menuInfo");

    const menuName = document.createElement("p");
    menuName.classList.add("menuName");
    menuName.textContent = name;

    const hr = document.createElement("hr");

    const menuDesc = document.createElement("p");
    menuDesc.classList.add("menuDesc");
    menuDesc.textContent = desc;

    menuInfo.append(menuName, hr, menuDesc);
    slide.append(imgEl, menuInfo);
    swiperWrapper.appendChild(slide);
  });

  // Navigation Buttons
  const swiperBtnNext = document.createElement("div");
  const swiperBtnPrev = document.createElement("div");
  const swiperBtnIconRight = document.createElement("i");
  const swiperBtnIconLeft  = document.createElement("i");

  swiperBtnNext.classList.add("swiper-button-next");
  swiperBtnPrev.classList.add("swiper-button-prev");
  swiperBtnIconRight.classList.add("fa-solid", "fa-caret-right", "fa-2x");
  swiperBtnIconLeft.classList.add("fa-solid", "fa-caret-left", "fa-2x");

  swiperBtnNext.appendChild(swiperBtnIconRight);
  swiperBtnPrev.appendChild(swiperBtnIconLeft);
  swiperEl.appendChild(swiperWrapper);
  swiperEl.appendChild(swiperBtnNext);
  swiperEl.appendChild(swiperBtnPrev);
  contentContainer.appendChild(swiperEl);
  
  const swiper = new Swiper('.mySwiper', {
    modules: [Navigation],
    slidesPerView: 1,
    loop:true,
    spaceBetween: 100,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

};