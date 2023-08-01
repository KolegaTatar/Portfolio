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

dark_mode.addEventListener("click", ()=>{
    let rs = getComputedStyle(r);
    if(rs.getPropertyValue('--dark_blue')=="white"){
        r.style.setProperty('--dark_blue', 'rgba(8,28,41,1)');
        r.style.setProperty('--white', 'rgb(255, 255, 255)');
    }
    else{
        r.style.setProperty('--dark_blue', 'white');
        console.log("rrr");
        r.style.setProperty('--white', 'rgb(0, 161, 224);');
    }
    dark_mode.classList.toggle("mode_color")
})


