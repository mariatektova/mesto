let openElem = document.querySelector(".profile__info-button");
let popupProfile = document.querySelector(".popup__profile");
let closeElem = document.querySelectorAll(".popup__close");
let formElem = document.querySelector(".form");
let nameInput = formElem.querySelector('input[name="name"]');
let jobInput = formElem.querySelector('input[name="job"]');
let profileName = document.querySelector(".profile__info-name");
let profileText = document.querySelector(".profile__info-text");
//let cardElements = document.querySelectorAll('.elements');
//let cardElement = cardElements.querySelectorAll('.element');
let likeElem = document.querySelector('.element__like');
//let likeElemActive = document.querySelectorAll('.element__like_active');
let popupCard = document.querySelector('.popup__card');
let openPopupBtn = document.querySelector('.profile__add-button');

function changeElem() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}

function openModal() {
  popupProfile.classList.add("popup_opened");
  popupCard.classList.add('popup_opened');

changeElem();

}

function formSubmitHandler(elem) {
  elem.preventDefault();

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;



  closeModal();
}
likeElem.addEventListener('click', function(event){
 event.target.classList.toggle('element__like_active');
});


 closeElem.forEach(element => {
  element.addEventListener('click', () =>{
    popupProfile.classList.remove("popup_opened");
    popupCard.classList.remove('popup_opened');
  })
});

openElem.addEventListener("click", openModal);
formElem.addEventListener("submit", formSubmitHandler);
//closeElem.addEventListener("click", closeModal);
openPopupBtn.addEventListener("click", openModal);

