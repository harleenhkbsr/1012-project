function readFile() {
    const wordAlternatives = {
        "assisted": "aided",
        "handled": "managed",
        "helped": "supported",
        "worked": "contributed",
        "involved": "participated",
        "responsible": "accountable",
        "did": "performed",
        "made": "created",
        "role": "position",
        "part": "role",
        "took": "undertook",
        "managed": "oversaw",
        "led": "guided",
        "ran": "operated",
        "implemented": "executed",
        "utilized": "used",
        "collaborated": "worked together",
        "gained": "acquired",
        "learned": "acquired",
        "challenges": "obstacles",
        "dealt": "handled",
        "time": "schedule",
        "resources": "assets",
        "pressure": "stress",
        "performed": "executed",
        "care": "manage",
        "contributed": "added",
        "opportunity": "chance",
        "chance": "opportunity",
        "able": "capable",
        "allowed": "permitted",
        "served": "worked",
        "part": "component",
        "job": "role",
        "tasks": "duties",
        "collaborated": "worked together",
        "charge": "responsibility",
        "use": "utilize",
        "acquired": "obtained",
        "tasked": "assigned",
    };
    const fileInput = document.getElementById("fileInput");
    const output = document.getElementById("output");

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
  
        reader.onload = function(event) {
          const fileContent = event.target.result;
          const words = fileContent.split(/\s+/);
  
          output.innerHTML = "Consider making these switches: <br>";
  
          for (let i = 0; i < words.length; i++) {
            if (wordAlternatives.hasOwnProperty(words[i].toLowerCase())) {
              output.innerHTML += words[i] + " to " + wordAlternatives[words[i].toLowerCase()] + "<br>";
            }
          }
        };
  
        reader.readAsText(file);
      } else {
        output.innerHTML = "No file selected.";
      }
}

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const fileStatus = document.getElementById("fileStatus");
  
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        fileStatus.textContent = "File Selected. Click Read File.";
      } else {
        fileStatus.textContent = "";
      }
    });
  });