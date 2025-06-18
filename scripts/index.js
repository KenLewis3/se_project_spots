const initialCards = [
    { name: "Hen Kaznelson", link: "https://unsplash.com/photos/a-busy-street-in-tokyo-japan-6B3Nb71JvFw" },
    { name: "Anqi Lu", link: "https://unsplash.com/photos/a-tall-building-with-lots-of-windows-and-balconies-Xez0GVcPr_4"},
    { name: "Annie Spratt", link: "https://unsplash.com/photos/a-group-of-people-waiting-for-a-train-at-a-train-station-j_qk1eVoAz0"},
    { name: "Chitto Cancio", link: "https://unsplash.com/photos/grayscale-photography-of-man-EtelvFxuw2c"},
    { name: "Yoav Aziz", link: "https://unsplash.com/photos/men-in-black-suits-standing-in-the-hallway-tKCd-IWc4gI"},
    { name: "Story Zangu", link: "https://unsplash.com/photos/three-people-pose-in-a-market-shop-K7kTlqq2S00"},
 ];

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
    //editProfileModal.classList.remove("modal_is-opened");
    closeModal(editProfileModal);
};

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    const cardInputValues = {
        title: imageTitleInput.value,
        link: linkInput.value,
    };
    console.log(cardInputValues);
    //newPostModal.classList.remove("modal_is-opened");
    closeModal(newPostModal);
};

addCardFormElement.addEventListener('submit', handleAddCardSubmit);

initialCards.forEach(function (item) {
    console.log(item.name);
    console.log(item.link);
});