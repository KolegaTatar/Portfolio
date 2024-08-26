let up_arrow = document.querySelector(".up_home");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    up_arrow.style.display = "flex";
  } else {
    up_arrow.style.display = "none";
  }
}

let more = document.querySelector(".sec3 .more button");
more.addEventListener("click",()=>{
    if(document.querySelector(".sec3 .more button i").classList.contains("fa-caret-down")){
        more.innerHTML='<i class="fa-solid fa-caret-up"></i> Schowaj';      
    }
    else{
        more.innerHTML='<i class="fa-solid fa-caret-down"></i> Więcej';
    }
})
let more2 = document.querySelector(".sec2 .more button");
more2.addEventListener("click",()=>{
    if(document.querySelector(".sec2 .more button i").classList.contains("fa-caret-down")){
        more2.innerHTML='<i class="fa-solid fa-caret-up"></i> Schowaj';      
    }
    else{
        more2.innerHTML='<i class="fa-solid fa-caret-down"></i> Więcej';
    }
})
    



let box = document.querySelector('.sec3 #hidden_box');
let more_btn = document.querySelector('.sec3 .more_btn');

more_btn.addEventListener('click', function () {
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        setTimeout(function () {
        box.classList.remove('visuallyhidden');
        }, 20);
    } 
    else {
        box.classList.add('visuallyhidden');    
        box.addEventListener('transitionend', function(e) {
        box.classList.add('hidden');
        }, 
        {
        capture: false,
        once: true,
        passive: false
        });
    }
  
}, false);

let box2 = document.querySelector('.sec2 #hidden_box');
let more_btn2 = document.querySelector('.sec2 .more_btn');

more_btn2.addEventListener('click', function () {
    if (box2.classList.contains('hidden')) {
        box2.classList.remove('hidden');
        setTimeout(function () {
        box2.classList.remove('visuallyhidden');
        }, 20);
    } 
    else {
        box2.classList.add('visuallyhidden');    
        box2.addEventListener('transitionend', function(e) {
        box2.classList.add('hidden');
        }, 
        {
        capture: false,
        once: true,
        passive: false
        });
    }
  
}, false);




let pol = document.querySelector('.mode_nav .pl_icon');
let eng = document.querySelector('.mode_nav .eng_icon');
let do_false = document.querySelector(".collapse");

let link1 = document.querySelector(".link_1_1");
let link2 = document.querySelector(".link_2");
let link3 = document.querySelector(".link_3");
let link4 = document.querySelector(".link_4");

let left_btn = document.querySelector(".btn_a_2");
let left_info = document.querySelector(".dev_info");
let btn_2 = document.querySelector(".btn_a_1");
let Im= document.querySelector(".Im");
let name_imie= document.querySelector(".name_imie");
let hi = document.querySelector(".hi");
let web_devel = document.querySelector(".web_devel");

let me_about = document.querySelector("#about .web_dev");
let info_prof = document.querySelector("#about h4");

let me_about2 = document.querySelector(".sec2 .web_dev");
let info_prof2 = document.querySelector(".sec2 h4");

let me_about3 = document.querySelector("#certificates .web_dev");
let info_prof3 = document.querySelector("#certificates h4");

let me_about4 = document.querySelector("#cooperation .web_dev");
let info_prof4 = document.querySelector("#cooperation h4");
let buttons = document.querySelectorAll(".content_img a");

let text_wsp1 = document.querySelector("#cooperation .text_wsp .text_1");
let text_wsp2 = document.querySelector("#cooperation .text_wsp .text_2");
let text_wsp3 = document.querySelector("#cooperation .text_wsp .text_3");
let text_wsp4 = document.querySelector("#cooperation .text_wsp .text_4");
let text_wsp5 = document.querySelector("#cooperation .text_wsp .text_5");

let footer = document.querySelector("footer"); 
let cv = document.querySelector(".fa-download");

