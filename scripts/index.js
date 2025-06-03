const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const profileCloseButton = editProfileModal.querySelector(".modal__close-button");

const newPostButton = document.querySelector(".profile__newpost-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
 

editProfileButton.addEventListener("click", function () {
    editProfileModal.classList.add("modal__is-opened");
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

