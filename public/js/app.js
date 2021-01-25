document.getElementById("hamburger").onclick = function toggleMenu() {
  const body = document.getElementsByTagName("body")[0];
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};
