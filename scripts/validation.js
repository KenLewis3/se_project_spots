const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageId = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorMessageId);
  inputElement.classList.add("modal__input_type_error");
  errorMessageElement.textContent = errorMessage;
  //errorElement.classList.add("modal__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMessageElement.textContent = "";
  inputElement.classList.remove("modal__input_type_error");
  //errorElement.classList.remove("modal__input-error_active");
};

const checkInputValidity = (formElement, inputElement) => {
  console.log(inputElement.validationMessage);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListener = (formElement) => {
  const inputList = formElement.querySelectorAll(".modal__input");
  const buttonElement = formElement.querySelectorAll(".modal__submit-button");

  // toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      //toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formElement) => {
    setEventListener(formElement);
  });
};

enableValidation();

//lines 3 and 4 written on one line
//const errorMessageElement = document.querySelector(`#${inputElement.id}-error`);