let f1 = document.querySelector(".f1");
let f2 = document.querySelector(".f2");
let f3 = document.querySelector(".f3");
let f4 = document.querySelector(".f4");
let f5 = document.querySelector(".f5");
let f6 = document.querySelector(".f6");
let f7 = document.querySelector(".f7");
let f8 = document.querySelector(".f8");
let f9 = document.querySelector(".f9");
let f10 = document.querySelector(".f10");
let f11 = document.querySelector(".f11");
let f12 = document.querySelector(".f12");
let f13 = document.querySelector(".f13");
let f14 = document.querySelector(".f14");
let f15 = document.querySelector(".f15");
let f16 = document.querySelector(".f16");
let f17 = document.querySelector(".f17");
let a_cv = document.querySelector(".cv_cv");

let loading_web = document.querySelector(".loading_web");
let country = document.querySelector(".country");

let progress_100 =()=>{
    loading_web.style.display ="none"
}
let show_loading =(x_country)=>{
    country.innerText =x_country;
    loading_web.style.display = "flex";
    

    setTimeout(progress_100,1100);
}

pol.addEventListener("click",()=>{
    link1.innerText ="O mnie";
    link2.innerText ="Projekty";
    link3.innerText ="Certyfikaty";
    link4.innerText ="Współpraca";
    left_btn.innerText = "Wyślij wiadomość";
    btn_2.innerHTML ="Więcej";
    Im.innerHTML ="Jestem";
    hi.innerHTML ="Hej";
    web_devel.innerHTML = "Web Developerem";
    cv.innerHTML=" Pobierz CV";
    name_imie.innerHTML ="nazywam się";
    left_info.innerText ="Specjalizuję się w projektowaniu stron internetowych oraz aplikacji webowych. Oferuję kompleksowe usługi obejmujące cały proces – od projektu, przez wdrożenie, aż po testy końcowe.";
    me_about.innerText ="O mnie";
    info_prof.innerText = "Kreatywność, innowacyjność, profesionalizm";
    me_about2.innerText ="Projekty";
    info_prof2.innerText = "Zaufaj doświadczeniu";
    me_about3.innerText ="Certyfikaty";
    info_prof3.innerText = "Wiedza mówi sama za siebie";
    me_about4.innerText ="Współpraca";
    info_prof4.innerText = "Wspólnie zwyciężymy";
    text_wsp1.innerText = "Wierzę, że każdy projekt jest wyjątkowy i wymaga niepowtarzalnego podejścia. Moje podejście opiera się na zrozumieniu wizji oraz specyfiki projektu, co pozwala mi dostosować strategię do konkretnych potrzeb. ";
    text_wsp2.innerText = "Dążę do doskonałości poprzez starannie dobraną paletę technologii, które zapewniają nie tylko odpowiednie, lecz także szybkie funkcjonowanie aplikacji. Moim zadaniem jest tworzenie rozwiązań, które nie tylko spełniają oczekiwania, ale również je przekraczają.";
    text_wsp3.innerText = "W relacjach z ludźmi kładę nacisk na pozytywną atmosferę i efektywną komunikację. Dzięki temu wiedzę zdobywaną podczas naszych rozmów konwertuję na konkretne działania, napędzając inicjatywę w procesie realizacji projektu. Zaufanie jest dla mnie kluczowe, dlatego stawiam na transparentność i zaangażowanie na każdym etapie współpracy.";
    text_wsp4.innerText = "Zapraszam do podzielenia się swoją wizją, abyśmy mogli razem przekształcić ją w rzeczywistość.";
    text_wsp5.innerText = "Mam spore doświaczenie w korzystaniu z tych technologii:";
    footer.innerText ="Copyright © 2024 Wiktor Tatarynowicz. Wszystkie prawa zastrzeżone.";
    buttons.forEach(e => {
        e.innerHTML = "Zobacz więcej";
    });
    f1.innerText="Jestem";
    f2.innerText="młodym, doświadczonym front-end developerem";
    f3.innerText=", którego pasją jest tworzenie ";
    f4.innerText="responsywnych i estetycznych ";
    f5.innerText="stron internetowych. Posiadam rozległą wiedzę z zakresu ";
    f6.innerText="HTML, CSS, PHP i JavaScript";
    f7.innerText=", a także doświadczenie w samodzielnej i zespołowej pracy nad różnymi projektami. Śledzę najnowsze trendy i technologie front-endowe oraz odważnie eksperymentuję z nowymi narzędziami i bibliotekami. Znam systemy kontroli wersji takie jak ";
    f8.innerText="Git";
    f9.innerText=". Moim priorytetem jest tworzenie wydajnych, przystępnych cenowo i przyjaznych SEO stron internetowych. Jeśli szukasz kreatywnego front-end developera, który ";
    f10.innerText="wprowadzi Twoje pomysły w życie";
    f11.innerText=", zapraszam do przejrzenia mojego ";
    f12.innerText="portfolio";
    f13.innerText="i kontaktu.";
    f14.innerText="Zachęcam również do dowiedzenia się";
    f15.innerText=" więcej ";
    f16.innerText="o mnie oraz do zapoznania się z moim ";
    f17.innerText="CV:";
    show_loading("PL");
    a_cv.setAttribute("href","Wiktor Tatarynowicz CV - pl.pdf");
    a_cv.setAttribute("download","Wiktor Tatarynowicz CV - pl.pdf")


})

