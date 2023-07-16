// FORM STRUCTURE
const body = document.body;

const container = document.createElement("div");
container.className = "container";

const form = document.createElement("form");
form.classList = "flex-column";
form.id = "order_form";

const userInfo = document.createElement("div");
userInfo.classList = "user-info";

const payOptions = document.createElement("div");
payOptions.classList = "pay-options";

const giftOptions = document.createElement("div");
giftOptions.className = "gift-options";

const button = document.createElement("div");
button.className = "button";

// First name
const firstNameDiv = document.createElement("div");
firstNameDiv.classList = "user-info__field";
const firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("for", "name");
firstNameLabel.textContent = "First name: ";
const firstNameInput = document.createElement("input");
firstNameInput.type = "text";
firstNameInput.id = "name";
firstNameInput.name = "name";
firstNameInput.placeholder = "Enter your first name";
firstNameInput.addEventListener("input", function () {
  validateFirstName(firstNameInput);
  maxLength(firstNameInput);
});
firstNameInput.required = true;
firstNameInput.classList.add("input");
const firstNameErrorMessage = document.createElement("span");
firstNameErrorMessage.classList.add("error_message");
// for screen reader users
firstNameErrorMessage.setAttribute("aria-live", "polite");

firstNameDiv.append(firstNameLabel, firstNameInput, firstNameErrorMessage);

// Last name
const lastNameDiv = document.createElement("div");
lastNameDiv.classList = "user-info__field";
const lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "surname");
lastNameLabel.textContent = "Last name: ";
const lastNameInput = document.createElement("input");
lastNameInput.type = "text";
lastNameInput.id = "surname";
lastNameInput.name = "surname";
lastNameInput.placeholder = "Enter your last name";
lastNameInput.addEventListener("input", function () {
  validateLastName();
  maxLength(lastNameInput);
});
lastNameInput.required = true;
lastNameInput.classList.add("input");
const lastNameErrorMessage = document.createElement("span");
lastNameErrorMessage.classList.add("error_message");

lastNameDiv.append(lastNameLabel, lastNameInput, lastNameErrorMessage);

// Delivery date
const dateDiv = document.createElement("div");
dateDiv.classList = "user-info__field";
const dateLabel = document.createElement("label");
dateLabel.setAttribute("for", "date");
dateLabel.textContent = "Delivery date: ";
const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "date";
dateInput.name = "date";
dateInput.addEventListener("focusout", validateDate);
dateInput.required = true;
dateInput.classList.add("input");
const dateErrorMessage = document.createElement("span");
dateErrorMessage.classList.add("error_message");

dateDiv.append(dateLabel, dateInput, dateErrorMessage);

// Street name
const streetDiv = document.createElement("div");
streetDiv.classList = "user-info__field";
const streetLabel = document.createElement("label");
streetLabel.setAttribute("for", "street");
streetLabel.textContent = "Street name: ";
const streetInput = document.createElement("input");
streetInput.type = "text";
streetInput.id = "street";
streetInput.name = "street";
streetInput.addEventListener("input", function () {
  validateStreet();
  maxLength(streetInput);
});
streetInput.required = true;
streetInput.classList.add("input");
const streetErrorMessage = document.createElement("span");
streetErrorMessage.classList.add("error_message");

streetDiv.append(streetLabel, streetInput, streetErrorMessage);

// House number
const houseDiv = document.createElement("div");
houseDiv.classList = "user-info__field";

const houseLabel = document.createElement("label");
houseLabel.setAttribute("for", "house");
houseLabel.textContent = "House number: ";

const houseInput = document.createElement("input");
houseInput.type = "text";
houseInput.id = "house";
houseInput.name = "house";
houseInput.classList.add("input");
houseInput.required = true;
houseInput.addEventListener("input", function () {
  validateHouse();
  maxLength(houseInput);
});

const houseErrorMessage = document.createElement("span");
houseErrorMessage.classList.add("error_message");

houseDiv.append(houseLabel, houseInput, houseErrorMessage);

// Flat number
const flatDiv = document.createElement("div");
flatDiv.classList = "user-info__field";

const flatLabel = document.createElement("label");
flatLabel.setAttribute("for", "flat");
flatLabel.textContent = "Flat number: ";

const flatInput = document.createElement("input");
flatInput.type = "text";
flatInput.id = "flat";
flatInput.name = "flat";
flatInput.classList.add("input");
flatInput.required = true;
flatInput.addEventListener("input", function () {
  validateFlat();
  maxLength(flatInput);
});

const flatErrorMessage = document.createElement("span");
flatErrorMessage.classList.add("error_message");

flatDiv.append(flatLabel, flatInput, flatErrorMessage);

// Payment options
const paymentLabel = document.createElement("label");
paymentLabel.setAttribute("for", "payment");
paymentLabel.innerHTML = "<h4>Pay with: </h4>";

