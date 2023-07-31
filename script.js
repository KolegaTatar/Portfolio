let blur_element1 = document.querySelector(".project1 a");
let blur_p1 =document.querySelector(".project1 a div");
let blur_element2 = document.querySelector(".project2 a");
let blur_p2 =document.querySelector(".project2 a div");
blur_element1.addEventListener("mouseover",()=>{
    blur_p1.classList.add("blur_p");
    blur_p1.style.display="flex";
})
blur_element1.addEventListener("mouseout",()=>{
    blur_p1.classList.remove("blur_p");
    blur_p1.style.display="none";
})
blur_element2.addEventListener("mouseover",()=>{
    blur_p2.classList.add("blur_p");
    blur_p2.style.display="flex";
})
blur_element2.addEventListener("mouseout",()=>{
    blur_p2.style.display="none";
})