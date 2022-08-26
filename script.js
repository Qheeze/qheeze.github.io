const list = document.querySelectorAll(".list");
function activeNav() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeNav));

let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

const naviLinks = document.getElementById("naviLinks");
function sMenu() {
  naviLinks.style.right = "0";
}
function hMenu() {
  naviLinks.style.right = "-200px";
}
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
