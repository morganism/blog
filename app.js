// // app.js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(r => console.log("SW registered", r.scope))
      .catch(e => console.error("SW failed", e));
  });
}
