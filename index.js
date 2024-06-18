const card = document.querySelector(".cardmain");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

let isFlipped = false;

card.addEventListener("click", () => {
    if (!isFlipped) {
        console.log("front");
        front.classList.add("front-visible");
        back.classList.add("back-visible");
    } else {
        console.log("back");
        front.classList.remove("front-visible");
        back.classList.remove("back-visible");
    }

    isFlipped = !isFlipped;
});