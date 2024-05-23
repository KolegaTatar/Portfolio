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
//let form_btn  = document.querySelector("form button");
let footer = document.querySelector("footer");
let arrow_up = document.querySelector("footer a");
let text_light= document.querySelectorAll(".text-light");
let third_box_container_grade_grade1 = document.querySelectorAll(".third_box_container .grade .grade1");
let blur_p = document.querySelectorAll(".blur_p");
let menu_icon = document.querySelector("header nav div button span");
let menu_icon_button = document.querySelector("header nav div button");

let pl_icon = document.querySelector(".pl_icon");
let eng_icon = document.querySelector(".eng_icon");


let pl_description = ["Cześć, jestem Wiktor", "Zapraszam do zapoznania się z moim portfolio.", "Jestem młodym, doświadczonym front-end developerem, którego pasją jest tworzenie responsywnych i estetycznych stron internetowych. Posiadam rozległą wiedzę z zakresu HTML, CSS, PHP i JavaScript, a także doświadczenie w samodzielnej i zespołowej pracy nad różnymi projektami. Śledzę najnowsze trendy i technologie front-endowe oraz odważnie eksperymentuję z nowymi narzędziami i bibliotekami. Znam systemy kontroli wersji takie jak Git. Moim priorytetem jest tworzenie wydajnych, przystępnych cenowo i przyjaznych SEO stron internetowych. Jeśli szukasz kreatywnego front-end developera, który wprowadzi Twoje pomysły w życie, zapraszam do przejrzenia mojego portfolio i kontaktu.","O mnie","Umiejętności","Projekty","Kontakt",'Pobierz CV',"Inne",'Projekty 1','Projekty 2','Projekty 3','Możesz się ze mną skontaktować przez e-mail: ',"Jeśli nie odpiszę przez 48 godzin, oznacza to, że aktualnie nie ma ze mną kontaktu.","Odpowiedzi należy spodziewać się w ciągu kilkudziesięciu godzin."];


let eng_description =["Hi, I'm Wiktor", "I invite you to take a look at my portfolio.",'I am a young, experienced front-end developer, with a passion for creating responsive and aesthetically pleasing websites. I have extensive knowledge of HTML, CSS, PHP and JavaScript, as well as experience working both independently and in teams on various projects. I follow the latest trends and front-end technologies and boldly experiment with new tools and libraries. I am familiar with version control systems such as Git. My priority is to create efficient, affordable and SEO-friendly websites. If you are looking for a creative front-end developer who will bring your ideas to life, I invite you to browse my portfolio and contact me.',"About me","Skils","Projects","Contact",'Download CV','Other','Projects 1','Projects 2','Projects 3','You can reach me via e-mail: ',"If I don't write back for 48 hours, it means I'm out of contact at the moment.","You should expect a response back within several dozen hours."]




let web_project_desc_pl = ["Projekt strony internetowej FastFood", "Strona internetowa dla firmy Animaster", "Projekt w toku", "Szkolny projekt w Laravel", "Strona internetowa korepetycji", "Projekt strony internetowej sklepu piłkarskiego"];
let web_project_desc_eng = ["website fastfood project","Website for the Animaster company","Project in progress","School Laravel Project","Tutoring website","website football shop project"];


