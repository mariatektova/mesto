  let openElem = document.querySelector('.profile__info-button');
  let popupElem = document.querySelector('.popup');
  let closeElem = document.querySelector('.form__close');
  let formElem = document.querySelector('.form');
  let formButton = formElem.querySelector('form__button');
  let nameInput = formElem.querySelector('input[name="name"]');
  let jobInput = formElem.querySelector('input[name="job"]');
  let profileName = document.querySelector('.profile__info-name');
  let profileText = document.querySelector('.profile__info-text');



  openElem.addEventListener('click', () => {
  popupElem.classList.add('popup_opened');
  });

  closeElem.addEventListener('click', () => {
    popupElem.classList.remove('popup_opened');

  });
  
  function changeElem() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
  }

  function formSubmitHandler (elem) {
	elem.preventDefault();

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;

};

formElem.addEventListener('submit',formSubmitHandler);
