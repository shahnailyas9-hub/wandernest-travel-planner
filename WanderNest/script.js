
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));

  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => navLinks?.classList.remove("open"));
  });

  const newsletter = document.querySelector(".news-form");
  if (newsletter) newsletter.addEventListener("submit", e => {
    e.preventDefault();
    const email = newsletter.querySelector("input").value.trim();
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Thank you for subscribing to WanderNest!");
    newsletter.reset();
  });

  const contactForm = document.querySelector("#contactForm");
  if (contactForm) contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to WanderNest.");
    contactForm.reset();
  });

  const bookingForm = document.querySelector("#bookingForm");
  if (bookingForm) bookingForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Your travel planning request has been submitted!");
    bookingForm.reset();
  });
});