eng.addEventListener("click",()=>{
    link1.innerText ="About me";
    link2.innerText ="Projects";
    link3.innerText ="Certificates";
    link4.innerText ="Contact";
    left_btn.innerText = "Send message";
    btn_2.innerHTML ="More";
    hi.innerHTML ="Hi";
    web_devel.innerHTML = "Web Developer";
    Im.innerHTML ="I'm";
    name_imie.innerHTML ="I am";
    cv.innerHTML=" Download CV";
    left_info.innerText ="I specialize in web design and web applications. I offer comprehensive services covering the entire process - from design to implementation to final testing.";
    me_about.innerText ="About me";
    info_prof.innerText = "Creativity, innovation, professionalism";
    me_about2.innerText ="Projects";
    info_prof2.innerText = "Trust the experience";
    me_about3.innerText ="Certificates";
    info_prof3.innerText = "Knowledge speaks for itself";
    me_about4.innerText ="Contact";
    info_prof4.innerText = "Together we will prevail";
    text_wsp1.innerText = "I believe that every project is unique and requires a unique approach. My approach is based on understanding the vision and specifics of the project, which allows me to tailor a strategy to meet specific needs. ";
    text_wsp2.innerText = "I strive for excellence through a carefully selected palette of technologies that ensure that applications not only function properly, but also quickly. My job is to create solutions that not only meet expectations, but exceed them.";
    text_wsp3.innerText = "In my relationships with people, I emphasize a positive atmosphere and effective communication. Thanks to this, I convert the knowledge gained during our discussions into concrete actions, driving the initiative in the process of project implementation. Trust is key for me, so I focus on transparency and commitment at every stage of cooperation.";
    text_wsp4.innerText = "I invite you to share your vision so that together we can turn it into reality.";
    text_wsp5.innerText = "I have a lot of experience in using these technologies:";
    footer.innerText ="Copyright © 2024 Wiktor Tatarynowicz. All rights reserved.";
    buttons.forEach(e => {
        e.innerHTML = "Read more";
    });
    f1.innerText="I'm";
    f2.innerText="a young, experienced front-end developer";
    f3.innerText=", whose passion is creating ";
    f4.innerText="responsive and aesthetically ";
    f5.innerText="pleasing websites. I have extensive knowledge of ";
    f6.innerText="HTML, CSS, PHP and JavaScript";
    f7.innerText=", as well as experience working independently and in teams on various projects. I follow the latest front-end trends and technologies and boldly experiment with new tools and libraries. I am familiar with version control systems such as ";
    f8.innerText="Git";
    f9.innerText=". My priority is to create efficient, affordable and SEO-friendly websites. If you are looking for a creative front-end developer ";
    f10.innerText="to bring your ideas to life";
    f11.innerText=", I invite you to browse my ";
    f12.innerText="portfolio";
    f13.innerText="and contact me.";
    f14.innerText="I also encourage you to learn";
    f15.innerText=" more ";
    f16.innerText="about me and take a look at my ";
    f17.innerText="CV:";
    show_loading("ENG");
    a_cv.setAttribute("href","Wiktor Tatarynowicz CV - en.pdf");
    a_cv.setAttribute("download","Wiktor Tatarynowicz CV - en.pdf")
})


