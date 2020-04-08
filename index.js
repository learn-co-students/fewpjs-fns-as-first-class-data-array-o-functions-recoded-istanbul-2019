
let routine=[];

function wakeDog(dogName, dogBreed){
    let wake=`Wake ${dogName} the ${dogBreed}`;
    console.log(wake);
    return wake;
}
function leashDog(dogName, dogBreed){
    let leash="Leash ".concat(dogName, " the ").concat(dogBreed);;
    console.log(leash);
    return leash;
}
function walkToPark(dogName, dogBreed){
    let walkPark=`Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walkPark);
    return walkPark;
}
function throwFrisbee(dogName, dogBreed){
    let throwFrisbee=`Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(throwFrisbee);
    return throwFrisbee;
}
function walkHome(dogName, dogBreed){
    let walkhome=`Walk home with ${dogName} the ${dogBreed}`;
    console.log(walkhome);
    return walkhome;
}
function unleashDog(dogName, dogBreed){
    let unleash=`Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
    return unleash;
}
routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName,dogBreed){
    let dayRoutine = [];
    for(let i = 0 ; i < routine.length ; i++){
        dayRoutine.push(routine[i](dogName,dogBreed));
    }
    return dayRoutine;
}
exerciseDog('Byron', 'poodle');