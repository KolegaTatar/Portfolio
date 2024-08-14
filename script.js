let up_arrow = document.querySelector(".up_home");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    up_arrow.style.display = "flex";
  } else {
    up_arrow.style.display = "none";
  }
}
