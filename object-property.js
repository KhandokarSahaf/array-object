const ahaf = {
  fullName: "Khandokar Saeed Al Sahaf",
  age: 22,
  permanentAdd: "Dhaka",
  profession: "web developer",
  "my hobby": ["reading books", "sleeping", "talking"],
};

console.log(ahaf.age);
console.log(ahaf["my hobby"]);
// we also can store the value of a property into a new variable and call the new variable for console.log or  simply change their value by store new value into 2nd declared variable without changing the value of my real value

ahaf.age = 23;
const updateAge = ahaf.age;

console.log(updateAge);
