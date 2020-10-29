let open = document.querySelector("#open");
let close = document.querySelector("#close");

let popContainer = document.querySelector(".pop-container");

open.addEventListener("click",()=>{
    popContainer.classList.add("active");
})
close.addEventListener("click",()=>{
    popContainer.classList.remove("active");
})
