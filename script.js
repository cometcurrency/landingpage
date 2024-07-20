const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    handleMenu();
  });
});

const dtElements = document.querySelectorAll("dt");
dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddId = element.getAttribute("aria-controls");
    const ddElement = document.getElementById(ddId);
    const ddArrowIcon = element.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    ddArrowIcon.classList.toggle("-rotate-180");
  });
});

// gsap.to("#line4",{
//     transform:'translateX(50%)',

//     duration:5,
//     repeat:-1,
//     ease:"none",

// })