const cashDiv = document.createElement("div");
const cashLabel = document.createElement("label");
cashLabel.setAttribute("for", "cash");
cashLabel.textContent = "cash";
const cashInput = document.createElement("input");
cashInput.type = "radio";
cashInput.id = "cash";
cashInput.name = "payment";
cashDiv.append(cashLabel, cashInput);

const cardDiv = document.createElement("div");
const cardLabel = document.createElement("label");
cardLabel.setAttribute("for", "card");
cardLabel.textContent = "card";
const cardInput = document.createElement("input");
cardInput.type = "radio";
cardInput.id = "card";
cardInput.name = "payment";
cardInput.checked = "true";
cardDiv.append(cardLabel, cardInput);

// Gift options
const giftLabelDiv = document.createElement("div");
giftLabelDiv.innerHTML = "<h4>Please choose 2 gifts</h4>";

const presentDiv = document.createElement("div");
const presentLabel = document.createElement("label");
presentLabel.setAttribute("for", "present");
presentLabel.textContent = "Pack as a gift";
const presentInput = document.createElement("input");
presentInput.type = "checkbox";
presentInput.id = "present";
presentInput.name = "present";
presentInput.value = "present";
presentDiv.append(presentLabel, presentInput);

const postcardDiv = document.createElement("div");
const postcardLabel = document.createElement("label");
postcardLabel.setAttribute("for", "postcard");
postcardLabel.textContent = "Add postcard";
const postcardInput = document.createElement("input");
postcardInput.type = "checkbox";
postcardInput.id = "postcard";
postcardInput.name = "postcard";
postcardInput.value = "postcard";
postcardDiv.append(postcardLabel, postcardInput);

const discountDiv = document.createElement("div");
const discountLabel = document.createElement("label");
discountLabel.setAttribute("for", "discount");
discountLabel.textContent = "Next purchase discount 2%";
const discountInput = document.createElement("input");
discountInput.type = "checkbox";
discountInput.id = "discount";
discountInput.name = "discount";
discountInput.value = "discount";
discountDiv.append(discountLabel, discountInput);

const merchDiv = document.createElement("div");
const merchLabel = document.createElement("label");
merchLabel.setAttribute("for", "merch");
merchLabel.textContent = "Branded pen or pencil";
const merchInput = document.createElement("input");
merchInput.type = "checkbox";
merchInput.id = "merch";
merchInput.name = "merch";
merchInput.value = "merch";
merchDiv.append(merchLabel, merchInput);

//Complete order button
const completeButton = document.createElement("button");
completeButton.type = "submit";
completeButton.id = "complete-btn";
completeButton.innerHTML = "Complete order";

// Append fields to div
userInfo.append(
  firstNameDiv,
  lastNameDiv,
  dateDiv,
  streetDiv,
  houseDiv,
  flatDiv
);
payOptions.append(paymentLabel, cashDiv, cardDiv);
giftOptions.append(
  giftLabelDiv,
  presentDiv,
  postcardDiv,
  discountDiv,
  merchDiv
);
button.append(completeButton);

// Append divs to form
form.append(userInfo, payOptions, giftOptions, button);

// Append form to container
container.append(form);

// Append container to body
body.append(container);

///////////////////////
// FORM VALIDATION ///
//////////////////////

// Check if input field is empty
function checkIfEmpty(input) {
  if (isEmpty(input.value.trim())) {
    //set field invalid
    setInvalid(input, `${input.name} must not be empty`);
    return true;
  } else {
    //set field valid
    setValid(input);
    return false;
  }
}

function isEmpty(value) {
  if (value === "") return true;
  return false;
}

// Set input field to valid
function setValid(input) {
  input.className = "valid";
  input.nextElementSibling.innerHTML = "";
}

// Set input field to invalid
function setInvalid(input, message) {
  input.className = "invalid";
  input.nextElementSibling.innerHTML = message;
  input.nextElementSibling.style.color = red;
}

// Check min length
function maxLength(input) {
  if (input.value.length > 15) {
    input.value = input.value.slice(0, 15);
    setInvalid(input, `${input.name} can't be longer than 10 symbols`);
    return false;
  }
  return true;
}

// Check if input field requires conditions
function onlyLetters(input) {
  if (/^[a-zA-Z]+$/.test(input.value)) {
    setValid(input);
    return true;
  } else {
    setInvalid(input, `${input.name} must contain only letters without spaces`);
    return false;
  }
}

function lettersAndNumbers(input) {
  if (/^[a-zA-Z 1-9]+$/.test(input.value)) {
    setValid(input);
    return true;
  } else {
    setInvalid(
      input,
      `${input.name} must contain only letters and numbers more than 0`
    );
    return false;
  }
}

function onlyNumbers(input) {
  if (/^[1-9][0-9]*$/.test(input.value)) {
    setValid(input);
    return true;
  } else {
    setInvalid(input, `${input.name} must contain only positive numbers`);
    return false;
  }
}

