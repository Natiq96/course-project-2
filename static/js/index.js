let citySection = document.querySelector(".citySection")
let cityItem = document.querySelectorAll(".cityItem")
let privateSection = document.querySelector(".privateCity")
let input  = document.querySelector(".searchInput")




citySection.addEventListener("click", function() {
    if (privateSection.style.display === "none" || privateSection.style.display === "") {
        privateSection.style.display = "block";
    } else {
        privateSection.style.display = "none";
    }
});


cityItem.forEach(item =>{
    item.addEventListener("click",function(){
        citySection.innerHTML = ""
        citySection.innerHTML += `<p>${item.innerText}</p>`;
        privateSection.style.display = "none"
    })
})


input.addEventListener("input", function() {
    if (input.value.length >= 30) {
        input.value = input.value.slice(0, 55); 
        alert("Simvol sayı 55-dir!!!")
    }
});