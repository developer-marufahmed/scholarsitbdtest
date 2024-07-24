// Navbar toggler

const header = document.querySelector(".header"),
  navLinks = document.querySelector(".nav_links"),
  menuIcon = document.querySelector("#menu_icon"),
  crossIcon = document.querySelector("#cross_icon");

//  Sticky Header
window.addEventListener("scroll", () => {
  window.scrollY > 80
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

// Toggle
menuIcon.addEventListener("click", () => {
  navLinks.style.left = "0";
  document.querySelector("body").style.overflowY = "hidden";
});

crossIcon.addEventListener("click", () => {
  document.querySelector("body").style.overflowY = "visible";
  navLinks.style.left = "-100%";
});

// Select

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach((option) => {
        option.classList.remove("active");
      });

      option.classList.add("active");

      // console.log(selected.innerText);
    });
  });
});

// Events Count Down
const second = document.querySelector("#seconds"),
  minute = document.querySelector("#minutes"),
  hour = document.querySelector("#hours"),
  day = document.querySelector("#days");

const countDownDate = new Date("Jul 25, 2024 0:00:00").getTime();

const timeFunction = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;
  // console.log();

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  day.innerHTML = days < 10 ? `0${days}` : days;
  hour.innerHTML = hours < 10 ? `0${hours}` : hours;
  minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timeFunction);

    document.querySelector("#days").innerHTML = "00";
    document.querySelector("#hours").innerHTML = "00";
    document.querySelector("#minutes").innerHTML = "00";
    document.querySelector("#seconds").innerHTML = "00";

    document.querySelector(".event_close").innerHTML = "EVENT EXPIRED";
  }
}, 1000);

// Copyright Year
const copyrightYear = document.querySelector("#copyright_year");

let date = new Date();
copyrightYear.innerHTML = date.getFullYear();
