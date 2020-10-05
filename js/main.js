var backdrop = document.querySelector(".backdrop")
var modal = document.querySelector(".modal")
var selectProjectImage = document.querySelectorAll(".project__image")

for (var i = 0; i < selectProjectImage.length; i++) {
  selectProjectImage[i].addEventListener("click", function () {
    // backdrop.style.display = "block"
    // modal.style.display = "block"
    backdrop.classList.add("open")
    modal.classList.add("open")
  })
}

backdrop.addEventListener("click", closeModal)
function closeModal() {
  backdrop.classList.remove("open")
  modal.classList.remove("open")
}
