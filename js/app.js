const cardOpen = document.querySelector(".card-open");
const card2 = document.getElementById("card2");
const close = document.querySelector(".close");

const art = document.getElementById("art-check");
const culture = document.getElementById("culture-check");
const design = document.getElementById("design-check");

const burger = document.getElementById("burger")
const burgerOpen = document.querySelector(".open");

function changeArt() {
  let changeColorBlock = document.querySelectorAll('.art');
  for (elem of changeColorBlock) {
    if (elem.style.display == "none") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  }
}
art.addEventListener("click", changeArt)

function changeCulture() {
  let changeColorBlock = document.querySelectorAll('.culture');
  for (elem of changeColorBlock) {
    if (elem.style.display == "none") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  }
}
culture.addEventListener("click", changeCulture)

function changeDesign() {
  let changeColorBlock = document.querySelectorAll('.design');
  for (elem of changeColorBlock) {
    if (elem.style.display == "none") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  }
}
design.addEventListener("click", changeDesign)



function showLogIn() {
  cardOpen.classList.toggle("card-close");
}

card2.addEventListener("click", showLogIn);
close.addEventListener("click", showLogIn);
