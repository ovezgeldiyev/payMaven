// menu start
var menu = document.getElementById("menu");
if(menu){
  var menuBtn = document.getElementById("menuBtn");
  var body = document.body;
  menuBtn.onclick = function () {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
  };
  window.onclick = function (event) {
    if (event.target == menu) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("active");
    }
  };
}
// menu end
// sliders
$(function () {
  $(".introContent__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 600,
    centerMode: true,
    fade: true,
  });
});


const passBtn = document.getElementById("passBtn");

if (passBtn) {
  const parentNode = passBtn.parentElement;
  const passInput = parentNode.querySelector("input");
  const eyeLine = document.querySelector("#eyeLine");

  passBtn.onclick = () => {
    passBtn.classList.toggle("active");
    eyeLine.classList.toggle("active");
    if (passInput.type === "text") {
      passInput.type = "password";
    } else {
      passInput.type = "text";
    }
  };
}

const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  const searchMenu = document.getElementById("searchMenu");
  searchBtn.onclick = () => {
    searchMenu.classList.toggle("active");
  };
}


