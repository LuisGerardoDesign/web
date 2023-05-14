var icon = document.getElementById("icon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "IMG/Moon.svg";
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
} else if (localData == "dark") {
  icon.src = "IMG/Sun.svg";
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
}

icon.onclick = function() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "IMG/Sun.svg";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "IMG/Moon.svg";
    localStorage.setItem("theme", "light");
  }
}
