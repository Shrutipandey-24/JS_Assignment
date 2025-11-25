let textBox = document.getElementById("textBox");
let charCount = document.getElementById("charCount");

let limit = 100;

textBox.addEventListener("input", function () {
    let typed = textBox.value.length;
    let remaining = limit - typed;

    
    charCount.textContent = "Characters left: " + remaining;

    
    if (typed > limit) {
        textBox.value = textBox.value.substring(0, limit);
        remaining = 0;
        charCount.textContent = "Characters left: " + remaining;
    }

    
    if (remaining > 60) {
        charCount.style.color = "green";
    } else if (remaining > 20) {
        charCount.style.color = "orange";
    } else {
        charCount.style.color = "red";
    }
});
