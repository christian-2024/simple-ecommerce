document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("phoneModal");
  var link = document.getElementById("olivsoft-link");
  var span = document.querySelector(".close");

  modal.style.display = "none";
  link.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
    console.log("Modal foi aberto.");
  };
  span.onclick = function () {
    modal.style.display = "none";
    console.log("Modal foi fechado no X");
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log("Modal foi fechado fora modal.");
    }
  };
});
