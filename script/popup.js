let openElem = document.querySelector(".profile__info-button");
let popupElem = document.querySelector(".popup");
let closeElem = document.querySelector(".popup__close");
let formElem = document.querySelector(".form");
let nameInput = formElem.querySelector('input[name="name"]');
let jobInput = formElem.querySelector('input[name="job"]');
let profileName = document.querySelector(".profile__info-name");
let profileText = document.querySelector(".profile__info-text");

function changeElem() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

function openModal() {
  popupElem.classList.add("popup_opened");
changeElem();

}

function closeModal() {
  popupElem.classList.remove("popup_opened");

}


function formSubmitHandler(elem) {
  elem.preventDefault();

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closeModal();
}
openElem.addEventListener("click", openModal);
formElem.addEventListener("submit", formSubmitHandler);
closeElem.addEventListener("click", closeModal);

