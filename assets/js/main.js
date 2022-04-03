$(document).ready(function () {
  $("#send-it").on(function () {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=+92 304 9298665" + e + f;
      window.open(g, "_blank");
    }
  });
  $(".informasi").on("click", function () {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new").addClass("show").removeClass("hide"),
      $(".home-chat,.head-home").addClass("hide").removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  });
  $(".close-chat").on("click", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
  });
  $(".blanter-show").on("click", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide");
  });

  /*===== MENU SHOW =====*/
  $("#nav__toggle").on("click", function () {
    $(this).toggleClass("nav-open");
    $("#nav-menu").toggleClass("show");
  });

  /*==================== REMOVE MENU MOBILE ====================*/
  $(".nav__link").on("click", function () {
    $("#nav__toggle").removeClass("nav-open");
    $("#nav-menu").removeClass("show");
  });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

// <!--===== Modal JS =====-->
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

//  <!--===== Modal Pop-Up JS =====-->
var $trigger = $(".modal-open");
var $close = $(".modal-close");
var $modal = $(".modal-box");

$(window)
  .on("resize", function () {
    var top = $trigger.offset().top + $trigger.outerHeight();
    var left = $trigger.offset().left;
    var width = $trigger.outerWidth();
    $trigger.attr({
      "data-top": top,
      "data-left": left,
      "data-width": width,
    });
    $modal.css({
      top: top,
      left: left,
    });
  })
  .trigger("resize");

$trigger.on("click", function () {
  $modal
    .css({
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    })
    .addClass("is-open");
});

$close.on("click", function () {
  var top = $trigger.offset().top + $trigger.outerHeight();
  var left = $trigger.offset().left;
  $modal
    .css({
      top: top,
      left: left,
      width: 0,
      height: "2px",
    })
    .removeClass("is-open");
});

// <!--===== Download CV JS =====-->
let button = document.querySelector("body a");
button.addEventListener("click", () => {
  const span = document.querySelector("a span");
  button.style.paddingRight = "10px";
  span.style.visibility = "visible";
  setTimeout(() => {
    span.style.visibility = "hidden";
    button.style.paddingRight = "0px";
  }, 1000);
});
