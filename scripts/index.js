const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const profileCloseButton = editProfileModal.querySelector(".modal__close-button");
const profileFormElement = editProfileModal.querySelector(".modal__form");
const nameInput = editProfileModal.querySelector("#profile-name-input");
const descriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostButton = document.querySelector(".profile__newpost-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const imageTitleInput = newPostModal.querySelector("#card-caption-input");
const linkInput = newPostModal.querySelector("#card-image-input");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");
const imageTitleElement = document.querySelector(".card__title");


editProfileButton.addEventListener("click", function () {
    editProfileModal.classList.add("modal__is-opened");
    nameInput.value = profileNameElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;
});

profileCloseButton.addEventListener("click", function() {
    editProfileModal.classList.remove("modal__is-opened");
});

newPostButton.addEventListener("click", function () {
    newPostModal.classList.add("modal__is-opened");
});

newPostCloseButton.addEventListener("click", function () {
    newPostModal.classList.remove("modal__is-opened");
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const inputValues = {
        name: nameInput.value,
        description: descriptionInput.value,
    };
    console.log(inputValues);
    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = descriptionInput.value;
    editProfileModal.classList.remove("modal__is-opened");
};

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const cardInputValues = {
        title: imageTitleInput.value,
        link: linkInput.value,
    };
    console.log(cardInputValues);
    newPostModal.classList.remove("modal__is-opened");
};

addCardFormElement.addEventListener('submit', handleAddCardSubmit);

  