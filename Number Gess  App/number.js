function range() {
  const inputNum = document.getElementById("enterNum").value;
  if (inputNum <= 4) {
    // alert("number is low");
    document.getElementById("numlist2").innerHTML = "number is low";
  } else if (inputNum <= 10) {
    document.getElementById("numlist2").innerHTML = "number is high";
  } else {
    document.getElementById("numlist2").innerHTML = "enter 1-10 numbers";
    // alert("enter 1-10 numbers");
  }
}
// Find a odd numbers
function oddList() {
  const inputNum = document.getElementById("enterNum").value;
  let text = "";
  let text2 = "";
  for (let i = 1; i <= inputNum; i += 2) {
    text += "The number is odd" + i + "<br/>";
  }
  document.getElementById("numlist").innerHTML = text;
}
function evenList() {
  const inputNum1 = document.getElementById("enterNum").value;
  // let text = "";
  let text2 = "";
  for (let i = 1; i <= inputNum1; i++) {
    if (i % 2 === 0) {
      text2 += "The number is even" + i + "<br/>";
    }
  }
  document.getElementById("numlist1").innerHTML = text2;
}
