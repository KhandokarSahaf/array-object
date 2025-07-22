const fd = {
  fd1: "sahaf",
  fd2: "naffes",
  fd3: "sadman",
};

const fdName = new Object(fd);
console.log(fdName);

// Object.create(fd):
// This creates a new empty object, but with fd as its prototype.
// So myFd has no own properties, but it inherits from fd.
// So console.log(myFd) logs {} (because it has no own keys)
const myFd = Object.create(fd);
console.log(myFd);
