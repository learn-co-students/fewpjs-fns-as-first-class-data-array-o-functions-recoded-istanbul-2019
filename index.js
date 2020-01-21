function wakeDog(dogName, dogBreed) {
    const s = `Wake ${dogName} the ${dogBreed}`;
    console.log(s);
    return s;
}

function leashDog(dogName, dogBreed) {
    const s = `Leash ${dogName} the ${dogBreed}`;
    console.log(s);
    return s;
}

function walkToPark(dogName, dogBreed) {
    const s = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(s);
    return s;
}

function throwFrisbee(dogName, dogBreed) {
    const s = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(s);
    return s;
}

function walkHome(dogName, dogBreed) {
    const s = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(s);
    return s;
}

function unleashDog(dogName, dogBreed) {
    const s = `Unleash ${dogName} the ${dogBreed}`;
    console.log(s);
    return s;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let result = [];
    for (let i = 0; i < routine.length; i++) {
        result.push(routine[i](dogName, dogBreed));
    }
    return result;
}