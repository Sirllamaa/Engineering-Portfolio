'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

document.addEventListener("click", async e => {
  const trigger = e.target.closest(".project-trigger");
  if (!trigger) return;

  const folder = trigger.dataset.folder;
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  try {
    const md = await fetch(`projects/${folder}/${folder}.md`).then(r => r.text());
    modalBody.innerHTML = marked.parse(md); // Requires marked.js (see below)
    modal.classList.remove("hidden");
  } catch (err) {
    modalBody.textContent = "Failed to load project details.";
    modal.classList.remove("hidden");
  }
});

document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.getElementById("modal").classList.add("hidden");
  }
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[da-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      //formBtn.removeAttribute("disabled");
      formBtn.setAttribute("disabled", "");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// --- NEW CODE: make "resume" the default page ---
window.addEventListener("DOMContentLoaded", () => {
  const defaultPage = "resume";
  const hasActive = Array.from(pages).some(p => p.classList.contains("active"));
  if (!hasActive) {
    pages.forEach((p, i) => {
      if (p.dataset.page === defaultPage) {
        p.classList.add("active");
        navigationLinks[i].classList.add("active");
      } else {
        p.classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    });
  }
});
