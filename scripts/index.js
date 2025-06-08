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

function openModal(modal) {
    modal.classList.add("modal_is-opened");
};

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
}

editProfileButton.addEventListener("click", () => {
    openModal(editProfileModal);
    nameInput.value = profileNameElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;
});

profileCloseButton.addEventListener("click", () => {
    closeModal(editProfileModal);
});

newPostButton.addEventListener("click", () => {
    openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", () => {
    closeModal(newPostModal);
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = descriptionInput.value;
    editProfileModal.classList.remove("modal_is-opened");
};

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const cardInputValues = {
        title: imageTitleInput.value,
        link: linkInput.value,
    };
    console.log(cardInputValues);
    newPostModal.classList.remove("modal_is-opened");
};

addCardFormElement.addEventListener('submit', handleAddCardSubmit);

  