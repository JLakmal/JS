function addTodo() {
  const todoInput = document.getElementById("userInput").value;
  const li = document.createElement("li");
  //   var textNode = document.createTextNode(todoInput);
  var t = document.createTextNode(todoInput);
  const chek = "hi";

  li.appendChild(t);
  if (todoInput === "") {
    // alert("hi");.innerHTML = "Hello World";
    document.getElementsById("error").innerHTML = chek;
  } else {
    document.getElementById("addUl").appendChild(li);
  }
  //   document.getElementById("userInput").value = "";
}
