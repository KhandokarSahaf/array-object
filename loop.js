const mobile = {
  brand: "samsung",
  price: 22000,
  color: "Green",
  isNew: true,
};

// for (const mobileInfo in mobile) {
//   console.log(mobileInfo, `:`, mobile[mobileInfo]);
// }

// **************************22222222
const specification = Object.keys(mobile);
console.log(specification);

for (const keey of specification) {
  console.log(keey);
}