let pol_hidden = document.querySelector('.mode_nav_2 .pl_icon');
let eng_hidden = document.querySelector('.mode_nav_2 .eng_icon');

pol_hidden.addEventListener("click",()=>{
    link1.innerText ="O mnie";
    link2.innerText ="Projekty";
    link3.innerText ="Certyfikaty";
    link4.innerText ="Współpraca";
    left_btn.innerText = "Wyślij wiadomość";
    btn_2.innerHTML ="Więcej";
    Im.innerHTML ="Jestem";
    hi.innerHTML ="Hej";
    web_devel.innerHTML = "Web Developerem";
    name_imie.innerHTML ="nazywam się";
    cv.innerHTML=" Pobierz CV";
    left_info.innerText ="Specjalizuję się w projektowaniu stron internetowych oraz aplikacji webowych. Oferuję kompleksowe usługi obejmujące cały proces – od projektu, przez wdrożenie, aż po testy końcowe.";
    me_about.innerText ="O mnie";
    info_prof.innerText = "Kreatywność, innowacyjność, profesionalizm";
    me_about2.innerText ="Projekty";
    info_prof2.innerText = "Zaufaj doświadczeniu";
    me_about3.innerText ="Certyfikaty";
    info_prof3.innerText = "Wiedza mówi sama za siebie";
    me_about4.innerText ="Współpraca";
    info_prof4.innerText = "Wspólnie zwyciężymy";
    text_wsp1.innerText = "Wierzę, że każdy projekt jest wyjątkowy i wymaga niepowtarzalnego podejścia. Moje podejście opiera się na zrozumieniu wizji oraz specyfiki projektu, co pozwala mi dostosować strategię do konkretnych potrzeb. ";
    text_wsp2.innerText = "Dążę do doskonałości poprzez starannie dobraną paletę technologii, które zapewniają nie tylko odpowiednie, lecz także szybkie funkcjonowanie aplikacji. Moim zadaniem jest tworzenie rozwiązań, które nie tylko spełniają oczekiwania, ale również je przekraczają.";
    text_wsp3.innerText = "W relacjach z ludźmi kładę nacisk na pozytywną atmosferę i efektywną komunikację. Dzięki temu wiedzę zdobywaną podczas naszych rozmów konwertuję na konkretne działania, napędzając inicjatywę w procesie realizacji projektu. Zaufanie jest dla mnie kluczowe, dlatego stawiam na transparentność i zaangażowanie na każdym etapie współpracy.";
    text_wsp4.innerText = "Zapraszam do podzielenia się swoją wizją, abyśmy mogli razem przekształcić ją w rzeczywistość.";
    text_wsp5.innerText = "Mam spore doświaczenie w korzystaniu z tych technologii:";
    footer.innerText ="Copyright © 2024 Wiktor Tatarynowicz. Wszystkie prawa zastrzeżone.";
    buttons.forEach(e => {
        e.innerHTML = "Zobacz więcej";
    });
    f1.innerText="Jestem";
    f2.innerText="młodym, doświadczonym front-end developerem";
    f3.innerText=", którego pasją jest tworzenie ";
    f4.innerText="responsywnych i estetycznych ";
    f5.innerText="stron internetowych. Posiadam rozległą wiedzę z zakresu ";
    f6.innerText="HTML, CSS, PHP i JavaScript";
    f7.innerText=", a także doświadczenie w samodzielnej i zespołowej pracy nad różnymi projektami. Śledzę najnowsze trendy i technologie front-endowe oraz odważnie eksperymentuję z nowymi narzędziami i bibliotekami. Znam systemy kontroli wersji takie jak ";
    f8.innerText="Git";
    f9.innerText=". Moim priorytetem jest tworzenie wydajnych, przystępnych cenowo i przyjaznych SEO stron internetowych. Jeśli szukasz kreatywnego front-end developera, który ";
    f10.innerText="wprowadzi Twoje pomysły w życie";
    f11.innerText=", zapraszam do przejrzenia mojego ";
    f12.innerText="portfolio";
    f13.innerText="i kontaktu.";
    f14.innerText="Zachęcam również do dowiedzenia się";
    f15.innerText=" więcej ";
    f16.innerText="o mnie oraz do zapoznania się z moim ";
    f17.innerText="CV:";
    show_loading("PL");
    a_cv.setAttribute("href","Wiktor Tatarynowicz CV - pl.pdf");
    a_cv.setAttribute("download","Wiktor Tatarynowicz CV - pl.pdf")
})

