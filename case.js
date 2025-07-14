const food = "Pizza";
let myFood = "piZzA";

if (food.toLocaleLowerCase === myFood.toLocaleLowerCase) {
  console.log(`hurray ajke kobiya khabo`);
} else {
  console.log("ajke ar khaitei mon chaitese nh ");
}

// 2nd Type

let presentAddr = "Dhaka";
let permantAddr = "  DhAkA  ";

if (
  presentAddr.toLocaleUpperCase().trim() === permantAddr.toLocaleUpperCase().trim()
) {
  console.log("oh you are from the same district");
} else {
  console.log("ami gram theke dhaka aisi sir");
}
