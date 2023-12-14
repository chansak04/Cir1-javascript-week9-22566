//Object.assing() method
const cat = { 1: "srisawat", 2: "cat" };
const dog = { 3: "Plug", 4: "dog" };
const bird = { 5: "Penguin", 6: "bird" };

//Using Object.assign
const animal = Object.assign(cat, dog, bird);
console.log(animal);
//Using spread
const animal2 = { ...cat, ...dog, ...bird }
console.log(animal2)
