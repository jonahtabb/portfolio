//Popover Code
let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Dark Mode Toggle
const btn = document.querySelector("#dark-theme-button");
const staticDarkThemeElements = document.querySelectorAll("body, a, .project-label, .accordion-body, .accordion-item, #top-nav-bar, .offcanvas-header, .offcanvas-body, .form-control, .nav-link-custom, .btn-outline-success, .form-switch .form-check-input, .navbar-light .navbar-toggler, .navbar-light .navbar-toggler-icon, .accordion-button, .accordion-button.collapsed");
console.log(staticDarkThemeElements);
btn.addEventListener("click", function () {
  staticDarkThemeElements.forEach(node => node.classList.toggle("dark-theme"))
}); 