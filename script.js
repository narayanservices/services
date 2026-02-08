// Smooth scrolling for anchor links
document.querySelectorAll("a.nav-link").forEach(link => {
  link.addEventListener("click", e => {
    const target = link.getAttribute("href");
    if (target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
