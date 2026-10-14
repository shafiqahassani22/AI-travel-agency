(function () {
  var STORAGE_KEY = "theme";

  function updateIcon(isDark) {
    var icon = document.querySelector("#dark_toggle i");
    if (!icon) return;
    icon.classList.toggle("fa-moon", !isDark);
    icon.classList.toggle("fa-sun", isDark);
  }

  function applyTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    updateIcon(isDark);
  }

  function savedIsDark() {
    return localStorage.getItem(STORAGE_KEY) === "dark";
  }

  function init() {
    applyTheme(savedIsDark());

    var toggle = document.getElementById("dark_toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      var isDark = !document.body.classList.contains("dark");
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
      applyTheme(isDark);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
