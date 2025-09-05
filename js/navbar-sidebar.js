window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});