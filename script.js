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

/* dark mode */

let dark_mode = document.querySelector(".dark_light_mode");
let r = document.querySelector(':root');
let html = document.querySelector("html");

let dark_light_mode_change = document.querySelectorAll(".dark_light_mode_change");
let dark_light_mode_change2 = document.querySelectorAll(".dark_light_mode_change2");
let dotted_color= document.querySelectorAll(".dotted_color");
let btn_color = document.querySelectorAll(".btn_color");
let btn_cv_change = document.querySelectorAll(".btn_cv_change");
let form_btn  = document.querySelector("form button");
let footer = document.querySelector("footer");
let arrow_up = document.querySelector("footer a");
let text_light= document.querySelectorAll(".text-light");
let third_box_container_grade_grade1 = document.querySelectorAll(".third_box_container .grade .grade1");
let blur_p = document.querySelectorAll(".blur_p");
let menu_icon = document.querySelector("header nav div button span");
let menu_icon_button = document.querySelector("header nav div button");

dark_mode.addEventListener("click",()=>{
    (r.style.getPropertyValue('--blue')=="#a4c756")?r.style.setProperty('--blue', 'rgb(0, 161, 224)'):r.style.setProperty('--blue', '#a4c756');
    dark_light_mode_change.forEach(e => {
        e.classList.toggle("dark_light_mode_change_click");
    });
    dark_light_mode_change2.forEach(e => {
        e.classList.toggle("dark_light_mode_change_click2");
    });
    dotted_color.forEach(e => {
        e.classList.toggle("change_color");
    });
    btn_color.forEach(e => {
        e.classList.toggle("btn_color_change");
    });
    btn_cv_change.forEach(e => {
        e.classList.toggle("btn_cv_change_mode");
    });
    form_btn.classList.toggle("send");
    footer.classList.toggle("footer_change");
    arrow_up.classList.toggle("arrow_up_mode_change");
    text_light.forEach(e => {
        e.classList.toggle("black_text_mode");
    });
    third_box_container_grade_grade1.forEach(e=>{
        e.classList.toggle("grade_color_mode");
    })
    blur_p.forEach(e=>{
        e.classList.toggle("blur_p_mode");
    })
    menu_icon.classList.toggle("mode_icon");
    menu_icon_button.classList.toggle("mode_navbar_icon");
})


