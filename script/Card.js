export class Card {

  constructor(initialCards, cardSelector,handleCardPopup){
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._handleCardPopup = handleCardPopup;
    this._tempElem = cardSelector;
  }

_getTemplate() {
  const card = document
  .querySelector(this._tempElem)
  .content.querySelector('.element')
  .cloneNode(true);

  return card;
}

_setData() {
   this._nameElem = this._newCard.querySelector('.element__name');
   this._nameElem.textContent = this._name;

   this._imageElem = this._newCard.querySelector('.element__image');
   this._imageElem.src = this._link;
   this._imageElem.alt = this._name;

}
_deleteCard() {
  this._newCard.remove();
  this._newCard = null;
}

_handleLikeBtn(){
  this._likeBtn.classList.toggle('element__like_active');
}

_setEventListeners() {
  this._deleteBtn = this._newCard.querySelector('.element__delete-btn');
  this._deleteBtn.addEventListener('click', ()=> {
    this._deleteCard();
  })
  this._likeBtn = this._newCard.querySelector('.element__like');
  this._likeBtn.addEventListener('click', ()=> {
    this._handleLikeBtn();
  })

  this._imageElem.addEventListener('click', ()=> {
    this._handleCardPopup(this._link, this._name);
  })
}


getView() {
this._newCard = this._getTemplate();
this._setData();
this._setEventListeners();

return this._newCard;
}
}

