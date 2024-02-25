const letSymbols =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
let pass = "";
let empty = "";
function generatePassword() {
  for (let i = 0; i <= 8; i++) {
    let char = Math.floor(Math.random() * letSymbols.length);
    pass += letSymbols.charAt(char);
  }

  // Get the element where you want to display the generated password
  const outputElement = document.getElementById("output");

  // Clear previous content
  outputElement.innerHTML = "";

  // Update the HTML content with the generated password
  outputElement.innerHTML = pass;

  // Reset pass variable for the next generation
  pass = "";
  // return (document.getElementById("output").innerHTML = pass);
}
