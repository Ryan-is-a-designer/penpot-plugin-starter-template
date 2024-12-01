penpot.ui.open("Replace Selected Text Plugin", `?theme=${penpot.theme}`);

// Listen for messages from the UI
penpot.ui.onMessage<string>((message) => {
  if (message === "replace-text") {
    // Get the current selection
    const selectedItems = penpot.selection.filter((item) => item.type === "text");

    if (selectedItems.length > 0) {
      selectedItems.forEach((textItem) => {
        // Update the text content of each selected item
        if ("characters" in textItem) {
          textItem.characters = "Hello world"; // Corrected property for text content
        }
      });
    } else {
      // Log a warning if no text items are selected
      console.warn("No text items are selected. Please select a text item.");
    }
  }
});

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});
