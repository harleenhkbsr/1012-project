// alert("loaded")
// import Typo from "typo-js"
console.log(typeof Typo); // Should log "function"


function readFile() {
  const fileInput = document.getElementById("fileInput");//preparing inputs and outputs
  const output = document.getElementById("output");

  const file = fileInput.files[0];
  if (file) {
      const reader = new FileReader();//preparing stuffs
      var dictionary = new Typo("en_US", false, false, { dictionaryPath:"typo/dictionaries"});
      // const dictionary = new Typo("en_US");
      console.log(dictionary)

      reader.onload = function(event) {//on load:
        const fileContent = event.target.result;//read the file txt
        const words = fileContent.split(/\s+/);//and split them to array of strings

        output.innerHTML = "Consider making these switches: <br>";


        for (let i = 0; i < words.length; i++) {//for every "word" in a array

          if (spellcheckerTest(dictionary, words[i]) == false) {// if word is correctly spelled 
            output.innerHTML += words[i] + " to " + dictionary.suggest(words[i]) + "<br>";//output false
          }
        }
      };

      reader.readAsText(file);
  } else {//exceptions
    output.innerHTML = "No file selected.";
  }
}

function spellcheckerTest(dictionary, word){//using Typo.js made by cfinke to check spelling

  if (dictionary.check(word)){
    return true
  } else {
    return false
    console.log(dictionary.suggest(word))
  }
}

// function checkLoaded(){
//   alert("loaded")
// }

// spellcheckerTest("pple")

document.addEventListener("DOMContentLoaded", () => {
  // alert("loaded")
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

// export {checkLoaded, readFile}