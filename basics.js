// Descriem atributele unei persoane, folosind variabile.
let name = "Bob";
let age = 20;
let CNP = 1213143124234;

// Cum putem grupa atributele persoanei intr-o singura variabila? Creand un obiect.
let person = {
  name: "Bob",
  age: 20,
  CNP: 1213143124234,
  address: undefined,
  // Pentru caractere speciale din denumirea cheii obiectului folosim apostofuri/ghilimele.
  'eye-color': 'brown',
  // eyeColor: 'brown'
  jobLocation: {
    city: 'Timisoara',
    street: null,
  },
  // Putem stoca si functii in obiecte.
  sayHello: () => {
    console.log('Salut, eu sunt Bob');
  }
}

// console.log(person);

// person.sayHello();

// Accesarea proprietatilor:
// Varianta 1: numeObiect.numeCheie
console.log(person.name);
console.log(person.jobLocation.city);

console.log(person['age']);   // person.age
console.log(person['eye-color']);  

// Varianta 2: numeObiect['numeCheie']
person.age = 30;
console.log(person.age);

// Adaugarea de proprietati noi (similara cu modificarea):
person.surname = "Ionescu";
console.log(person);

person.name = "Ion";

if( person.name === "Bob" ) {
  console.log("Persoana se numeste Bob");
} else {
  console.log("Numele sa schimbat");
}

// Cum testam daca o proprietate exista in obiect? Verificam ca are valoarea diferita de undefined.
if ( person.sex !== undefined ) {
  
  if( person.sex === "male" ) {
    console.log("Pesoana e de sex masculin");
  } else if( person.sex === "female" ) {
    console.log("Pesoana e de sex feminin");
  } else {
    console.log("Sex necunoscut");
  }

} else {
  console.log("Unknown Key");
}
