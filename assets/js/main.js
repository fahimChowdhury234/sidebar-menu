const showMenu = (toggleId, navbarId, bodyId) => {
   const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId),
      bodypadding = document.getElementById(bodyId);
   console.log(toggle);

   if (toggle && navbar) {
      toggle.addEventListener("mouseover", () => {
         navbar.classList.toggle("expander");

         bodypadding.classList.toggle("body-pd");
      });
   }
};
showMenu("nav-toggle", "navbar", "body-pd");
const showMenu2 = (toggleId, navbarId, bodyId) => {
   const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId),
      bodypadding = document.getElementById(bodyId);
   console.log(toggle);

   if (toggle && navbar) {
      toggle.addEventListener("mouseover", () => {
         navbar.classList.toggle("expander");

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
