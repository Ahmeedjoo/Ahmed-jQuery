$("body").prepend(`<header></header>`);
$("header").addClass("header");
$("header").prepend(`<button></button>
<ul>
    <li><a class=" list-link active" href="./personal/index.html">Home</a></li>
    <li><a class=" list-link" href="./personal/about.html">About</a></li>
    <li><a class=" list-link" href="./personal/contact.html">Contact</a></li>
    <li><a class=" list-link" href="./personal/projects.html">projects</a></li>
</ul>

    <div class = "toggler" >
    <i class=" icon4 fa-solid fa-bars"></i>
    </div>
`);
$("header button").addClass("btn");
$(".btn").append(`<i class=" icon1 fa-solid fa-angles-right"> </i> 
<i class=" icon2 fa-solid fa-angles-left"></i>`);
$("body").append(`<section id="main"></section>`);
$("#main")
  .append(`<video muted autoplay loop src="assets/programming1.mp4"></video>
<div class="cover"><div>`);

$(".cover").append(`
  <div class = "profile">
  <img src="./assets/me.png" alt="me" ></div>
  <div class="container">
  <i class=" icon3 fa-solid fa-angles-right"> </i>

  <a href="https://instagram.com/ahmet_youseff?igshid=MzRlODBiNWFlZA==" target="_blank">
  <p>More about me.</p>
  </a>
  
  </div>
  <div class = "toggleList">
  <div class = "toggler" >
  <i class=" icon4 fa-solid fa-x"></i>
  </div></div>

  <footer class="footer">
  <div>
    <span><i class="fas fa-copyright"></i> ENG-Ahmed Yousef</span>
  </div>
  </footer>
`);

$(".toggleList").append(`
<ul>
<li><a class=" toggler list-link active" href="#main">Home</a></li>
<li><a class=" list-link" href="./personal/index.html">Website</a></li>
<li><a class=" list-link" href="./personal/about.html">About</a></li>
<li><a class=" list-link" href="./personal/contact.html">Contact</a></li>
<li><a class=" list-link" href="./personal/projects.html">projects</a></li>
</ul>
`)

$(".btn").click(function (e) {
  $(".header").toggleClass("small");
  $(".btn").toggleClass("hidd");
  $(".icon2").toggleClass("icon-toggle2");
  $(".icon1").toggleClass("icon-toggle1");
  $(".header ul").toggleClass("remove-lists");
  $(".toggler").toggleClass("toggle-list-hidden")
});

$(".toggler").click(function (e) {
  $(".toggleList").toggleClass("toggle-list");
  $(".header").toggleClass("hide-header");
  $(".profile").toggleClass("hide-header");
  $(".container").toggleClass("hide-header");
  $(".footer").toggleClass("hide-header");
});

$(function () {
  var scroll = $(document).scrollTop();
  var navHieght = $(".header").outerHeight();

  $(window).scroll(function () {
    var scrolled = $(document).scrollTop();
    if (scrolled > navHieght) {
      $(".header").addClass("hidden");
    } else {
      $(".header").removeClass("hidden");
    }

    if (scrolled > scroll) {
      $(".header").removeClass("sticy");
    } else {
      $(".header").addClass("sticy");
    }
    scroll = $(document).scrollTop();
  });
});

var list = document.querySelectorAll(".list-link");

function activeLink() {
  list.forEach((items) => {
    items.classList.remove("active");
  });
  this.classList.add("active");
}

list.forEach((items) => {
  items.addEventListener("click", activeLink);
});

document.preventDefaulte()
