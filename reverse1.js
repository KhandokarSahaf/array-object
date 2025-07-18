const myPlace = "Jatrabari";

// 1 st way for reverse
let reverse = "";
for (const letter of myPlace) {
  reverse = letter + reverse;
}
console.log(reverse);
// 2nd way for reverse
let rev = "";
for (i = 0; i < myPlace.length; i++) {
  console.log(`${i} = ${myPlace[i]}`);
  const letter = myPlace[i];
  rev = letter + rev;
}
console.log(rev);
// 3rd way for reverse
// shot way for reverse
const reversed = myPlace.split("").reverse().join("");
console.log(reversed);
