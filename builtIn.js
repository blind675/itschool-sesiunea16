// Constanta PI
console.log(Math.PI);
// Ridicarea la putere
console.log(Math.pow(2,4));
// Proximarea ca in liceu, la calcului mediei
console.log(Math.round(1.5));
// Cel mai apropiat numar intreg mai mic decat numarul aproximat
console.log(Math.floor(9.9));
console.log(Math.trunc(3.6));


// console.error("Eroare");
// console.info("Info");
// console.debug("Debug");


let startTime = Date.now();

// Cream un obiect ce contine toate detaliile despre data curenta.
let dateNow = new Date();

console.log(dateNow);

// Obiectul nou creat contine o serie de metode
console.log(dateNow.getFullYear());
// console.log(dateNow.getYear());

// Atentie! Prima luna are valoarea 0. (Putem face + 1 pt. a corecta asta)
let month = dateNow.getMonth() + 1;
console.log(month);

console.log(dateNow.getDate());
console.log(dateNow.getDay());

// console.log(Date.now())

let endTime = Date.now();

console.log("Run time: ", endTime - startTime);


let dateOld = new Date("1999-09-09");
console.log(dateOld);
