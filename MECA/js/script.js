// Load reusable header and footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
});


// Image modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-img");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  images.forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  modal.addEventListener("click", function() {
    modal.style.display = "none";
  });
});
