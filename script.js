const toggleTheme = document.getElementById("themeToggle");
const body = document.body;

// Se o tema claro estava salvo antes
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  toggleTheme.src = "./Assets/icone-lua.png"; // ícone escuro
}

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    toggleTheme.src = "./Assets/icone-lua.png"; // ícone para tema claro
    localStorage.setItem("theme", "light");
  } else {
    toggleTheme.src = "./Assets/Modos preto.png"; // ícone para tema escuro
    localStorage.setItem("theme", "dark");
  }
});
