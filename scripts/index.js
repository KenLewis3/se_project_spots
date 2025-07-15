const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Hen Kaznelson",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Anqi Lu",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "Annie Spratt",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "Chitto Cancio",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Yoav Aziz",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Story Zangu",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const profileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const profileFormElement = editProfileModal.querySelector(".modal__form");
const nameInput = editProfileModal.querySelector("#profile-name-input");
const descriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostButton = document.querySelector(".profile__newpost-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const cardSubmitButton = newPostModal.querySelector(".modal__submit-button");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const imageTitleInput = newPostModal.querySelector("#card-caption-input");
const linkInput = newPostModal.querySelector("#card-image-input");

const previewModal = document.querySelector("#preview-modal");
const previewCloseButton = previewModal.querySelector(
  ".modal__close-type-preview"
);
const previewImage = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

const cardTemplate = document.querySelector("#card-template");

const cardList = document.querySelector(".cards__list");

const modals = document.querySelectorAll(".modal");

function clickToCloseOpenModal(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.currentTarget);
  }
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function escapeKeyEvt(event) {
  if (event.key === "Escape") {
    const openModal = document.querySelector(".modal_is-opened");
    if (openModal) {
      closeModal(openModal);
      removeEscKeyListener();
    }
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", escapeKeyEvt);
  modal.addEventListener("click", clickToCloseOpenModal);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", escapeKeyEvt);
  modal.removeEventListener("click", clickToCloseOpenModal);
}

editProfileButton.addEventListener("click", () => {
  nameInput.value = profileNameElement.textContent;
  descriptionInput.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
  //calling resetValidation is OPTIONAL
  resetValidation(profileFormElement, [nameInput, descriptionInput], settings);
  cardSubmitButton.disabled = false;
  cardSubmitButton.classList.remove("button_inactive");
});

profileCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

previewCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

newPostButton.addEventListener("click", () => {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", () => {
  closeModal(newPostModal);
});

profileFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileDescriptionElement.textContent = descriptionInput.value;
  closeModal(editProfileModal);
  resetValidation(profileFormElement);
});

addCardFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const inputValues = {
    name: imageTitleInput.value,
    link: linkInput.value,
  };
  disableButton(cardSubmitButton, settings);
  const cardElement = getCardElement(inputValues);
  cardList.prepend(cardElement);
  addCardFormElement.reset();
  disableButton(cardSubmitButton, settings);
  resetValidation(addCardFormElement);

  closeModal(newPostModal);
});

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardList.append(cardElement);
});

//Another option for cardTemplate
//document.querySelector("#card-template")
//.content.querySelector(".card");
//const cardElement = cardTemplate.cloneNode(true); inside function
