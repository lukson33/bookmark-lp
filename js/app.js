//NAVIGATION

//remove clicks and hover effects on small devices (opacity: 0)
if (window.innerWidth < 768) {
  linksArr.map((link) => link.classList.add("remove-click"));
}
//toggle classes that block clicks and hovers when user resizes browser
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    linksArr.map((link) => link.classList.add("remove-click"));
  } else if (window.innerWidth > 768) {
    linksArr.map((link) => link.classList.remove("remove-click"));
  }
});

//function init on burger click
hamburger.addEventListener("click", () => {
  //toggle hamburger animation
  hamburger.classList.toggle("is-active");
  //toggle navigation on and off
  nav.classList.toggle("nav-active");
  //animation for link items
  itemsArr.map((item, index) => {
    //check if it has animation already (if user clicked to close the navigation)
    if (item.style.animation) {
      //if it does, remove it
      item.style.animation = "";
    } else {
      //if it doesn't, add it
      item.style.animation = `fadeText 0.5s ease forwards ${index / 14 + 0.1}s`;
    }
  });
});
