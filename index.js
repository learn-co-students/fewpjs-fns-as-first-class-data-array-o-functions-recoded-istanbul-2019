function wakeDog(dogName, dogBreed) {
 let str = `Wake ${dogName} the ${dogBreed}`
    console.log(str);
    return str ;
  }
  //Xerox, BorderCollie
  function leashDog(dogName, dogBreed) {
    let str =`Leash ${dogName} the ${dogBreed}`;
    console.log();
    return str;
  }
  //Boo Radley, Pibble
  function walkToPark(dogName, dogBreed) {
    let str = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}
//Bunny, Labrador
  function throwFrisbee(dogName, dogBreed) {
    let str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;  
}//Mary J. Blige, Papillon
  function walkHome(dogName, dogBreed) {
    let str = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str; 
}
//Sant Paws, Husky
  function unleashDog(dogName, dogBreed) {
    let str = `Unleash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;  
}//Lauren, Golden Retriever
let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName,dogBreed){
  let array = [];
  for (let i=0; i<routine.length;i++){
    let str = routine[i](dogName,dogBreed);
    array.push(str);
  }
return array;
}