function change_desc_web(){
    if((document.querySelector("main .fourth h1").innerText == "Projects") && (document.querySelector("main .fourth article .project1 .p_desc").innerText == web_project_desc_pl[0]) ){
        document.querySelector("main .fourth article .project1 .p_desc").innerText = web_project_desc_eng[0];
        document.querySelector("main .fourth article .project2 .p_desc").innerText = web_project_desc_eng[1];
    }
    if((document.querySelector("main .fourth h1").innerText == "Projects") && (document.querySelector("main .fourth article .project1 .p_desc").innerText == web_project_desc_pl[2]) ){
        document.querySelector("main .fourth article .project1 .p_desc").innerText = web_project_desc_eng[2];
        document.querySelector("main .fourth article .project2 .p_desc").innerText = web_project_desc_eng[3];
    }
    if((document.querySelector("main .fourth h1").innerText == "Projects") && (document.querySelector("main .fourth article .project1 .p_desc").innerText == web_project_desc_pl[4]) ){
        document.querySelector("main .fourth article .project1 .p_desc").innerText = web_project_desc_eng[4];
        document.querySelector("main .fourth article .project2 .p_desc").innerText = web_project_desc_eng[5];
    }
    if((document.querySelector("main .fourth h1").innerText == "Projekty") && (document.querySelector("main .fourth article .project1 .p_desc").innerText == web_project_desc_eng[0]) ){
        document.querySelector("main .fourth article .project1 .p_desc").innerText = web_project_desc_pl[0];
        document.querySelector("main .fourth article .project2 .p_desc").innerText = web_project_desc_pl[1];
    };
    if((document.querySelector("main .fourth h1").innerText == "Projekty") && (document.querySelector("main .fourth article .project1 .p_desc").innerText == web_project_desc_eng[2]) ){
        document.querySelector("main .fourth article .project1 .p_desc").innerText = web_project_desc_pl[2];
        document.querySelector("main .fourth article .project2 .p_desc").innerText = web_project_desc_pl[3];
    };
    if((document.querySelector("main .fourth h1").innerText == "Projekty") && (document.querySelector("main .fourth article .project1 .p_desc").innerText == web_project_desc_eng[4]) ){
        document.querySelector("main .fourth article .project1 .p_desc").innerText = web_project_desc_pl[4];
        document.querySelector("main .fourth article .project2 .p_desc").innerText = web_project_desc_pl[5];
    }
};/*
pl_icon.addEventListener("click",()=>{
    document.querySelector("main .first article .name").innerText =pl_description[0];
    document.querySelector("main .first article .name_d").innerText =pl_description[1];
    document.querySelector("main .first article a").innerText =pl_description[6];
    document.querySelector("#main-menu ul .li1").innerText =pl_description[3];
    document.querySelector("#main-menu ul .li2").innerText =pl_description[4];
    document.querySelector("#main-menu ul .li3").innerText =pl_description[5];
    document.querySelector("#main-menu ul .li4").innerText =pl_description[6];
    document.querySelector("main .second h1 .ab").innerText ='O';
    document.querySelector("main .second h1 .dotted_color").innerText='mnie';
    document.querySelector("main .second .span_cv").innerText=pl_description[7];
    document.querySelector("main .third h1").innerText=pl_description[4];
    document.querySelector("main .third .other").innerText=pl_description[8];
    document.querySelector("main .fourth h1").innerText=pl_description[5];
    document.querySelector("main .fourth .project_btn_1").innerText=pl_description[9];
    document.querySelector("main .fourth .project_btn_2").innerText=pl_description[10];
    document.querySelector("main .fourth .project_btn_3").innerText=pl_description[11];
    document.querySelector("main .fifth h1").innerText=pl_description[6];
    document.querySelector("main .fifth .maildiv h2 span").innerText=pl_description[12];
    document.querySelector("main .fifth .maildiv .text_1_mail").innerText=pl_description[13];
    document.querySelector("main .fifth .maildiv .text_2_mail").innerText=pl_description[14];
    document.querySelector("main .second .cv_text .f1").innerText="Jestem";
    document.querySelector("main .second .cv_text .f2").innerText="młodym, doświadczonym front-end developerem";
    document.querySelector("main .second .cv_text .f3").innerText=", którego pasją jest tworzenie";
    document.querySelector("main .second .cv_text .f4").innerText=" responsywnych i estetycznych";
    document.querySelector("main .second .cv_text .f5").innerText="stron internetowych. Posiadam rozległą wiedzę z zakresu ";
    document.querySelector("main .second .cv_text .f6").innerText="HTML, CSS, PHP i JavaScript";
    document.querySelector("main .second .cv_text .f7").innerText=", a także doświadczenie w samodzielnej i zespołowej pracy nad różnymi projektami. Śledzę najnowsze trendy i technologie front-endowe oraz odważnie eksperymentuję z nowymi narzędziami i bibliotekami. Znam systemy kontroli wersji takie jak ";
    document.querySelector("main .second .cv_text .f8").innerText="Git";
    document.querySelector("main .second .cv_text .f9").innerText=". Moim priorytetem jest tworzenie wydajnych, przystępnych cenowo i przyjaznych SEO stron internetowych. Jeśli szukasz kreatywnego front-end developera, który ";
    document.querySelector("main .second .cv_text .f10").innerText="wprowadzi Twoje pomysły w życie";
    document.querySelector("main .second .cv_text .f11").innerText=", zapraszam do przejrzenia mojego ";
    document.querySelector("main .second .cv_text .f12").innerText="portfolio";
    document.querySelector("main .second .cv_text .f13").innerText="i kontaktu. ";
    document.querySelector("main .second_container .btn_cv_change").href = "Wiktor Tatarynowicz CV - pl.pdf";
    document.querySelector("main .second_container .btn_cv_change").download = "Wiktor Tatarynowicz CV - pl.pdf";
    document.querySelector(".third_cert .certificates .testing").innerHTML ="Praktyczny kurs testowania oprogramowania";
    document.querySelector(".third_cert .certificates .postman").innerHTML ="Postman od podstaw - testowanie REST API";
    change_desc_web()

});*/
/*
eng_icon.addEventListener("click",()=>{
    document.querySelector("main .first article .name").innerText =eng_description[0];
    document.querySelector("main .first article .name_d").innerText =eng_description[1];
    document.querySelector("main .first article a").innerText =eng_description[6];
    document.querySelector("#main-menu ul .li1").innerText =eng_description[3];
    document.querySelector("#main-menu ul .li2").innerText =eng_description[4];
    document.querySelector("#main-menu ul .li3").innerText =eng_description[5];
    document.querySelector("#main-menu ul .li4").innerText =eng_description[6];
    document.querySelector("main .second h1 .ab").innerText ='About';
    document.querySelector("main .second h1 .dotted_color").innerText='me';
    document.querySelector("main .second .span_cv").innerText=eng_description[7];
    document.querySelector("main .third h1").innerText=eng_description[4];
    document.querySelector("main .third .other").innerText=eng_description[8];
    document.querySelector("main .fourth h1").innerText=eng_description[5];
    document.querySelector("main .fourth .project_btn_1").innerText=eng_description[9];
    document.querySelector("main .fourth .project_btn_2").innerText=eng_description[10];
    document.querySelector("main .fourth .project_btn_3").innerText=eng_description[11];
    document.querySelector("main .fifth h1").innerText=eng_description[6];
    document.querySelector("main .fifth .maildiv h2 span").innerText=eng_description[12];
    document.querySelector("main .fifth .maildiv .text_1_mail").innerText=eng_description[13];
    document.querySelector("main .fifth .maildiv .text_2_mail").innerText=eng_description[14];
    document.querySelector("main .second .cv_text .f1").innerText="I am a";
    document.querySelector("main .second .cv_text .f2").innerText="young, experienced front-end developer";
    document.querySelector("main .second .cv_text .f3").innerText=", with a passion for creating";
    document.querySelector("main .second .cv_text .f4").innerText="responsive and aesthetically";
    document.querySelector("main .second .cv_text .f5").innerText="pleasing websites. I have extensive knowledge of ";
    document.querySelector("main .second .cv_text .f6").innerText="HTML, CSS, PHP and JavaScript";
    document.querySelector("main .second .cv_text .f7").innerText=", as well as experience working both independently and in teams on various projects. I follow the latest trends and front-end technologies and boldly experiment with new tools and libraries. I am familiar with version control systems such as ";
    document.querySelector("main .second .cv_text .f8").innerText="Git";
    document.querySelector("main .second .cv_text .f9").innerText=". My priority is to create efficient, affordable and SEO-friendly websites. If you are looking for a creative front-end developer who will ";
    document.querySelector("main .second .cv_text .f10").innerText="bring your ideas to life";
    document.querySelector("main .second .cv_text .f11").innerText=", I invite you to browse my ";
    document.querySelector("main .second .cv_text .f12").innerText="portfolio";
    document.querySelector("main .second .cv_text .f13").innerText="and contact me.";
    document.querySelector("main .second_container .btn_cv_change").href = "Wiktor Tatarynowicz CV - en.pdf";
    document.querySelector("main .second_container .btn_cv_change").download = "Wiktor Tatarynowicz CV - en.pdf";
    document.querySelector(".third_cert .certificates .testing").innerHTML ="Practical software testing course";
    document.querySelector(".third_cert .certificates .postman").innerHTML ="Postman from scratch - testing REST API";
    change_desc_web()

});
*/

