/*===== EXPANDER MENU  =====*/
// const showMenu = (toggleId, navbarId, bodyId) => {
//    const toggle = document.getElementById(toggleId),
//       navbar = document.getElementById(navbarId),
//       bodypadding = document.getElementById(bodyId);

//    if (toggle && navbar) {
//       toggle.addEventListener("mouseover", () => {
//          navbar.classList.toggle("expander");

//          bodypadding.classList.toggle("body-pd");
//       });
//    }
// };
// showMenu("nav-toggle", "navbar", "body-pd");

/*===== LINK ACTIVE  =====*/
// const linkColor = document.querySelectorAll(".nav__link");
// function colorLink() {
//    linkColor.forEach((l) => l.classList.remove("active"));
//    this.classList.add("active");
// }
// linkColor.forEach((l) => l.addEventListener("click", colorLink));

/*===== COLLAPSE MENU  =====*/

// const collapseItems = document.querySelectorAll(".collapse");

// collapseItems.forEach((collapseItem) => {
//    collapseItem.addEventListener("mouseenter", function () {
//       const collapseMenu = this.querySelector(".collapse__menu");
//       collapseMenu.classList.add("showCollapse");

//       const rotateIcon = this.querySelector(".collapse__link");
//       rotateIcon.classList.add("rotate");
//    });

//    collapseItem.addEventListener("mouseleave", function () {
//       const collapseMenu = this.querySelector(".collapse__menu");
//       collapseMenu.classList.remove("showCollapse");

//       const rotateIcon = this.querySelector(".collapse__link");
//       rotateIcon.classList.remove("rotate");
//    });
// });

const showMenu = (toggleId, navbarId, bodyId) => {
   const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId),
      bodypadding = document.getElementById(bodyId);

   if (toggle && navbar) {
      toggle.addEventListener("mouseover", () => {
         navbar.classList.toggle("expander");

         bodypadding.classList.toggle("body-pd");
      });
   }
};
showMenu("nav-toggle", "navbar", "body-pd");

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll(".nav__link");
function colorLink() {
   linkColor.forEach((l) => l.classList.remove("active"));
   this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

/*===== COLLAPSE MENU  =====*/

// const collapseItems = document.querySelectorAll(".collapse");

// collapseItems.forEach((collapseItem) => {
//    collapseItem.addEventListener("mouseenter", function () {
//       const collapseMenu = this.querySelector(".collapse__menu");
//       const sidebar = document.getElementById("navbar");
//       const isExpanded = sidebar.classList.contains("expander");

//       if (!isExpanded) {
//          const sidebarRect = sidebar.getBoundingClientRect();
//          const collapseItemRect = collapseItem.getBoundingClientRect();

//          const rightPosition = sidebarRect.left + sidebarRect.width;
//          const topPosition = collapseItemRect.top + window.scrollY;

//          collapseMenu.style.position = "absolute";
//          collapseMenu.style.top = `${topPosition}px`;
//          collapseMenu.style.left = `${rightPosition}px`;
//          console.log("i am not here");
//       } else {
//          collapseMenu.style.position = "static";
//       }

//       collapseMenu.classList.add("showCollapse");

//       const rotateIcon = this.querySelector(".collapse__link");
//       rotateIcon.classList.add("rotate");
//    });

//    collapseItem.addEventListener("mouseleave", function () {
//       const collapseMenu = this.querySelector(".collapse__menu");
//       collapseMenu.classList.remove("showCollapse");

//       const rotateIcon = this.querySelector(".collapse__link");
//       rotateIcon.classList.remove("rotate");
//    });
// });

/*===== COLLAPSE MENU  =====*/

const sidebar = document.getElementById("navbar");
const collapseItems = document.querySelectorAll(".collapse");

collapseItems.forEach((collapseItem) => {
   const collapseMenu = collapseItem.querySelector(".collapse__menu");

   collapseItem.addEventListener("mouseover", function () {
      const isExpanded = sidebar.classList.contains("expander");

      if (!isExpanded) {
         const sidebarRect = sidebar.getBoundingClientRect();
         const collapseItemRect = collapseItem.getBoundingClientRect();

         const rightPosition = sidebarRect.left + sidebarRect.width;
         const topPosition = collapseItemRect.top + window.scrollY;

         collapseMenu.style.position = "absolute";
         collapseMenu.style.top = `${topPosition}px`;
         collapseMenu.style.left = `${rightPosition}px`;
      }

      collapseMenu.classList.add("showCollapse");
      const rotateIcon = this.querySelector(".collapse__link");
      rotateIcon.classList.add("rotate");
   });

   //  collapseItem.addEventListener("mouseout", function () {
   //     const isExpanded = sidebar.classList.contains("expander");

   //     if (!isExpanded) {
   //        collapseMenu.classList.remove("showCollapse");
   //     }

   //     const rotateIcon = this.querySelector(".collapse__link");
   //     rotateIcon.classList.remove("rotate");
   //  });

   if (collapseMenu) {
      collapseMenu.addEventListener("mouseenter", function () {
         collapseMenu.classList.add("showCollapse");
         const rotateIcon = collapseItem.querySelector(".collapse__link");
         rotateIcon.classList.add("rotate");
      });
      collapseItem.addEventListener("mouseout", function () {
         const isExpanded = sidebar.classList.contains("expander");

         if (isExpanded) {
            collapseMenu.classList.remove("showCollapse");
         }

         const rotateIcon = this.querySelector(".collapse__link");
         rotateIcon.classList.remove("rotate");
      });
      collapseMenu.addEventListener("mouseleave", function () {
         collapseMenu.classList.remove("showCollapse");
         collapseMenu.style.position = "static";
         const rotateIcon = collapseItem.querySelector(".collapse__link");
         rotateIcon.classList.remove("rotate");
         console.log("leav");
      });
   }
});
