// typing animation
let typed = new Typed(".typing", {
  strings: ["", "Web Developer", "Student", "Gamer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }

      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");

    showSection(this);

    if (window.innerWidth < 1430) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(e) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = e.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function removeBackSection() {
  for (let j = 0; j < totalSection; j++) {
    allSection[j].classList.remove("back-section");
  }
}

function addBackSection(index) {
  allSection[index].classList.add("back-section");
}

function updateNav(e) {
  const target = e.getAttribute("href").split("#")[1];
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    if (
      navList[i].querySelector("a").getAttribute("href").split("#")[1] ===
      target
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
