let obj1 = {
  name: "Bob",
}

let obj2 = {
  name: "Bob",
}

// console.log(typeof obj1);
// obj1 = obj2;

// obj1.extra = 'extra'

// ATENTIE! Doua obiecte create separat nu vor fi niciodata egale, chit ca au acelasi continut.
if (obj1 === obj2) {
  console.log("Same Reference");
} else {
  console.log("Not the same reference")
}

// Cu metoda Object.assign. Primul parametru e un obiect gol, cel de-al
// doilea obiectul are carui proprietati sunt copiate. Rezultatul va fi salvat intr-o variabila.
let obj3 = Object.assign({}, obj1);

console.log(obj1);
obj3.name = 'Ion';
console.log(obj3);


const o1 = { a: 1 }; // o1 devine {a: 1, b: 2, c: 3, d: 4}
const o2 = { b: 2, c: 3 };
const o3 = { d: 4 };


const obj = Object.assign(o1, o2, o3);

// obj === o1
obj.a = 'ceva';
o1.a = true;

console.log(obj); 
console.log(o1); 
console.log(o2); 