eng_hidden.addEventListener("click",()=>{
    link1.innerText ="About me";
    link2.innerText ="Projects";
    link3.innerText ="Certificates";
    link4.innerText ="Contact";
    left_btn.innerText = "Send message";
    btn_2.innerHTML ="More";
    Im.innerHTML ="I'm";
    hi.innerHTML ="Hi";
    web_devel.innerHTML = "Web Developer";
    name_imie.innerHTML ="I am";
    cv.innerHTML=" Download CV";
    left_info.innerText ="I specialize in web design and web applications. I offer comprehensive services covering the entire process - from design to implementation to final testing.";
    me_about.innerText ="About me";
    info_prof.innerText = "Creativity, innovation, professionalism";
    me_about2.innerText ="Projects";
    info_prof2.innerText = "Trust the experience";
    me_about3.innerText ="Certificates";
    info_prof3.innerText = "Knowledge speaks for itself";
    me_about4.innerText ="Contact";
    info_prof4.innerText = "Together we will prevail";
    text_wsp1.innerText = "I believe that every project is unique and requires a unique approach. My approach is based on understanding the vision and specifics of the project, which allows me to tailor a strategy to meet specific needs. ";
    text_wsp2.innerText = "I strive for excellence through a carefully selected palette of technologies that ensure that applications not only function properly, but also quickly. My job is to create solutions that not only meet expectations, but exceed them.";
    text_wsp3.innerText = "In my relationships with people, I emphasize a positive atmosphere and effective communication. Thanks to this, I convert the knowledge gained during our discussions into concrete actions, driving the initiative in the process of project implementation. Trust is key for me, so I focus on transparency and commitment at every stage of cooperation.";
    text_wsp4.innerText = "I invite you to share your vision so that together we can turn it into reality.";
    text_wsp5.innerText = "I have a lot of experience in using these technologies:";
    footer.innerText ="Copyright © 2024 Wiktor Tatarynowicz. All rights reserved.";
    buttons.forEach(e => {
        e.innerHTML = "Read more";
    });
    f1.innerText="I'm";
    f2.innerText="a young, experienced front-end developer";
    f3.innerText=", whose passion is creating ";
    f4.innerText="responsive and aesthetically ";
    f5.innerText="pleasing websites. I have extensive knowledge of ";
    f6.innerText="HTML, CSS, PHP and JavaScript";
    f7.innerText=", as well as experience working independently and in teams on various projects. I follow the latest front-end trends and technologies and boldly experiment with new tools and libraries. I am familiar with version control systems such as ";
    f8.innerText="Git";
    f9.innerText=". My priority is to create efficient, affordable and SEO-friendly websites. If you are looking for a creative front-end developer ";
    f10.innerText="to bring your ideas to life";
    f11.innerText=", I invite you to browse my ";
    f12.innerText="portfolio";
    f13.innerText="and contact me.";
    f14.innerText="I also encourage you to learn";
    f15.innerText=" more ";
    f16.innerText="about me and take a look at my ";
    f17.innerText="CV:";
    show_loading("ENG");
    a_cv.setAttribute("href","Wiktor Tatarynowicz CV - en.pdf");
    a_cv.setAttribute("download","Wiktor Tatarynowicz CV - en.pdf")
})

/*
let cisco = document.querySelector(".cisco");
cisco.addEventListener("mouseover"){
    document.querySelector(".cisco img").src = "
    img/"
}*/

/* dark / light mode */
let dark_light_mode = document.querySelectorAll(".dark_light_mode");
let sec0 = document.querySelector(".sec0");
let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");
let sec3 = document.querySelector(".sec3");
let sec4 = document.querySelector(".sec4");
let header = document.querySelector("header");

dark_light_mode.forEach(e => {
    e.addEventListener("click", ()=>{
        if(sec1.style.color == "black"){
            sec0.style.backgroundColor = "#202124";
        }
        else{
            sec0.style.backgroundColor = "var(--dark1)";
        }
    })
});