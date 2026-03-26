// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

function updateText() {
  const input = document.getElementById("userInput").value;
  document.getElementById("dynamicText").innerText = input;
}

window.updateText = updateText;
