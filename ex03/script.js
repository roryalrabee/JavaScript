let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateCounter() {
    countDisplay.textContent = count;

    countDisplay.classList.remove("positive", "negative");

    if (count > 0) {
        countDisplay.classList.add("positive");
    } else if (count < 0) {
        countDisplay.classList.add("negative");
    }
}

incrementButton.addEventListener("click", function () {
    count++;
    updateCounter();
});

decrementButton.addEventListener("click", function () {
    count--;
    updateCounter();
});

resetButton.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

updateCounter();

console.log("Count:", count);
console.log("Classes:", countDisplay.className);
