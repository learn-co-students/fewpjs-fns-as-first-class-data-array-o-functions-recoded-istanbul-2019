

const wakeDog = function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
}

const leashDog = function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`;
}


const walkToPark = function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
}

const throwFrisbee = function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

const walkHome = function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`;
}

const unleashDog = function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


function exerciseDog(dogName, dogBreed) {
    let dogRoutine = [];
    for (let i = 0; i < routine.length; i++) {
        dogRoutine.push(routine[i](dogName, dogBreed));
    }
    return dogRoutine;
}

