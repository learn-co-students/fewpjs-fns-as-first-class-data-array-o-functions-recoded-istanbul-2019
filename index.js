let feedback 

function wakeDog(dogName, dogBreed) {
    feedback = `Wake ${dogName} the ${dogBreed}`;
    console.log(feedback);
    return feedback;
}

function leashDog(dogName, dogBreed) {
    feedback = `Leash ${dogName} the ${dogBreed}`;
    console.log(feedback);
    return feedback;
}

function walkToPark(dogName, dogBreed) {
    feedback = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(feedback);
    return feedback;
}

function throwFrisbee(dogName, dogBreed) {
    feedback = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(feedback);
    return feedback;
}

function walkHome(dogName, dogBreed) {
    feedback = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(feedback);
    return feedback;
}

function unleashDog(dogName, dogBreed) {
    feedback = `Unleash ${dogName} the ${dogBreed}`;
    console.log(feedback);
    return feedback;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
let output = new Array();

function exerciseDog(dogName, dogBreed) {
    for (let i=0; i < routine.length; i++){
        routine[i](dogName, dogBreed);
        output[i] = feedback;
    }
    return output;
    
}