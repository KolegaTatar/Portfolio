let up_arrow = document.querySelector(".up_home");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    up_arrow.style.display = "flex";
  } else {
    up_arrow.style.display = "none";
  }
}


let pol = document.querySelector('.mode_nav .pl_icon');
let eng = document.querySelector('.mode_nav .eng_icon');
let pol_hidden = document.querySelector('.mode_nav_hidden .pl_icon');
let eng_hidden = document.querySelector('.mode_nav_hidden .eng_icon');

let link1 = document.querySelector("#main-menu .link_1_1");
let link2 = document.querySelector(".link_2");
let link3 = document.querySelector(".link_3");
let link4 = document.querySelector(".link_4");

let left_btn = document.querySelector(".btn_a_2");
let left_info = document.querySelector(".dev_info");
let btn_2 = document.querySelector(".btn_a_1");
let Im= document.querySelector(".Im");

let me_about = document.querySelector("#about .web_dev");
let info_prof = document.querySelector("#about h4");

let me_about2 = document.querySelector(".sec2 .web_dev");
let info_prof2 = document.querySelector(".sec2 h4");

let me_about3 = document.querySelector("#certificates .web_dev");
let info_prof3 = document.querySelector("#certificates h4");

let me_about4 = document.querySelector("#cooperation .web_dev");
let info_prof4 = document.querySelector("#cooperation h4");

let text_wsp1 = document.querySelector("#cooperation .text_wsp .text_1");
let text_wsp2 = document.querySelector("#cooperation .text_wsp .text_2");
let text_wsp3 = document.querySelector("#cooperation .text_wsp .text_3");
let text_wsp4 = document.querySelector("#cooperation .text_wsp .text_4");
let text_wsp5 = document.querySelector("#cooperation .text_wsp .text_5");

let footer = document.querySelector("footer"); 


pol.addEventListener("click",()=>{
    link1.innerText ="O mnie";
    link2.innerText ="Projekty";
    link3.innerText ="Certyfikaty";
    link4.innerText ="Współpraca";
    left_btn.innerText = "Wyślij wiadomość";
    btn_2.innerHTML ="Więcej";
    Im.innerHTML ="Jestem";
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
    footer.innerText ="Copyright © 2024 Wiktor Tatarynowicz. Wszystkie prawa zastrzeżone."


})

eng.addEventListener("click",()=>{
    link1.innerText ="About me";
    link2.innerText ="Projects";
    link3.innerText ="Certificates";
    link4.innerText ="Contact";
    left_btn.innerText = "Send message";
    btn_2.innerHTML ="More";
    Im.innerHTML ="I'm";
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
    footer.innerText ="Copyright © 2024 Wiktor Tatarynowicz. All rights reserved."
})



pol_hidden.addEventListener("click",()=>{
    link1.innerText ="O mnie";
    link2.innerText ="Projekty";
    link3.innerText ="Certyfikaty";
    link4.innerText ="Współpraca";
    left_btn.innerText = "Wyślij wiadomość";
    btn_2.innerHTML ="Więcej";
    Im.innerHTML ="Jestem";
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
    footer.innerText ="Copyright © 2024 Wiktor Tatarynowicz. Wszystkie prawa zastrzeżone."
})

eng_hidden.addEventListener("click",()=>{
    link1.innerText ="About me";
    link2.innerText ="Projects";
    link3.innerText ="Certificates";
    link4.innerText ="Contact";
    left_btn.innerText = "Send message";
    btn_2.innerHTML ="More";
    Im.innerHTML ="I'm";
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
    footer.innerText ="Copyright © 2024 Wiktor Tatarynowicz. All rights reserved."
})
