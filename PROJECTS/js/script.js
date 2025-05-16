document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");

  // Rotating placeholder text
  const placeholders = [
    "Search for biryani, pizza, momos...",
    "Find top-rated cafés near you...",
    "Try 'Paneer Tikka' or 'KFC'"
  ];

  let index = 0;
  setInterval(() => {
    input.setAttribute("placeholder", placeholders[index]);
    index = (index + 1) % placeholders.length;
  }, 4000);

  // Header shadow on scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.2)";
    } else {
      header.style.boxShadow = "none";
    }
  });
});
