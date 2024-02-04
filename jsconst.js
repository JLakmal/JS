// const PI = 3.141592653589793;

// try {
//   PI = 3.14;

//   document.getElementById("demo").innerHTML = PI;
// } catch (error) {
//   document.getElementById("demo2").innerHTML = err;
// }

// const car = { type: "", model: "4332", color: "red" };
// car.color = "yellow";
// car;
// document.getElementById("demo").innerHTML = car;
// document.getElementById("demo2").innerHTML = car.color;

// function toCelsius(f) {
//   return (5 / 9) * (f - 32);
// }
// let result = toCelsius(50);
// document.getElementById("demo").innerHTML = result;

let car = "filt";
document.getElementById("demo").innerHTML = car;

let num = 25;
document.getElementById("demo2").innerText = num;

// Object
const person = {
  firstName: "Lakmal",
  LastName: "Bandara",
  Gender: "Male",
  id: "123",
  fullName: function () {
    return this.firstName + "  " + this.LastName;
  },
};

let concat = person.LastName + " " + "" + person.firstName;
document.getElementById("demo4").innerHTML = concat;
document.getElementById("demo3").innerHTML = person.LastName;
