const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");
let counter = 0;
reload.addEventListener("click", () => {
  log.textContent = "";
  window.setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", event => {
  log.textContent += ++counter + "- " + "load\n";
});

document.addEventListener("readystatechange", event => {
  log.textContent += ++counter + "- " + `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", event => {
  log.textContent += ++counter + "- " + `DOMContentLoaded\n`;
});
