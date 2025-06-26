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

const previewModal = document.querySelector("#preview-modal");
const previewCloseButton = previewModal.querySelector(".modal__close-type-preview");
const previewImage = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");


const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-template");

const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
    const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
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
        //deleteButton.closest(".card").remove;
    });

    cardImage.addEventListener("click", () => {
        previewImage.src = data.link;
        previewImage.alt = data.name;
        previewCaption.textContent = data.name;
        openModal(previewModal);
    });

    return cardElement;
};

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
});


addCardFormElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const inputValues = {
        name: imageTitleInput.value,
        link: linkInput.value,
    } 
    const cardElement = getCardElement(inputValues);
    cardList.prepend(cardElement);
    imageTitleInput.value = "";
    linkInput.value = "";

    console.log(inputValues);
    closeModal(newPostModal);
});

//function getCardElement(data) {
    //const cardElement = cardTemplate.content.querySelector(".card");
    //};

initialCards.forEach(function (item) {
    const cardElement = getCardElement(item);
    cardList.append(cardElement);
    
});



//Another option for cardTemplate 
//document.querySelector("#card-template")
//.content.querySelector(".card");
//const cardElement = cardTemplate.cloneNode(true); inside function