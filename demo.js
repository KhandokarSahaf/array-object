// NEW OBJECT DECLARE FOR A OLD OBJECT AND ADD NEW VALUE
const personalInfo = {
  fullName: "Khandokar Sahaf",
  height: "5foot 9",
  number: "0160895686",
  address: "Dhaka",
};

const info = new Object(personalInfo);
info.color = "shemla";
console.log(info);

// NOW I DECLARE A EMPTY VARRIABLE AS OJECT AND ADD NEW PROPERTY
let food = Object.create({});
food.pasta = "Cheese Pasta";
food.chicken = "Chicken Burger";
food.drinks = "Cold Coffee";

console.log(food);
