let wakeDog = function(dogName, dogBreed) {
  console.log("Wake " + dogName + " the " + dogBreed);
  return "Wake " + dogName + " the " + dogBreed;
};

let leashDog = function(dogName, dogBreed) {
  console.log("Leash " + dogName + " the " + dogBreed);
  return "Leash " + dogName + " the " + dogBreed;
};
let walkToPark = function(dogName, dogBreed) {
  console.log("Walk to the park with  " + dogName + " the " + dogBreed);
  return "Walk to the park with " + dogName + " the " + dogBreed;
};
let throwFrisbee = function(dogName, dogBreed) {
  console.log("Throw the frisbee for " + dogName + " the " + dogBreed);
  return "Throw the frisbee for " + dogName + " the " + dogBreed;
};
let walkHome = function(dogName, dogBreed) {
  console.log("Walk home with " + dogName + " the " + dogBreed);
  return "Walk home with " + dogName + " the " + dogBreed;
};
let unleashDog = function(dogName, dogBreed) {
  console.log("Unleash " + dogName + " the " + dogBreed);
  return "Unleash " + dogName + " the " + dogBreed;
};

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];
let arr = [];
function exerciseDog(dogName, dogBreed) {
  for (let index = 0; index < routine.length; index++) {
    let fun = routine[index];

    arr.push(fun(dogName, dogBreed));
  }
  return arr;
}
