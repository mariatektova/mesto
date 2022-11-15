let openElem = document.querySelector(".profile__info-button");
let popupElem = document.querySelectorAll(".popup");
let popupProfile = document.querySelector(".popup__profile");
let closeElem = document.querySelectorAll(".popup__close");
let formElem = document.querySelector(".form");
let nameInput = formElem.querySelector('input[name="name"]');
let jobInput = formElem.querySelector('input[name="job"]');
let profileName = document.querySelector(".profile__info-name");
let profileText = document.querySelector(".profile__info-text");
let likeElem = document.querySelector(".element__like");
let popupCard = document.querySelector(".popup__card");
let openPopupBtn = document.querySelector(".profile__add-button");



function changeElem() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  changeElem();
}

function formSubmitHandler(elem) {
  elem.preventDefault();

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

  closeModal();
}

closeElem.forEach((element) => {
  element.addEventListener("click", () => {
    popupProfile.classList.remove("popup_opened");
    popupCard.classList.remove("popup_opened");
  });
});



openElem.addEventListener("click", () => {
  openPopup(popupProfile);
});

formElem.addEventListener("submit", formSubmitHandler);

openPopupBtn.addEventListener("click", () => {
  openPopup(popupCard);
});




//карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elemContainer = document.querySelector('.elements');

const handleLikeBtn = (event) => {
  event.target.closest('.element__like').classList.toggle('element__like_active');
};


function createElem (link, name) {
const tempElem = document.querySelector('#tmpl-elem').content;

  const newElem = tempElem.querySelector('.element').cloneNode(true);

  const elemImage = newElem.querySelector('.element__image');


  const elemItem = newElem.querySelector('.element__item');



  const elemName = newElem.querySelector('.element__name');

  const elemLikeBtn = newElem.querySelector('.element__like');
  elemLikeBtn.addEventListener('click', handleLikeBtn);
  elemImage.src = link;
  elemImage.alt = name;
  elemName.textContent = name;


  return newElem;


}

const renderCard = (link, name) => {
  elemContainer.prepend(createElem(link, name));
};


initialCards.forEach(item => renderCard(item.link, item.name));


function formSubmitHandlerCard(elem) {
  elem.preventDefault();

 createElem();

  closeModal();
};


formElem.addEventListener('submit', formSubmitHandlerCard);
