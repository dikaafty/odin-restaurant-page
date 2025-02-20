import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import { loadAbout } from "./about";
import "./styles.css";

// Make home section appears first
loadHome();

document.querySelectorAll("nav button").forEach((btn) => {
  btn.addEventListener("click", function() {
    document.getElementById("content").innerHTML = "";

    if(this.innerText === "Menu") {
      loadMenu();
    } else if(this.innerText === "Contact") {
      loadContact();
    } else if(this.innerText === "About") {
      loadAbout();
    }

  });
});

document.querySelector(".brandName").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";

  loadHome();

  // Add event listener to see menu button again after reseting home section
  document.querySelector(".seeMenuBtn").addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
  
    loadMenu();
  });
});

document.querySelector(".seeMenuBtn").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";

  loadMenu();
});