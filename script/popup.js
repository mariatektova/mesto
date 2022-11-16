const openElem = document.querySelector(".profile__info-button");
const popupElem = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_profile");
const closeElem = document.querySelectorAll(".popup__close");
const form = document.querySelector(".form");
const nameInput = form.querySelector('input[name="name"]');
const jobInput = form.querySelector('input[name="job"]');
const formElement = document.querySelector('form[name ="element"]');
const textInput = formElement.querySelector('input[name="title"]');
const linkInput = formElement.querySelector('input[name="link"]');
const profileName = document.querySelector(".profile__info-name");
const profileText = document.querySelector(".profile__info-text");
const likeElem = document.querySelector(".element__like");
const popupCard = document.querySelector(".popup_card");
const openPopupBtn = document.querySelector(".profile__add-button");
const elemContainer = document.querySelector(".elements");
const formElem = document.querySelector("form__element");
const formElemText = document.querySelector('input[name="text"]');
const formElemLink = document.querySelector('input[name="link"]');
const popupLightbox = document.querySelector(".popup_lightbox");
const lightboxImg = document.querySelector(".popup__lbx-img");
const lightboxTitle = document.querySelector(".popup__lbx-txt");


const handleLikeBtn = (event) => {
  event.target
    .closest(".element__like").classList.toggle("element__like_active");
};

const handleDeleteElem = (event) => {
  event.target.closest(".element").remove();
};



function changeValue() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  changeValue();
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(elem) {
  elem.preventDefault();
  const popupTarget = elem.target.closest(".popup");

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closePopup(popupProfile);
}

closeElem.forEach((element) => {
  element.addEventListener("click", () => {
    popupProfile.classList.remove("popup_opened");
    popupCard.classList.remove("popup_opened");
    popupLightbox.classList.remove("popup_opened");
  });
});

openElem.addEventListener("click", () => {
  openPopup(popupProfile);
});

form.addEventListener("submit", formSubmitHandler);

//карточки



function createElem(link, name) {
  const tempElem = document.querySelector("#tmpl-elem").content;

  const newElem = tempElem.querySelector(".element").cloneNode(true);

  const elemImage = newElem.querySelector(".element__image");

  elemImage.addEventListener("click", () => {
    openPopup(popupLightbox);

    lightboxImg.src = elemImage.src;
    lightboxTitle.textContent = elemName.textContent;
  });

  const elemItem = newElem.querySelector(".element__item");

  const elemName = newElem.querySelector(".element__name");

  const elemLikeBtn = newElem.querySelector(".element__like");
  elemLikeBtn.addEventListener("click", handleLikeBtn);

  elemImage.src = link;
  elemImage.alt = name;
  elemName.textContent = name;

  const elemDeleteBtn = document.createElement("button");
  elemDeleteBtn.classList.add("element__delete-btn");
  newElem.appendChild(elemDeleteBtn);
  elemDeleteBtn.addEventListener("click", handleDeleteElem);

  return newElem;
}

const renderCard = (link, name) => {
  elemContainer.prepend(createElem(link, name));
};

initialCards.forEach((item) => renderCard(item.link, item.name));

openPopupBtn.addEventListener("click", () => {
  openPopup(popupCard);
});

formElement.addEventListener("submit", (elem) => {
  elem.preventDefault(formElement);
  renderCard(linkInput.value, textInput.value);
  closePopup(popupCard);
});
