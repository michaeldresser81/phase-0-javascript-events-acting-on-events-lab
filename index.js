// Your code here
const dodger = document.querySelector("#dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "0px";
document.addEventListener("keydown", (event) => {
    switch(true) {
        case event.key === "ArrowLeft":
            moveDodgerLeft();
            break;
        case event.key === "ArrowRight": 
            moveDodgerRight();
            break;
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left >= 5) {
    dodger.style.left = `${left - 5}px`;
    }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left <= 355) {
    dodger.style.left = `${left + 5}px`;
    }
}