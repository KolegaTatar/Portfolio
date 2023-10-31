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

    (r.style.getPropertyValue('--blue2')=="#808c72")?r.style.setProperty('--blue2', 'rgb(179, 216, 231)'):r.style.setProperty('--blue2', '#808c72');
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
let project_btn_1 = document.querySelector(".project_btn_1");
let project_btn_2 = document.querySelector(".project_btn_2");
let project_btn_3 = document.querySelector(".project_btn_3");

let project1_img = document.querySelector(".project1 a img");
let project1_title = document.querySelector(".project1 .p_title");
let project1_desc = document.querySelector(".project1 .p_desc");
let project1_a = document.querySelector(".project1 a");

let project2_img = document.querySelector(".project2 a img");
let project2_title = document.querySelector(".project2 .p_title");
let project2_desc = document.querySelector(".project2 .p_desc");
let project2_a = document.querySelector(".project2 a");

project_btn_1.addEventListener("click", ()=>{
    project1_img.src = "img/food_website.webp";
    project1_title.innerText="FOOD WORLD";
    project1_desc.innerText ="website fastfood project";
    project1_a.href="https://kolegatatar.github.io/Fast_Food_Restaurant_Website/";

    project2_img.src = "img/sport_website.webp";
    project2_title.innerText="POZNANIAK";
    project2_desc.innerText ="website football shop project"
    project2_a.href="https://kolegatatar.github.io/Football_Shop_Website/";

    project_btn_1.classList.add("nav_project_i_color_border");
    project_btn_2.classList.remove("nav_project_i_color_border");
    project_btn_3.classList.remove("nav_project_i_color_border");
})

project_btn_2.addEventListener("click", ()=>{
    project1_img.src = "img/math_website.webp";
    project1_title.innerText="Licz.My";
    project1_desc.innerText ="Tutoring website ";
    project1_a.href="https://kolegatatar.github.io/Bootstrap/Projekt/";

    project2_img.src = "img/laravel.webp";
    project2_title.innerText="Laravel App";
    project2_desc.innerText ="School Laravel Project"
    project2_a.href="https://github.com/KolegaTatar/zsk_2023.git";

    project_btn_1.classList.remove("nav_project_i_color_border");
    project_btn_2.classList.add("nav_project_i_color_border");
    project_btn_3.classList.remove("nav_project_i_color_border");
})
project_btn_3.addEventListener("click", ()=>{
    project1_img.src = "img/works.webp";
    project1_title.innerText="UPDATE WEBSITE";
    project1_desc.innerText ="This will new project";
    project1_a.href="";

    project2_img.src = "img/works.webp";
    project2_title.innerText="UPDATE WEBSITE";
    project2_desc.innerText ="This will new project";
    project2_a.href="";

    project_btn_1.classList.remove("nav_project_i_color_border");
    project_btn_2.classList.remove("nav_project_i_color_border");
    project_btn_3.classList.add("nav_project_i_color_border");
})


