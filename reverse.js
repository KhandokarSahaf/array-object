const foodName = "Jackfruit";

let reverse = "";
for (const letter of foodName) {
  reverse = letter + reverse;
}
console.log(reverse);
