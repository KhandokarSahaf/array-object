const pen = {
  brand: "Matador",
  price: 5,
  color: "black",
};
const pencil = new Object(pen);
pencil.height = 7;
console.log(pencil);

const rubber = Object.create({});
rubber.name = "sahaf";
console.log(rubber);
