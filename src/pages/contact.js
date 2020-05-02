
function createContactpage (bg) {
  let contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  contactContainer.style.background = "url("+bg.src+")" +
      " no-repeat center center";
  let contact = document.createElement("div");
  contact.classList.add("contact");
  let contactTitle = document.createElement("div");
  contactTitle.classList.add("contact-types");
  let contactTypes = document.createElement("div");
  contactTypes.classList.add("contact-types");


  let location = document.createElement("div");
  location.classList.add("location");
  let locationTitle = document.createElement("h2")
  locationTitle.innerText = "Location";
  location.appendChild(locationTitle)
  let locationAddress = document.createElement("p");
  locationAddress.innerText = "This doesn't exist, 55, Someplace, Another place."
  location.appendChild(locationAddress);

  let phone = document.createElement("div");
  phone.classList.add("phone");
  let phoneTitle = document.createElement("h2");
  phoneTitle.innerText = "Phone";
  phone.appendChild(phoneTitle);
  let phoneNumber = document.createElement("p");
  phoneNumber.innerText = "+99 (99) 99999-9999";
  phone.appendChild(phoneNumber);

  let businessHours = document.createElement("div");
  businessHours.classList.add("business-hours");
  let businessHoursTitle = document.createElement("h2");
  businessHoursTitle.innerText = "Business hours";
  businessHours.appendChild(businessHoursTitle);
  let businessHoursTime = document.createElement("p");
  businessHoursTime.innerText = "Everyday from 23:59 to 00:00";
  businessHours.appendChild(businessHoursTime);



  contactTypes.appendChild(location);
  contactTypes.appendChild(phone);
  contactTypes.appendChild(businessHours);
  contact.appendChild(contactTitle);
  contact.appendChild(contactTypes);
  contactContainer.appendChild(contact);
  document.querySelector(".container").insertBefore(contactContainer,
     document.querySelector(".footer-container"));
}


export {createContactpage as default};
