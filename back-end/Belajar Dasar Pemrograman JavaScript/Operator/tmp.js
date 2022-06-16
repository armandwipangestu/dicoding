const x = 5n;
const y = `${x}`;
const z = x;

const check = (x, y, identify) => {
  switch (identify) {
    case "identik":
      if (x === y) {
        console.log(true);
      } else {
        console.log(false);
      }
      break;
    case "sama":
      if (x == y) {
        console.log(true);
      } else {
        console.log(false);
      }
      break;
  }
};

check(x, y, "identik");
check(x, y, "sama");
check(x, z, "identik");
check(x, z, "sama");
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
