function changeContent() {
  if (window.location.hash) {
    const template = document.querySelector(window.location.hash);
    if (template) {
      const content = document.importNode(template.content, true);
      document.querySelector("#primary-content").innerHTML = "";
      document.querySelector("#primary-content").appendChild(content);
    }
  }
}

function handleHashChange(event) {
  if (event && event.oldURL !== event.newURL) {
    changeContent();
  }
}

function onLoad() {
  if (!window.location.hash) {
    window.location.hash = "#about";
  }
  changeContent();
}

window.addEventListener("hashchange", handleHashChange);
window.addEventListener("load", onLoad);
