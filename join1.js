let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.join("-"));

// //// now i try to convert a string into a array

let schoolName = "Jatrabari Ideal School And Collage";

let nameArray = schoolName.split("");

console.log(nameArray);
// now i try to print the index number of this array
for (i = 0; i < nameArray.length; i++) {
  console.log(`${i}, ${nameArray[i]}`);
}
