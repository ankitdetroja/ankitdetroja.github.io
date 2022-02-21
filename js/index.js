// preloader

window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 600);
});

const refbtn = document.querySelector(".refbtn");
const overlay = document.querySelector(".overlay");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const four = document.querySelector(".four");
const img = document.querySelector(".overlayContentImg");
let count = 1;

// refbtn.addEventListener("click", refresh);
// window.addEventListener("load", refresh);

function refresh() {
  document.body.style.overflow = "hidden";
  gsap.to(first, 1.5, {
    delay: 0.2,
    left: "0%",
    ease: Expo.easeInOut,
  });

  gsap.to(second, 1.5, {
    delay: 0.4,
    left: "0%",
    ease: Expo.easeInOut,
  });

  gsap.to(third, 1.5, {
    delay: 0.6,
    left: "0%",
    ease: Expo.easeInOut,
  });
  gsap.to(four, 1.5, {
    delay: 0.8,
    left: "0%",
    ease: Expo.easeInOut,
  });

  let changeImg = setInterval(() => {
    if (count <= 7) {
      if (count == 7) {
        count = 1;
      }
      img.src = `media/images/${count}.webp`;
      count++;
    }
  }, 100);

  setTimeout(() => {
    gsap.to(first, 1.5, {
      delay: 0.2,
      left: "-100%",
      ease: Expo.easeInOut,
    });
    gsap.to(second, 1.5, {
      delay: 0.4,
      left: "-100%",
      ease: Expo.easeInOut,
    });
    gsap.to(third, 1.5, {
      delay: 0.6,
      left: "-100%",
      ease: Expo.easeInOut,
    });
    gsap.to(four, 1.5, {
      delay: 0.8,
      left: "-100%",
      ease: Expo.easeInOut,
    });
    document.body.style.overflow = "";
    clearInterval(changeImg);
  }, 3000);
}

const mobileMenuBtn = document.querySelector(".mobileMenuBtn");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuCloseBtn = document.querySelector(".mobileMenuCloseBtnIcon");

mobileMenuBtn.addEventListener("click", showMobileMenu);
mobileMenuCloseBtn.addEventListener("click", hideMobileMenu);

function showMobileMenu() {
  gsap.to(mobileMenu, 1.5, {
    delay: 0.2,
    left: "0%",
    ease: Expo.easeInOut,
  });
  document.body.style.overflow = "hidden";
}
function hideMobileMenu() {
  gsap.to(mobileMenu, 1.5, {
    delay: 0.2,
    left: "100%",
    ease: Expo.easeInOut,
  });
  document.body.style.overflow = "";
}

const navLinks = document.querySelectorAll(".headerContentLink > a");
const mobNavLinks = document.querySelectorAll(".mobileMenuLinks > a");
const mainSection = document.querySelector(".mainContent");
const allSections = document.querySelectorAll(".mainContent > section");
const grain = document.querySelector(".grain");
navLinks.forEach((link) => {
  if (link.dataset.targetsection) {
    link.addEventListener("click", navlinkfunc);
  }
});
mobNavLinks.forEach((link) => {
  if (link.dataset.targetsection) {
    link.addEventListener("click", navlinkfunc);
  }
});
function navlinkfunc(event) {
  hideMobileMenu();
  let hunterSection = event.target.dataset.targetsection;
  allSections.forEach((section) => {
    let targetSection = section.dataset.section;
    if (targetSection === hunterSection) {
      refresh();
      setTimeout(() => {
        if (targetSection === "homePage") {
          grain.style.display = "block";
        } else {
          grain.style.display = "none";
        }
        if (targetSection === "contactPage") {
          contactPageContentDivHeader();
        }
        mainSection.querySelector(".active").classList.remove("active");
        section.classList.add("active");
      }, 2500);
    }
  });
}

function contactPageContentDivHeader() {
  gsap.to(".contactPageContentDivHeader", 1, {
    delay: 2,
    opacity: 1,
    ease: Expo.easeInOut,
  });
  gsap.to(".cpcddi1", 1.1, {
    delay: 2.5,
    opacity: 1,
    transform: "translateX(0px)",
    ease: Expo.linear,
  });
  gsap.to(".cpcddi2", 1.1, {
    delay: 2.9,
    opacity: 1,
    transform: "translateX(0px)",
    ease: Expo.linear,
  });
  gsap.to(".cpcddi3", 1.1, {
    delay: 3.3,
    opacity: 1,
    transform: "translateX(0px)",
    ease: Expo.linear,
  });
}

const particularContentClsBtn = document.querySelectorAll(
  ".learnPageContentParticularTopicsHeaderDivClsBtn"
);
const ContentDiv = document.querySelectorAll(
  ".learnPageContentParticularTopics"
);

particularContentClsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

const learnPageContentTopicsItem = document.querySelectorAll(
  ".learnPageContentTopicsItem"
);

learnPageContentTopicsItem.forEach((item1) => {
  if (item1.dataset.topicpage) {
    ContentDiv.forEach((item) => {
      if (item1.dataset.topicpage === item.dataset.topicname) {
        item1.addEventListener("click", () => {
          item.style.display = "block";
        });
      }
    });
  }
});

// flipbook
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-250px)";
  nextBtn.style.transform = "translateX(250px)";
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        closeBook(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 3;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 2;
        break;
      case 4:
        openBook();
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 1;
        break;
      default:
        throw new Error("unkown state");
    }

    currentLocation--;
  }
}
