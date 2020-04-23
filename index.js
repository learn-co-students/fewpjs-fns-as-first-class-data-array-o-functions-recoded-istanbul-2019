
// function wakeDog(dogName, dogBreed) {
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//   }


//   function leashDog(dogName, dogBreed) {
//     const dogName = "Leash"
//     const dogBreed = "the poodle"
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//   }

//   function walkToPark(dogName, dogBreed) {
//     const dogName = "Walk to the park with"
//     const dogBreed = "the poodle"
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//   }

//   function throwFrisbee(dogName, dogBreed) {
//     const dogName = "Throw the frisbee for"
//     const dogBreed = "the poodle"
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//   }

//   function walkHome(dogName, dogBreed) {
//     const dogName = "Walk home with"
//     const dogBreed = "the poodle"
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//   }

//   function unleashDog(dogName, dogBreed) {
//     const dogName = "Unleash"
//     const dogBreed = "the poodle"
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//   }


//   var routine = [
//     wakeDog(Byron, the poodle),
//     leashDog(Leash, the poodle),
//     walkToPark(Walk to the park with, the poodle),
//     throwFrisbee(Throw the frisbee for, the poodle),
//     walkHome(Walk home with, the poodle),
//     unleashDog(Unleash, the poodle)
// ]

// function exerciseDog(dogName, dogBreed) {

 

function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
  }
  

  function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`;
  }


  function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
  }

  function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }

  function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`;
  }

  function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`;
  }


  let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
  ]

  let arrayDog = []
  function exerciseDog(dogName, dogBreed) {
      for (let i = 0; i < routine.length; i++) {
        arrayDog.push(routine[i](dogName, dogBreed))

      }
      return arrayDog;
  }

