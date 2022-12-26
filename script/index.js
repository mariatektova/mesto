import {
   buttonProfileOpen,
   popupElems,
   popupBody,
   popupProfile,
   closeElems,
   formProfile,
   nameInput,
   jobInput,
  formAddCard,
   textInput,
   linkInput,
   profileName,
   profileText,
   buttonLike,
   popupCard,
   buttonCardOpen,
   formElem,
   formElemText,
   formElemLink,
   popupLightbox,
   lightboxImg,
   lightboxTitle,
   tempElem,
   buttonCardSubmit,
   elemContainer,
} from './constants.js';


import { initialCards } from './initialCards.js';
import{ Card } from "./Card.js"
import { validationConfig } from './constants.js'
import { FormValidation} from './FormValidation.js';

const profilePopupValidate = new FormValidation(validationConfig, '.form_profile');
const cardPopupValidate = new FormValidation(validationConfig, '.form_element');

profilePopupValidate.enableValidation();
cardPopupValidate.enableValidation();

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

export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupByEsc);

};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupByEsc);

};


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
  profilePopupValidate.resetPopupForm();
});

formProfile.addEventListener("submit", handleFormProfileSubmit);

buttonCardOpen.addEventListener("click", () => {
  openPopup(popupCard);
  disableBtn(buttonCardSubmit);


});



const handleCardPopup = (link, name) => {
  openPopup(popupLightbox);
  lightboxImg.src = link;
  lightboxTitle.textContent = name;
}

const renderCard = (cardElement) => {
  const card = new Card(cardElement, '#tmpl-elem',handleCardPopup);
  elemContainer.prepend(card.getView());
}

initialCards.forEach((cardElement) => {
  renderCard(cardElement);
})

formAddCard.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardInputs = {
    name: textInput.value,
    link: linkInput.value,

}
  renderCard(cardInputs);
  closePopup(popupCard);
  cardPopupValidate.resetPopupForm();
  event.target.reset();
})

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


