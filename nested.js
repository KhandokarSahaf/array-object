const info = {
  name: "vnc",
  location: "BailyRoad",
  result: {
    GPA: 5.0,
    "Marti Position": "Top",
    collageGPA: {
      cgpa: 3.5,
    },
  },
};
//  nested property
console.log(info.result["Marti Position"]);
console.log(info.result.collageGPA.cgpa);
//  delete a property
delete info.result.collageGPA;

console.log(info);
