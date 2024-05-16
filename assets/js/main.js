const showMenu = (toggleId, navbarId, bodyId) => {
   const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId),
      bodypadding = document.getElementById(bodyId);
   const rightSideBar = document.querySelector(".right-side");
   const contentArea = document.querySelector(".content-area");

   if (toggle && navbar) {
      toggle.addEventListener("mouseover", () => {
         navbar.classList.toggle("expander");
         rightSideBar.classList.toggle("pd-left");
         contentArea.classList.toggle("pd-left");
      });
   }
};
showMenu("nav-toggle", "navbar", "body-pd");
const showMenu2 = (toggleId, navbarId, bodyId) => {
   const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId),
      bodypadding = document.getElementById(bodyId);
   const rightSideBar = document.querySelector(".right-side");
   const contentArea = document.querySelector(".content-area");

   if (toggle && navbar) {
      toggle.addEventListener("mouseover", () => {
         navbar.classList.toggle("expander");
         rightSideBar.classList.toggle("pd-left");
         contentArea.classList.toggle("pd-left");
         bodypadding.classList.toggle("body-pd");
      });
   }
};
showMenu2("nav-toggle2", "navbar", "body-pd");
/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll(".nav__link");
function colorLink() {
   linkColor.forEach((l) => l.classList.remove("active"));
   this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("mouseover", colorLink));
