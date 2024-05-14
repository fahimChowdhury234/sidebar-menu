const showMenu = (toggleId, navbarId, bodyId) => {
   const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId),
      bodypadding = document.getElementById(bodyId);
   console.log(toggle);

   if (toggle && navbar) {
      toggle.addEventListener("mouseover", () => {
         navbar.classList.toggle("expander");
         bodypadding.classList.toggle("body-pd");
         closeAllCollapseMenus();
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
         closeAllCollapseMenus();
      });
   }
};
showMenu2("nav-toggle2", "navbar", "body-pd");
function closeAllCollapseMenus() {
   collapseItems.forEach((item) => {
      const menu = item.querySelector(".collapse__menu");
      menu.classList.remove("showCollapse");
      menu.style.position = "static";
      const rotateIcon = item.querySelector(".collapse__link");
      if (rotateIcon) {
         rotateIcon.classList.remove("rotate");
      }
   });
}
/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll(".nav__link");
function colorLink() {
   linkColor.forEach((l) => l.classList.remove("active"));
   this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

/*===== COLLAPSE MENU  =====*/

const sidebar = document.getElementById("navbar");
const collapseItems = document.querySelectorAll(".collapse");
let currentOpenMenu = null;

collapseItems.forEach((collapseItem) => {
   const collapseMenu = collapseItem.querySelector(".collapse__menu");

   collapseItem.addEventListener("mouseover", function () {
      console.log("mouseover");

      // Close the currently open collapse menu, if there is one
      if (currentOpenMenu && currentOpenMenu !== collapseMenu) {
         currentOpenMenu.classList.remove("showCollapse");
         const prevRotateIcon = currentOpenMenu.closest(".collapse").querySelector(".collapse__link");
         if (prevRotateIcon) {
            prevRotateIcon.classList.remove("rotate");
         }
      }

      const isExpanded = sidebar.classList.contains("expander");

      if (!isExpanded) {
         const sidebarRect = sidebar.getBoundingClientRect();
         const collapseItemRect = collapseItem.getBoundingClientRect();

         const rightPosition = sidebarRect.left + sidebarRect.width;
         const topPosition = collapseItemRect.top + window.scrollY;

         collapseMenu.style.position = "absolute";
         collapseMenu.style.top = `${topPosition}px`;
         collapseMenu.style.left = `${rightPosition}px`;
      } else {
         collapseMenu.style.position = "relative";
         collapseMenu.style.top = "";
         collapseMenu.style.left = "";
      }

      collapseMenu.classList.add("showCollapse");
      const rotateIcon = this.querySelector(".collapse__link");
      rotateIcon.classList.add("rotate");

      // Update the current open menu
      currentOpenMenu = collapseMenu;
   });

   collapseItem.addEventListener("mouseleave", function () {
      console.log("collapseItem mouseleave");

      const handleMenuMouseLeave = () => {
         console.log("collapseMenu mouseleave");

         collapseMenu.classList.remove("showCollapse");
         collapseMenu.style.position = "static";
         const rotateIcon = collapseItem.querySelector(".collapse__link");
         rotateIcon.classList.remove("rotate");

         // Reset current open menu if it's the same menu
         if (currentOpenMenu === collapseMenu) {
            currentOpenMenu = null;
         }

         collapseMenu.removeEventListener("mouseleave", handleMenuMouseLeave);
      };

      collapseMenu.addEventListener("mouseleave", handleMenuMouseLeave);
   });

   collapseMenu.addEventListener("mouseenter", function () {
      console.log("collapseMenu mouseenter");

      // Keep the menu open when the mouse is over the collapseMenu
      collapseMenu.classList.add("showCollapse");
      const rotateIcon = collapseItem.querySelector(".collapse__link");
      rotateIcon.classList.add("rotate");

      // Remove the menu's mouseleave handler when mouse re-enters
      // collapseMenu.removeEventListener("mouseleave", handleMenuMouseLeave);
   });

   // Additional logic for sidebar expander state
   sidebar.addEventListener("mouseover", function () {
      const isExpanded = sidebar.classList.contains("expander");
      if (isExpanded && currentOpenMenu) {
         const handleSidebarMouseLeave = () => {
            console.log("sidebar mouseleave");

            if (currentOpenMenu) {
               currentOpenMenu.classList.remove("showCollapse");
               currentOpenMenu.style.position = "static";
               const rotateIcon = currentOpenMenu.closest(".collapse").querySelector(".collapse__link");
               rotateIcon.classList.remove("rotate");

               currentOpenMenu = null;
            }

            sidebar.removeEventListener("mouseleave", handleSidebarMouseLeave);
         };

         sidebar.addEventListener("mouseleave", handleSidebarMouseLeave);
      }
   });
});
