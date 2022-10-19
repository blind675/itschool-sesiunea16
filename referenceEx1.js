const personObj1 = {
  name: 'Christa',
  age: 20
};

let person = personObj1;
person.age = 25;

// Ce valori au 
// personObj1 = { ??? } 
// person = { ??? }

person = {
  name: 'John',
  age: 50
};

const personObj2 = person;

// Ce valori au 
// personObj1 = { ??? } 
// personObj2 = { ??? }
