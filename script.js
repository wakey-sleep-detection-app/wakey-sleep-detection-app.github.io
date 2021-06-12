const burger = document.querySelector(".hamburger");
const sidenav = document.querySelector(".sidenav");

function toggleSidenav() {
  if (burger.classList.contains("is-active")) {
    burger.classList.remove("is-active");
    sidenav.classList.add("hidden");
    sidenav.animate(slideOut, { duration: 250 });
  } else {
    burger.classList.add("is-active");
    sidenav.classList.remove("hidden");
    sidenav.animate(slideIn, { duration: 250 });
  }
}

burger.addEventListener("click", () => {
  toggleSidenav();
});

const slideIn = [
  {
    transform: "translateX(100%)",
    "-webkit-transform": "translateX(100%)",
    visibility: "hidden",
  },
  {
    transform: "translateX(0)",
    "-webkit-transform": "translateX(0)",
    visibility: "visible",
  },
];

const slideOut = [
  {
    transform: "translateX(0)",
    "-webkit-transform": "translateX(0)",
    visibility: "visible",
    opacity: 1,
  },
  {
    transform: "translateX(100%)",
    "-webkit-transform": "translateX(100%)",
    visibility: "hidden",
    opacity: 0,
  },
];

document.querySelector("#welcome-arrow-down").addEventListener("click", () => {
  window.location.href = "#about";
});

document
  .querySelector("#btn-download")
  .addEventListener("click", openGooglePlayStore);

document
  .querySelector("#btn-download-sidenav")
  .addEventListener("click", () => {
    openGooglePlayStore();
    toggleSidenav();
  });

document.querySelector("#btn-our-mission").addEventListener("click", () => {
  window.location.href = "#our-mission";
});

document.querySelector("#btn-faq").addEventListener("click", () => {
  window.location.href = "#faq";
});

document
  .querySelector("#btn-our-mission-sidenav")
  .addEventListener("click", () => {
    window.location.href = "#our-mission";
    toggleSidenav();
  });

document.querySelectorAll(".brand").forEach((item) =>
  item.addEventListener("click", () => {
    window.location.href = "#home";
    if (burger.classList.contains("is-active")) {
      toggleSidenav();
    }
  })
);

document.querySelector("#btn-faq-sidenav").addEventListener("click", () => {
  window.location.href = "#faq";
  toggleSidenav();
});

const fabDismissButton = document.querySelector("#fab-dismiss-btn");
const fabButton = document.querySelector("#fab-download-container");

const isFabButtonDismissed = sessionStorage.getItem("fab-dismissed") === "true";

if (isFabButtonDismissed) {
  fabButton.remove();
}

fabDismissButton.addEventListener("click", (event) => {
  event.stopPropagation();
  sessionStorage.setItem("fab-dismissed", true);
  fabButton.remove();
});

fabButton.addEventListener("click", openGooglePlayStore);

function openGooglePlayStore() {
  window.open(
    "https://play.google.com/store/apps/details?id=com.eps.wakey",
    "_blank"
  );
}
