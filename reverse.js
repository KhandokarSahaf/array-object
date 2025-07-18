const foodName = "Jackfruit";

let reverse = "";
for (const letter of foodName) {
  reverse = letter + reverse;
}
console.log(reverse);

// 2nd option
const fdName = "Khandokar Sahaf";
let rev = "";
for (i = 0; i < fdName.length; i++) {
  //   console.log(i);
  //   console.log(fdName[i]);
  const letter = fdName[i];
  rev = letter + rev;
}
console.log(rev);

// 3rd and shorter way

const placeName = "Dhaka is the capital of Bangladesh";
const reversed = placeName.split("").reverse().join("");
console.log(reversed);
