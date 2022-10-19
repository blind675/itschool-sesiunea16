let movie = {
  name: "Matrix",
  rating: 4.3,
}

// Adaugarea de proprietati noi (similara cu modificarea):
console.log(' Movie 1:', movie);
movie.isItGood = true;
console.log(' Movie 2:', movie);

if ( movie.isItGood ) {
  console.log('exista');
} else {
  console.log('no key for name: isItGood');
}

console.log('---');

// Cum iteram prin obiect?
// Iteratie => luam pe rand fiecare element din obiect (fiecare pereche cheie: valoare)
// R: for...in
for (let key in movie) {
  // Variabila key va fi pe rand fiecare cheie din obiectul movie.
  console.log(key);
  // movie[key] va fi valoarea asociata cheii, din obiectul movie.
  console.log(movie[key]);
}

// console.log('---');

// let keys = Object.keys(movie);

// for (let index = 0; index < keys.length; index++) {
//   console.log(keys[index]);
// }

// console.log('---');

// let animals = ['vaca', 'porc', 'oaie'];

// for (let animal of animals) {
//   console.log(animal);
// }