function numbersAndDash(input) {
  if (/^[1-9]+[\/\-]?\d*$/.test(input.value)) {
    setValid(input);
    return true;
  } else {
    setInvalid(input, `${input.name} must contain only positive numbers`);
    return false;
  }
}

function nameLength(input) {
  if (input.value.length >= 4) {
    setValid(input);
    return true;
  } else {
    setInvalid(input, `${input.name} must be at least 4 letters long`);
    return false;
  }
}

function surnameLength(input) {
  if (input.value.length >= 5) {
    setValid(input);
    return true;
  } else {
    setInvalid(input, `${input.name} must be at least 5 letters long`);
    return false;
  }
}

function deliveryDate(input) {
  let current = new Date();
  let delivery = new Date(input.value);
  if (delivery > current) {
    setValid(input);
    return true;
  } else {
    setInvalid(input, `${input.name} must be not earlier than tomorrow`);
    return false;
  }
}

// Error message
const errorMessage = document.getElementsByClassName("error_message");

// Error color
const red = "#FF0000";

// Validate firstName field
function validateFirstName() {
  const firstName = document.getElementById("name");
  if (
    checkIfEmpty(firstName) ||
    !nameLength(firstName) ||
    !onlyLetters(firstName)
  )
    return;
  return true;
}

// Validate lastName field
function validateLastName() {
  const lastName = document.getElementById("surname");
  if (
    checkIfEmpty(lastName) ||
    !surnameLength(lastName) ||
    !onlyLetters(lastName)
  )
    return;
  return true;
}

// Validate date field
function validateDate() {
  const date = document.getElementById("date");
  if (checkIfEmpty(date) || !deliveryDate(date)) return;
  return true;
}

// Validate street field
function validateStreet() {
  if (checkIfEmpty(street) || !lettersAndNumbers(street)) return;
  return true;
}

// Validate house field
function validateHouse() {
  //check if empty
  if (checkIfEmpty(houseInput)) return;
  //is if has only letters
  if (!onlyNumbers(houseInput)) return;
  return true;
}

// Validate flat field
function validateFlat() {
  //check if empty
  if (checkIfEmpty(flat)) return;
  //is if has only letters
  if (!numbersAndDash(flat)) return;
  return true;
}

// VALIDATE FORM
form.addEventListener("input", isAllValid);
completeButton.disabled = true;

// check form met the requirements
function isAllValid() {
  function isValid() {
    if (inputsValidity() && giftsValidity()) {
      return false;
    } else {
      return true;
    }
  }
  completeButton.disabled = isValid();
  if (isValid()) {
    completeButton.addEventListener("click", function (event) {
      event.preventDefault();
    });
  } else {
    completeButton.addEventListener("click", orderInfo);
  }
}

// check validity for all required inputs
function inputsValidity() {
  let inputs = document.querySelectorAll("input[required]");
  return Array.from(inputs).every(
    (inp) => inp.validity.valid && inp.value.trim() !== ""
  );
}

// check validity for 2 checkboxes being checked
function giftsValidity() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  return checkboxes.length === 2;
}

// if completeButton is enabled show order info
completeButton.addEventListener("click", orderInfo);

function orderInfo(event) {
  const orderConfirm = document.createElement("div");
  orderConfirm.classList.add("order_confirm");

  const orderConfirm__info = document.createElement("div");
  orderConfirm__info.className = "orderConfirm__info";

  const orderConfirmClose__btn = document.createElement("button");
  orderConfirmClose__btn.className = "orderConfirm__btn";
  orderConfirmClose__btn.innerHTML = "x";

  const order_confirm__header = document.createElement("h2");
  order_confirm__header.innerHTML = "Thank you for your order!";
  const order_confirm__name = document.createElement("p");
  order_confirm__name.innerHTML = `Dear ${firstNameInput.value} ${lastNameInput.value}`;
  const order_confirm__date = document.createElement("p");
  order_confirm__date.innerHTML = `Your purchase will be delivered at ${dateInput.value}`;
  const order_confirm__address = document.createElement("p");
  order_confirm__address.innerHTML = `Delivery address is ${streetInput.value} ${houseInput.value} ${flatInput.value}`;

  const orderConfirmOk__btn = document.createElement("button");
  orderConfirmOk__btn.className = "orderConfirmOk__btn";
  orderConfirmOk__btn.innerHTML = "ok";

  orderConfirm__info.append(
    order_confirm__header,
    order_confirm__name,
    order_confirm__date,
    order_confirm__address,
    orderConfirmOk__btn
  );

  orderConfirm.append(orderConfirm__info, orderConfirmClose__btn);
  container.append(orderConfirm);

  orderConfirmClose__btn.addEventListener("click", () => {
    orderConfirm.classList.replace("order_confirm", "hidden");
  });
  orderConfirmOk__btn.addEventListener("click", () => {
    orderConfirm.classList.replace("order_confirm", "hidden");
  });

  event.preventDefault();
}
