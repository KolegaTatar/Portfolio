let blur_element1 = document.querySelector(".project1 a");
let blur_p1 =document.querySelector(".project1 a div");
blur_element1.addEventListener("mouseover",()=>{
    blur_p1.classList.toggle("blur_p");
})
