
// function exerciseDog(dogName, dogBreed) {
//     function wakeDog(dogName, dogBreed) {
//         console.log(`Wake ${dogName} the ${dogBreed}`);
//     }
    
//     function leashDog(dogName, dogBreed) {
//         console.log(`Leash ${dogName} the ${dogBreed}`);
//     }
//     function walkToPark(dogName, dogBreed) {
//         console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
//     }
//     function throwFrisbee(dogName, dogBreed) {
//         console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
//     }
//     function walkHome(dogName, dogBreed) {
//         console.log(`Walk home with ${dogName} the ${dogBreed}`);
//     }
//     function unleashDog(dogName, dogBreed) {
//         console.log(`Unleash ${dogName} the ${dogBreed}`);
//     }
    
//     let routine = [wakeDog(dogName, dogBreed), leashDog(dogName, dogBreed), walkToPark(dogName, dogBreed), throwFrisbee(dogName, dogBreed), walkHome(dogName, dogBreed), unleashDog(dogName, dogBreed)];
//     for (let i = 0; i < routine.length; i++) {
//         return i;
//     }
// }
// exerciseDog("Esther", "Dalmation");


    function wakeDog(dogName, dogBreed) {
        return `Wake ${dogName} the ${dogBreed}`;
    }
    
    function leashDog(dogName, dogBreed) {
       return`Leash ${dogName} the ${dogBreed}`;
    }
    function walkToPark(dogName, dogBreed) {
       return`Walk to the park with ${dogName} the ${dogBreed}`;
    }
    function throwFrisbee(dogName, dogBreed) {
       return`Throw the frisbee for ${dogName} the ${dogBreed}`;
    }
    function walkHome(dogName, dogBreed) {
       return`Walk home with ${dogName} the ${dogBreed}`;
    }
    function unleashDog(dogName, dogBreed) {
       return`Unleash ${dogName} the ${dogBreed}`;
    }


let routine = [wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog];

    let newarray = [];

function exerciseDog(dogName, dogBreed) {
    
    for (let i = 0; i < routine.length; i++) {
        newarray.push(routine[i](dogName, dogBreed));
    }
    return newarray;
}



exerciseDog("Esther", "Dalmation");
    
    
