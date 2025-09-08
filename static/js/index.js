let citySection = document.querySelector(".citySection")
let cityItem = document.querySelectorAll(".cityItem")
let privateSection = document.querySelector(".privateCity")
let input = document.querySelector(".searchInput")
let menuMobile = document.querySelector(".menu-icon-mobile")
let navMobileChild = document.querySelectorAll(".nav-child-mobile")
let activeMobile = document.querySelectorAll(".active-mobile")
let navMobile = document.querySelector(".nav-mobile")
let menuIconIsClick = document.querySelector(".menu-im-cl")

menuMobile.addEventListener("click", function () {
    navMobile.classList.toggle("nav-mobile-active")
    menuMobile.style.display = "none"
    menuIconIsClick.style.display = "flex"
});

menuIconIsClick.addEventListener("click", function () {
    navMobile.classList.toggle("nav-mobile-active")
    menuMobile.style.display = "flex"
    menuIconIsClick.style.display = "none"
});


citySection.addEventListener("click", function () {
    if (privateSection.style.display === "none" || privateSection.style.display === "") {
        privateSection.style.display = "block";
    } else {
        privateSection.style.display = "none";
    }
});


cityItem.forEach(item => {
    item.addEventListener("click", function () {
        citySection.innerHTML = ""
        citySection.innerHTML += `<p>${item.innerText}</p>`;
        privateSection.style.display = "none"
    })
})


input.addEventListener("input", function () {
    if (input.value.length >= 30) {
        input.value = input.value.slice(0, 55);
        alert("Simvol sayı 55-dir!!!")
    }
});