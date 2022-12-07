const buttonProfileOpen = document.querySelector(".profile__info-button");
const popupElems = document.querySelectorAll(".popup");
const popupBody = document.querySelectorAll(".popup__container");
const popupProfile = document.querySelector(".popup_profile");
const closeElems = document.querySelectorAll(".popup__close");
const formProfile = document.querySelector(".form_profile");
const nameInput = form.querySelector('input[name="name"]');
const jobInput = form.querySelector('input[name="job"]');
const formAddCard = document.querySelector('form[name ="element"]');
const textInput = formAddCard.querySelector('input[name="title"]');
const linkInput = formAddCard.querySelector('input[name="link"]');
const profileName = document.querySelector(".profile__info-name");
const profileText = document.querySelector(".profile__info-text");
const buttonLike = document.querySelector(".element__like");
const popupCard = document.querySelector(".popup_card");
const  buttonCardOpen = document.querySelector(".profile__add-button");
const elemContainer = document.querySelector(".elements");
const formElem = document.querySelector("form__element");
const formElemText = document.querySelector('input[name="text"]');
const formElemLink = document.querySelector('input[name="link"]');
const popupLightbox = document.querySelector(".popup_lightbox");
const lightboxImg = document.querySelector(".popup__lbx-img");
const lightboxTitle = document.querySelector(".popup__lbx-txt");
const tempElem = document.querySelector("#tmpl-elem").content;
const buttonCardSubmit = formAddCard.querySelector('button[name="element"]');

const handleLikeBtn = (event) => {
  event.target
    .closest(".element__like")
    .classList.toggle("element__like_active");
};

const handleDeleteElem = (event) => {
  event.target.closest(".element").remove();
};

function changeValue() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
};

function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupByEsc);

};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupByEsc);

};

function disableBtn(form, select) {
  const buttonDisabled = form.querySelector(`${select.submitButtonSelector}`);
  buttonDisabled.disabled = true;
  buttonDisabled.classList.add(`${select.inactiveButtonClass}`);
}

function handleFormProfileSubmit(elem) {
  elem.preventDefault();

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closePopup(popupProfile);
}

closeElems.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

  buttonProfileOpen.addEventListener("click", () => {
  openPopup(popupProfile);
  changeValue()

});

formProfile.addEventListener("submit", handleFormProfileSubmit);

//карточки

function createElem(link, name) {
  const newElem = tempElem.querySelector(".element").cloneNode(true);

  const elemImage = newElem.querySelector(".element__image");

  elemImage.addEventListener("click", () => {
    openPopup(popupLightbox);

    lightboxImg.src = elemImage.src;
    lightboxImg.alt = elemName.textContent;
    lightboxTitle.textContent = elemName.textContent;
  });

  const elemItem = newElem.querySelector(".element__item");

  const elemName = newElem.querySelector(".element__name");

  const elemLikeBtn = newElem.querySelector(".element__like");
  elemLikeBtn.addEventListener("click", handleLikeBtn);

  elemImage.src = link;
  elemImage.alt = name;
  elemName.textContent = name;

const elemDeleteBtn = newElem.querySelector('.element__delete-btn');
  elemDeleteBtn.addEventListener("click", handleDeleteElem);

  return newElem;
}

const renderCard = (link, name) => {
  elemContainer.prepend(createElem(link, name));
};

initialCards.forEach((item) => renderCard(item.link, item.name));

  buttonCardOpen.addEventListener("click", () => {
  openPopup(popupCard);
});



formAddCard.addEventListener("submit", (event) => {
  event.preventDefault(formAddCard);
  renderCard(linkInput.value, textInput.value);
  closePopup(popupCard);
  event.target.reset();
 disableBtn(buttonCardSubmit);
});

popupBody.forEach((elem) => {;
  elem.addEventListener('click',(ev) => {
    ev.stopPropagation();
  });

});
popupElems.forEach((popup) => {;
  popup.addEventListener('mousedown',(ev) => {
  if( ev.target === ev.currentTarget) {
    closePopup(popup);
  }
});
});


