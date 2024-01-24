const navBar_btn_open = document.getElementById("navbar-open");
const navBar_btn_close = document.getElementById("navbar-close");
const navBar_container = document.getElementById("main-navBar");

navBar_btn_open.addEventListener("click", (e) => {
  e.preventDefault();

  if (!navBar_container.classList.contains("open")) {
    navBar_container.classList.add("open");
  }
})

navBar_btn_close.addEventListener("click", (e) => {
  e.preventDefault();

  if (navBar_container.classList.contains("open")) {
    navBar_container.classList.remove("open");
  }
})


const cart_btn_toggle = document.getElementById("show-cart");
const cart_container = document.getElementById("cart");

cart_btn_toggle.addEventListener("click", (e) => {
  e.preventDefault();
  cart_container.classList.toggle("open");
})



document.addEventListener('click', (e) => {
  // Check if the clicked element is not inside the myDiv
  if (!navBar_container.contains(e.target) && !navBar_btn_open.contains(e.target)) {
    // Remove the 'myClass' class from myDiv
    navBar_container.classList.remove('open');
  }

  if (!cart_container.contains(e.target) && !cart_btn_toggle.contains(e.target)) {
    // Remove the 'myClass' class from myDiv
    cart_container.classList.remove('open');
  }
});