dark_mode.addEventListener("click",()=>{
    (r.style.getPropertyValue('--blue')=="#a4c756")?r.style.setProperty('--blue', 'rgb(0, 161, 224)'):r.style.setProperty('--blue', '#a4c756');

    (r.style.getPropertyValue('--blue2')=="#808c72")?r.style.setProperty('--blue2', 'rgb(179, 216, 231)'):r.style.setProperty('--blue2', '#808c72');

    (r.style.getPropertyValue('--light_blue')=="#95c565a3")?r.style.setProperty('--light_blue', 'rgba(0, 160, 224, 0.502)'):r.style.setProperty('--light_blue', '#95c565a3');

    //(r.style.getPropertyValue('--white')=="#ffffff")?r.style.setProperty('--white', 'rgb(255, 255, 255)'):r.style.setProperty('--white', '#ffffff');
    
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
    //form_btn.classList.toggle("send");
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
    project1_desc.innerText =web_project_desc_eng[0];
    project1_a.href="https://kolegatatar.github.io/Fast_Food_Restaurant_Website/";

    project2_img.src = "img/animaster.webp";
    project2_title.innerText="Animaster";
    project2_desc.innerText =web_project_desc_eng[1];
    project2_a.href="https://animaster.pl";

    project_btn_1.classList.add("nav_project_i_color_border");
    project_btn_2.classList.remove("nav_project_i_color_border");
    project_btn_3.classList.remove("nav_project_i_color_border");
    change_desc_web();
})

