function callfun(form) {
  let EnterNumber = document.getElementById("enterNumber").value;

  // let inputNum = prompt("Enter Number");

  let squareNu = Math.pow(EnterNumber, 2);
  document.getElementById("dec").innerHTML = squareNu;
  let varTest = form.enterNumber.value;
  document.getElementById("pre").innerHTML = varTest;
}
function youNum(form) {}
