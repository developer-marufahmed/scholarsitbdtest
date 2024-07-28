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

// Copyright Year
const copyrightYear = document.querySelector("#copyright_year");

let date = new Date();
copyrightYear.innerHTML = date.getFullYear();