project_btn_2.addEventListener("click", ()=>{
    project1_img.src = "img/c-sharp.webp";
    project1_title.innerText="C# CONSOLE APP";
    project1_desc.innerText =web_project_desc_eng[2];
    project1_a.href="";

    project2_img.src = "img/laravel.webp";
    project2_title.innerText="Laravel App";
    project2_desc.innerText =web_project_desc_eng[3];
    project2_a.href="https://github.com/KolegaTatar/zsk_2023.git";

    project_btn_1.classList.remove("nav_project_i_color_border");
    project_btn_2.classList.add("nav_project_i_color_border");
    project_btn_3.classList.remove("nav_project_i_color_border");
    change_desc_web();
})
project_btn_3.addEventListener("click", ()=>{
    project1_img.src = "img/math_website.webp";
    project1_title.innerText="Licz.My";
    project1_desc.innerText =web_project_desc_eng[4];
    project1_a.href="https://kolegatatar.github.io/Bootstrap/Projekt/";

    project2_img.src = "img/sport_website.webp";
    project2_title.innerText="POZNANIAK";
    project2_desc.innerText =web_project_desc_eng[5];
    project2_a.href="https://kolegatatar.github.io/Football_Shop_Website/";
    
    project_btn_1.classList.remove("nav_project_i_color_border");
    project_btn_2.classList.remove("nav_project_i_color_border");
    project_btn_3.classList.add("nav_project_i_color_border");
    change_desc_web();
})


