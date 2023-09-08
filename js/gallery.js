const photoGallerySrc = [
    { "src": "images/firedancer-islandbreeze-luau-3.png", "alt": "img-alt" },
    { "src": "images/firedancer-islandbreeze-luau-2.png", "alt": "img-alt" },
    { "src": "images/island-breeze-performers.jpg", "alt": "img-alt" },
    { "src": "images/firedancer-1-islandbreeze-luau.png", "alt": "img-alt" },
    { "src": "images/island-breeze-show.jpg", "alt": "img-alt" },
    { "src": "images/islandbreeze-kamehameha.png", "alt": "img-alt" },
    { "src": "images/islandbreeze-luau-ceremonial.png", "alt": "img-alt" },
    { "src": "images/islandbreeze-luau-grounds.jpg", "alt": "img-alt" },
    { "src": "images/islandbreeze-luau-performer.png", "alt": "img-alt" },
    { "src": "images/islandbreeze-luau-polynesian-dance.png", "alt": "img-alt" },
    { "src": "images/islandbreeze-luau-stage.png", "alt": "img-alt" },
    { "src": "images/islandbreeze-luau-stageshow.png", "alt": "img-alt" },
    { "src": "images/islandbreezeslide1.p", "alt": "img-alt" },
    { "src": "images/ohana-islandbreeze-luau.png", "alt": "img-alt" },
    { "src": "images/sailing-islandbreeze-luau.png", "alt": "img-alt" },
    { "src": "images/theshow-islandbreeze-luau.png", "alt": "img-alt" }
];

/*=====================================================================*/

const photoGallery = document.getElementById("photo-gallery");
const videoGallery = document.getElementById("video-gallery");
const photoControls = document.getElementById("photo-controls");
const videoControls = document.getElementById("video-controsl");

let createImageGalleryButton = ($name) => {
    let $button = document.createElement("button");
    $button.setAttribute("ID", "image-gallery-" + $name + "");
    $button.setAttribute("type", "button");
    return $button;
};

/*=====================================================================*/
photoControls.appendChild(createImageGalleryButton("prev"));

Array.prototype.forEach.call(photoGallerySrc, function (item, index) {
    let galleryIndexButton = document.createElement("BUTTON");
    galleryIndexButton.setAttribute("type", "button");
    galleryIndexButton.setAttribute("class", "gallery-index-button");
    photoControls.appendChild(galleryIndexButton);
});

photoControls.appendChild(createImageGalleryButton("next"));

/*=====================================================================*/
let galleryButtonCurrent = document.getElementsByClassName("gallery-index-button");
let imageGalleryIndex = 1;

showGalleryImage(imageGalleryIndex);
// Next/previous controls
function plusGalleryImage(n) {
    showGalleryImage(imageGalleryIndex += n);
};

// Thumbnail image controls
function currentGalleryImage(n) {
    showGalleryImage(imageGalleryIndex = n);
};

function showGalleryImage(n) {
    let i;
    let galleryImages = document.getElementsByClassName("gallery-image");
    if (n > galleryImages.length) { imageGalleryIndex = 1 }
    if (n < 1) { imageGalleryIndex = galleryImages.length }
    for (i = 0; i < galleryImages.length; i++) {
        galleryImages[i].className = "gallery-image";
    }
    if (galleryImages[imageGalleryIndex - 1] !== undefined) {
        galleryImages[imageGalleryIndex - 1].className = "gallery-image active";
    };
};

/*=====================================================================*/

Array.prototype.forEach.call(photoGallerySrc, function (item, index) {
    // create images
    let galleryImage = new Image();
    galleryImage.setAttribute("src", item.src);
    galleryImage.setAttribute("class", "gallery-image");
    galleryImage.setAttribute("alt", item.alt);
    galleryImage.addEventListener("click", () => {
        if (photoGallery.className == "photo-gallery") {
            currentGalleryImage(index + 1);
            photoGallery.className = "photo-gallery active";
        } else {
            photoGallery.className = "photo-gallery";
        }
    });
    // add images to gallery
    photoGallery.appendChild(galleryImage);
});

const galleryButtonNext = document.getElementById("image-gallery-next");
galleryButtonNext.innerHTML = '<span class="material-symbols-outlined">chevron_right</span>';
const galleryButtonPrev = document.getElementById("image-gallery-prev");
galleryButtonPrev.innerHTML = '<span class="material-symbols-outlined">chevron_left</span>';

galleryButtonNext.addEventListener("click", function () {
    plusGalleryImage(1)
}, false);
galleryButtonPrev.addEventListener("click", function () {
    plusGalleryImage(-1)
}, false);

Array.prototype.forEach.call(galleryButtonCurrent, function (item, index) {
    item.addEventListener("click", function () {
        currentGalleryImage(index + 1);
    }, false)
});

let closeBtn = document.getElementById('photo-close-btn');
closeBtn.addEventListener("click", function () {
    photoGallery.className = "photo-gallery";
}, false);

/*=====================================================================*/

