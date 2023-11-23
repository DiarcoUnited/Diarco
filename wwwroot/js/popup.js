console.log("holaaa");

const homepopup = document.getElementById("homePopup");
const botonx = document.getElementById("popup-x")
const body = document.getElementById("index-body")

botonx.addEventListener('click', () => {
    homepopup.classList.add("invisible")
    body.classList.remove("negro");
    console.log("okoko");
})
console.log(botonx);

setTimeout(() => {
    homepopup.classList.remove("invisible")
    body.classList.add("negro")
    console.log("holaa", homepopup);
}, 2000)