/*let fourth_content=document.querySelectorAll(".fourth_content");
let blur_p= document.querySelectorAll(".blur_p");

fourth_content.forEach(element => {
    element.addEventListener("mouseover",()=>{
        blur_p.forEach(e=>{
            e.style.display="flex";
        })
    })
    element.addEventListener("mouseout",()=>{
        blur_p.forEach(e=>{
            e.style.display="none";
        })
    })
});*/
let blur_element1 = document.querySelector(".project1 a");
let blur_p1 =document.querySelector(".project1 a div");
let blur_element2 = document.querySelector(".project2 a");
let blur_p2 =document.querySelector(".project2 a div");
blur_element1.addEventListener("mouseover",()=>{
    blur_p1.style.display="flex";
})
blur_element1.addEventListener("mouseout",()=>{
    blur_p1.style.display="none";
})
blur_element2.addEventListener("mouseover",()=>{
    blur_p2.style.display="flex";
})
blur_element2.addEventListener("mouseout",()=>{
    blur_p2.style.display="none";
})


let dark_mode = document.querySelector(".mode_nav i");
let r = document.querySelector(':root');
let html = document.querySelector("html");
/* */
let Start_text = document.querySelector(".Start_text");
let text_light = document.querySelectorAll(".text-light");
let btn_cv = document.querySelectorAll(".btn_cv");
let contact = document.querySelector(".fifth h1");
let fifth_button =document.querySelector(".fifth button");
let mode_border = document.querySelectorAll(".mode_border");4
let third_box_container_grade = document.querySelectorAll(".third_box_container .grade .grade1");
let third_box_container_card = document.querySelectorAll(".third_box_container .card");
let blur_p = document.querySelectorAll(".blur_p");
let navbar_toggler = document.querySelector(".navbar-toggler");
let navbar_toggler_icon= document.querySelector(".navbar-toggler-icon");

dark_mode.addEventListener("click", ()=>{
    let rs = getComputedStyle(r);
    //dark mode
    if(rs.getPropertyValue('--dark_blue')=="#fff"){
        r.style.setProperty('--dark_blue', 'rgba(8,28,41,1)');
        r.style.setProperty('--dark_blue2', 'rgba(15,44,67,1)');
        r.style.setProperty('--white', 'rgb(255, 255, 255)');
        r.style.setProperty('--blue', 'rgb(0, 161, 224)');
        Start_text.classList.remove('mode_text');
        text_light.forEach(element => {
            element.classList.remove("mode_text")
        });
        btn_cv.forEach(element => {
            element.classList.remove("mode_btn")
        });
        contact.classList.remove("mode_form");
        fifth_button.classList.remove("mode_text");
        mode_border.forEach(element => {
            element.classList.remove("mode_border")
        });
        third_box_container_grade.forEach(element => {
            element.style.backgroundColor = "rgba(0, 160, 224, 0.5)"
        });
        third_box_container_card.forEach(element => {
            element.classList.remove("mode_card")
        });
        blur_p.forEach(element => {
            element.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        });
        navbar_toggler.classList.remove("mode_navbar_icon");
        navbar_toggler_icon.classList.remove("mode_icon");
    }
    //light mode 
    else{
        r.style.setProperty('--dark_blue', '#fff');
        r.style.setProperty('--dark_blue2', '#eee');
        r.style.setProperty('--white', 'black');       
        r.style.setProperty('--blue', '#a4c756');
        Start_text.classList.add('mode_text');
        text_light.forEach(element => {
            element.classList.add("mode_text")
        });
        btn_cv.forEach(element => {
            element.classList.add("mode_btn")
        });
        contact.classList.add("mode_form");
        fifth_button.classList.add("mode_text");
        mode_border.forEach(element => {
            element.classList.add("mode_border")
        });
        third_box_container_grade.forEach(element => {
            element.style.backgroundColor = "rgba(186, 215, 124, 0.5)"
        });
        third_box_container_card.forEach(element => {
            element.classList.add("mode_card")
        });
        blur_p.forEach(element => {
            element.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        });
        navbar_toggler.classList.add("mode_navbar_icon");
        navbar_toggler_icon.classList.add("mode_icon");
    }
})


