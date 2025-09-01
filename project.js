document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      response.style.color = "green";
      response.textContent = "Message sent! We'll contact you soon.";
      form.reset();
    });
  }
});