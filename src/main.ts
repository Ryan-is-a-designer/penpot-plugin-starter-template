import "./style.css";

// Get the current theme from the URL
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

// Attach event handler to the button
document.querySelector("[data-handler='replace-text']")?.addEventListener("click", () => {
  // Send message to plugin.ts
  parent.postMessage("replace-text", "*");
});

// Listen for messages from plugin.ts
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});
