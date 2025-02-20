import imgPattern from "./images/img-pattern.png";

const contentContainer = document.getElementById("content");

export const loadContact = () => {
  // Create contact containers
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contactWrapper");

  // Create contact left and its children
  const contactLeft = document.createElement("div");
  contactLeft.classList.add("contactLeft");

  const contactLeftInfo = document.createElement("div");
  const contactLeftTitle = document.createElement("p");
  const contactLeftDesc = document.createElement("p");

  contactLeftInfo.classList.add("contactLeftInfo");
  contactLeftTitle.classList.add("contactLeftTitle");
  contactLeftDesc.classList.add("contactLeftDesc");

  contactLeftTitle.textContent = "Virtual Reservation";
  // Create contact left desc text content
  const desc1 = document.createTextNode("Place a booking ");
  const span = document.createElement("span");
  span.classList.add("number");
  span.textContent = "+77-117-5099";
  const desc2 = document.createTextNode(" or complete the order form.");
  // Append text content to contact left desc
  contactLeftDesc.appendChild(desc1);
  contactLeftDesc.appendChild(span);
  contactLeftDesc.appendChild(desc2);

  // Create contact input container and its children ( still child of contact left )
  const contactInputContainer = document.createElement("div");
  contactInputContainer.classList.add("contactInputContainer");

  const customerNameInput = document.createElement("input");
  customerNameInput.type = "text";
  customerNameInput.name = "customerName";
  customerNameInput.id = "customerName";
  customerNameInput.classList.add("customerName");
  customerNameInput.placeholder = "Your Name";

  const customerNumberInput = document.createElement("input");
  customerNumberInput.type = "tel";
  customerNumberInput.name = "customerNumber";
  customerNumberInput.id = "customerNumber";
  customerNumberInput.classList.add("customerNumber");
  customerNumberInput.placeholder = "Phone Number";

  const bookDateInput = document.createElement("input");
  bookDateInput.type = "date";
  bookDateInput.name = "bookDate";
  bookDateInput.id = "bookDate";
  bookDateInput.classList.add("bookDate");

  const bookTimeSelect = document.createElement("select");
  bookTimeSelect.name = "bookTime";
  bookTimeSelect.id = "bookTime";
  bookTimeSelect.classList.add("bookTime");

  // Create book time select options
  const options = [
    {
      opt: "09:00 AM",
    },
    {
      opt: "10:00 AM",
    },
    {
      opt: "11:00 AM",
    },
    {
      opt: "12:00 PM",
    },
    {
      opt: "01:00 PM",
    },
    {
      opt: "02:00 PM",
    },
    {
      opt: "03:00 PM",
    },
    {
      opt: "04:00 PM",
    },
    {
      opt: "05:00 PM",
    },
    {
      opt: "06:00 PM",
    },
    {
      opt: "07:00 PM",
    },
    {
      opt: "08:00 PM",
    },
    {
      opt: "09:00 PM",
    },
    {
      opt: "10:00 PM",
    },
    {
      opt: "11:00 PM",
    },
  ];

  options.forEach(({ opt }) => {
    const optionEl = document.createElement("option");
    optionEl.value = opt;
    optionEl.textContent = opt;

    if(opt === "09:00 AM") {
      optionEl.selected = true;
    }

    // Append option to select
    bookTimeSelect.appendChild(optionEl);
  });

  const message = document.createElement("textarea");
  message.name = "message";
  message.id = "message";
  message.classList.add("message");
  message.placeholder = "Message";

  const bookTableBtn = document.createElement("button");
  bookTableBtn.classList.add("bookTableBtn");
  bookTableBtn.textContent = "BOOK A TABLE";

  // Create contact right and its children
  const contactRight = document.createElement("div");
  contactRight.classList.add("contactRight");

  const contactRightTitle = document.createElement("p");
  contactRightTitle.classList.add("contactRightTitle");
  contactRightTitle.textContent = "Contact Us";

  const hrTopOne = document.createElement("hr");
  const hrTopTwo = document.createElement("hr");
  hrTopOne.classList.add("hrTop");
  hrTopTwo.classList.add("hrTop");

  const hrBottomOne = document.createElement("hr");
  const hrBottomTwo = document.createElement("hr");
  hrBottomOne.classList.add("hrBottom");
  hrBottomTwo.classList.add("hrBottom");

  const contactNumber = document.createElement("div");
  contactNumber.classList.add("contactNumber");

  const contactNumberDesc = document.createElement("p");
  contactNumberDesc.textContent = "Place A Booking";

  const restaurantNumber = document.createElement("p");
  restaurantNumber.classList.add("restaurantNumber");
  restaurantNumber.textContent = "+77-117-5099";

  const location = document.createElement("div");
  location.classList.add("location");

  const locationTitle = document.createElement("p");
  locationTitle.textContent = "Location";

  const locationAddress = document.createElement("p");
  locationAddress.classList.add("address");
  locationAddress.textContent = "Chase Road 11, Browncansas 77177, USA";

  // Appending
  contactLeftInfo.appendChild(contactLeftTitle);
  contactLeftInfo.appendChild(contactLeftDesc);

  contactInputContainer.appendChild(customerNameInput);
  contactInputContainer.appendChild(customerNumberInput);
  contactInputContainer.appendChild(bookDateInput);
  contactInputContainer.appendChild(bookTimeSelect);
  contactInputContainer.appendChild(message);
  contactInputContainer.appendChild(bookTableBtn);

  contactLeft.appendChild(contactLeftInfo);
  contactLeft.appendChild(contactInputContainer);

  contactNumber.appendChild(contactNumberDesc);
  contactNumber.appendChild(restaurantNumber);

  location.appendChild(locationTitle);
  location.appendChild(locationAddress);

  contactRight.appendChild(contactRightTitle);
  contactRight.appendChild(hrTopOne);
  contactRight.appendChild(hrBottomOne);
  contactRight.appendChild(contactNumber);
  contactRight.appendChild(hrTopTwo);
  contactRight.appendChild(hrBottomTwo);
  contactRight.appendChild(location);

  contactWrapper.appendChild(contactLeft);
  contactWrapper.appendChild(contactRight);

  contactContainer.appendChild(contactWrapper);

  contentContainer.appendChild(contactContainer);
};