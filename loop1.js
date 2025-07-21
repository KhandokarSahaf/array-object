const desktop = {
  brand: "dell",
  model: 7400,
  color: "silver",
  ram: 16,
  isTouch: "true",
  brandNew: "false",
};
// declare as an Object thats way us (for in)
for (const configuration in desktop) {
  console.log(configuration, "-", desktop[configuration]);
}

// now i declare the object as a array then i use (for of)
const specifications = Object.keys(desktop);
for (const specification of specifications) {
  console.log(specification, `:`, desktop[specification]);
}
