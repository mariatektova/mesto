export class FormValidation {
  constructor(validationConfig, formSelector) {
    this._config = validationConfig;
    this._form = document.querySelector(formSelector)
    this._fieldsetSelector = validationConfig.fieldsetSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));


  }

  _setEventListeners() {
    this._toggleButtonState(this._submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();

      });

});
  }
  _hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState(){

    if (this._hasInvalidInput(this._inputList)) {
      this.disableBtn(this._buttonElement);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;

    }
  }
  _checkInputValidity(item) {
    this._errorElement= this._form.querySelector(`.${item.id}-error`);
    if (!item.validity.valid) {
      this._showInputError(item);
    } else {
      this._hideInputError(item);
    }
  }
  _showInputError(item){
    item.classList.add(this._inputErrorClass);
    this._errorElement.textContent = item.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  }
  _hideInputError(item) {

  item.classList.remove(this._inputErrorClass);
    this._errorElement.textContent = '' ;
    this._errorElement.classList.remove(this._errorClass);

  }
disableBtn() {
  this._buttonElement.classList.add(this._inactiveButtonClass);
  this._buttonElement.disabled = true;
}
  resetPopupForm() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
        this._errorElement = this._form.querySelector(`.${input.id}-error`);
        this._hideInputError(input);
    });
}

  enableValidation() {

    this._setEventListeners();
  }
}
