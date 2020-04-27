function wakeDog(dogName, dogBreed) {
    return(`Wake ${dogName} the ${dogBreed}`);
  }
  let wakeDogName = leashDog("Xerox", "Border Collie");
  console.log(wakeDogName);


  function leashDog(dogName, dogBreed) {
    return(`Leash ${dogName} the ${dogBreed}`);
  }
  let leashDogName = leashDog("Boo Radley", "Pibble");
  console.log(leashDogName);

  function walkToPark(dogName, dogBreed) {
    return(`Walk to the park with ${dogName} the ${dogBreed}`);
  }
  let walkToParkName = walkToPark("Bunny", "Labrador");
  console.log(walkToParkName);

  function throwFrisbee(dogName, dogBreed) {
    return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  }
  let throwFrisbeeName = throwFrisbee("Mary J. Blige", "Papillon");
  console.log(throwFrisbeeName);

  function walkHome(dogName, dogBreed) {
    return(`Walk home with ${dogName} the ${dogBreed}`);
  }
  let walkHomeName = walkHome("Santa Paws", "Husky");
  console.log(walkHomeName);

  function unleashDog(dogName, dogBreed) {
    return(`Unleash ${dogName} the ${dogBreed}`);
  }
  let unleashDogName =  unleashDog("Lauren", "Golden Retriever");
  console.log(unleashDogName);


  const routine =[wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

  /*
  function writeCards(names, namesEvent) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards[i] = `Thank you, ${names[i]}, for the wonderful ${namesEvent} gift!`;
        console.log(cards[i])
    }
    return cards
}
writeCards (names, namesEvent);
*/

  function exerciseDog(dogName, dogBreed) {
      let routineIterate = [];
      for (let i = 0; i < routine.length; i++) {

        // Method 01 
        // https://learn.co/tracks/re-coded-front-end-web-development-v2/javascript/manipulating-the-dom/js-fundamentals-looping-and-iteration-code-along
        //routineIterate[i] = routine[i](dogName, dogBreed);

        // Method 02
        // https://stackoverflow.com/questions/20432763/push-to-an-array-using-a-for-loop
        routineIterate.push(routine[i](dogName, dogBreed));
        }
        return routineIterate;
  }  