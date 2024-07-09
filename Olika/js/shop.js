var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".thumb.left");
var thumbRight = document.querySelector(".thumb.right");
var range = document.querySelector(".range");

function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
    thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
    thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
    thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
    thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
    thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
    thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
    thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
    thumbRight.classList.remove("active");
});



const minRange = document.getElementById('input-left');
const maxRange = document.getElementById('input-right');
const sliderRange = document.getElementById('slider-range');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

function updateSlider() {
    const min = parseInt(minRange.value);
    const max = parseInt(maxRange.value);

    if (min > max - 10) {
        minRange.value = max - 10;
    }
    if (max < min + 10) {
        maxRange.value = min + 10;
    }

    minPrice.innerText = minRange.value + ".00 zł";
    maxPrice.innerText = maxRange.value + ".00 zł";

    const minPercent = ((minRange.value - minRange.min) / (minRange.max - minRange.min)) * 100;
    const maxPercent = ((maxRange.value - maxRange.min) / (maxRange.max - maxRange.min)) * 100;

    sliderRange.style.left = minPercent + '%';
    sliderRange.style.width = (maxPercent - minPercent) + '%';
}

minRange.addEventListener('input', updateSlider);
maxRange.addEventListener('input', updateSlider);

updateSlider();

function changeImage(src) {
    document.getElementById('mainImage').src = src;
}