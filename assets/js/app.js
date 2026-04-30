if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/assets/js/sw.js")
      .then(r => console.log("SW registered:", r.scope))
      .catch(e => console.error("SW failed:", e));
  });
}
