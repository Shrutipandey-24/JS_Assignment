
let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

let index = 0;
let slide = document.getElementById("slide");
let carousel = document.getElementById("carousel");


function showImage() {
    slide.src = images[index];
}


document.getElementById("nextBtn").onclick = function () {
    index = (index + 1) % images.length;
    showImage();
};


document.getElementById("prevBtn").onclick = function () {
    index = (index - 1 + images.length) % images.length;
    showImage();
};


let autoSlide = setInterval(function () {
    index = (index + 1) % images.length;
    showImage();
}, 3000);


carousel.addEventListener("mouseover", function () {
    clearInterval(autoSlide);
});

carousel.addEventListener("mouseout", function () {
    autoSlide = setInterval(function () {
        index = (index + 1) % images.length;
        showImage();
    }, 3000);
});
