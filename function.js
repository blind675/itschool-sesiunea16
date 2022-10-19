let number1 = 0;
let number2 = number1;

let obj1 = {
  name: 'Ion',
}

// Daca un obiect este creat prin pasarea celuilalt ca referinta, cele doua, vor fi egale!
let obj2 = obj1;

// Avem o problema cu crearea unui obiect prin referentierea celuilalt.
// In memorie, ambele obiecte impart acelasi spatiu. Daca unuia i se modifica vreo valoare, si celuilalt i se va modifica.
obj2.name = "Bob";
obj1.text = 'new';

console.log(obj1);
console.log(obj2);

// Obiect gol
// let obj3 = {
// }
// obj3.ceva = '';

function myFunction(name, job, age, sex, address) {
  console.log(name);
  console.log(job);
  console.log(age + 20);
  console.log(sex);
  console.log(address);
}

let myName = "Bob";
myFunction(myName, 20, 'male', 'Timisora', 'developer');

// Spre deosebire de primitive, in cadrul unei functii, obiectele sunt transmise prin referinta (by reference), adica nu se face o copie a obiectului, ci se trimite obiectul original (vezi diagrama copiere obiecte).
// person = me 
function myFunction2(person) {
  console.log(person.name);
  console.log(person.age + 20);
  console.log(person.sex);
  console.log(person.address);
  console.log(person.job);
  
  // Care este problema care poate aparea? Daca moficam proprietati ale obiectului pasat ca parametru in interiorul functiei, aceste modificari vor fi vizibile si in exterior!
  person.name = 'Vasile';
}

console.log("----");

let me = {
  name: "Bob",
  sex: 'male',
  age: 30,
  address: 'Buc',
};

myFunction2(me);

console.log(me);
