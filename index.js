    

function wakeDog(dogName, dogBreed) {
const string = `Wake ${dogName} the ${dogBreed}`
console.log(string);
return (string); 
}
    
function leashDog(dogName, dogBreed) {
  const string= `Leash ${dogName} the ${dogBreed}`
  console.log(string);
  return string; 
//return leashDog(c) infinite loop

 }

function walkToPark(dogName,dogBreed){
    const string= `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function throwFrisbee(dogName,dogBreed){
    const string=`Throw the frisbee for ${dogName} the ${dogBreed}` 
    console.log(string);
    return string; 
}

function walkHome (dogName,dogBreed){
    const string =`Walk home with ${dogName} the ${dogBreed}`
    console.log(string);
    return string; 
}

function unleashDog (dogName,dogBreed){
    const string=`Unleash ${dogName} the ${dogBreed}`
    console.log(string);
    return string; 
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome,unleashDog]


function exerciseDog (dogName, dogBreed) {
let exerciseArray=[];
for(let i=0;i<routine.length;i++){
    exerciseArray[i]=routine[i](dogName,dogBreed);
}
return exerciseArray;
}
