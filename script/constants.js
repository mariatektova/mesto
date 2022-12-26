import { FormValidation } from "./FormValidation.js";

export const buttonProfileOpen = document.querySelector(".profile__info-button");
export const popupElems = document.querySelectorAll(".popup");
export const popupBody = document.querySelectorAll(".popup__container");
export const popupProfile = document.querySelector(".popup_profile");
export const closeElems = document.querySelectorAll(".popup__close");
export const formProfile = document.querySelector(".form_profile");
export const nameInput = form.querySelector('input[name="name"]');
export const jobInput = form.querySelector('input[name="job"]');
export const formAddCard = document.querySelector('form[name ="element"]');
export const textInput = formAddCard.querySelector('input[name="title"]');
export const linkInput = formAddCard.querySelector('input[name="link"]');
export const profileName = document.querySelector(".profile__info-name");
export const profileText = document.querySelector(".profile__info-text");
export const buttonLike = document.querySelector(".element__like");
export const popupCard = document.querySelector(".popup_card");
export const  buttonCardOpen = document.querySelector(".profile__add-button");
export const elemContainer = document.querySelector(".elements");
export const formElem = document.querySelector("form__element");
export const formElemText = document.querySelector('input[name="text"]');
export const formElemLink = document.querySelector('input[name="link"]');
export const popupLightbox = document.querySelector(".popup_lightbox");
export const lightboxImg = document.querySelector(".popup__lbx-img");
export const lightboxTitle = document.querySelector(".popup__lbx-txt");
export const tempElem = document.querySelector("#tmpl-elem").content;
export const buttonCardSubmit = formAddCard.querySelector('button[name="element"]');
export const validationConfig = ({
  formSelector: '.form',
  fieldsetSelector:'.form__set',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});


