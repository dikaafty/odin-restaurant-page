import restaurantRoom from "./images/restaurant-room.jpeg";

const contentContainer = document.getElementById("content");

export const loadAbout = () => {
  // Create about containers 
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("aboutContainer");

  const aboutWrapper = document.createElement("div");
  aboutWrapper.classList.add("aboutWrapper");
  
  // Create about and its children
  const about = document.createElement("div");
  about.classList.add("about");

  const hrTopOne = document.createElement("hr");
  const hrTopTwo = document.createElement("hr");
  hrTopOne.classList.add("hrTop");
  hrTopTwo.classList.add("hrTop");

  const hrBottomOne = document.createElement("hr");
  const hrBottomTwo = document.createElement("hr");
  hrBottomOne.classList.add("hrBottom");
  hrBottomTwo.classList.add("hrBottom");

  const aboutTitle = document.createElement("p");
  aboutTitle.classList.add("aboutTitle");
  aboutTitle.textContent = "A Bite of Our History";

  const aboutSlogan = document.createElement("p");
  aboutSlogan.classList.add("aboutSlogan");
  aboutSlogan.textContent = "Flavors You Can’t Resist.";

  const aboutExplanation = document.createElement("p");
  aboutExplanation.classList.add("aboutExplanation");
  aboutExplanation.textContent = "EAT. is all about crave-worthy comfort food—from juicy burgers and crispy fries to cheesy pizzas and perfectly grilled steaks. Every bite is packed with bold flavors and satisfying indulgence, made for those who love to eat without limits. Simple. Delicious. Unforgettable.";

  // Create about picture container and its child
  const aboutPictureContainer = document.createElement("div");
  aboutPictureContainer.classList.add("aboutPictureContainer");

  const aboutPicture = document.createElement("img");
  aboutPicture.src = restaurantRoom;
  aboutPicture.alt = "Restaurant Room";

  // Appending
  about.append(hrTopOne, hrBottomOne, aboutTitle, aboutSlogan, aboutExplanation, 
    hrTopTwo, hrBottomTwo);

  aboutPictureContainer.appendChild(aboutPicture);

  aboutWrapper.append(about, aboutPictureContainer);

  aboutContainer.appendChild(aboutWrapper);

  contentContainer.appendChild(aboutContainer);
};