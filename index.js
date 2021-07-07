function wakeDog(a,b)
{
  const string=`Wake ${a} the ${b}`;
  
  return string; 
  
}
//wakeDog(a, b)).to.equal(`Wake Skippy the Welsh Corgi`)

function leashDog(a,b)
{
  return (`Leash ${a} the ${b}`);
  //return "Leash ".concat(a, " the ").concat(b);
}
function walkToPark(a,b)
{
 return (`Walk to the park with ${a} the ${b}`);
}
function throwFrisbee(a,b)
{
  return (`Throw the frisbee for ${a} the ${b}`);
}
function walkHome(a,b)
{
   return (`Walk home with ${a} the ${b}`);
}
function unleashDog(a,b)
{
return (`Unleash ${a} the ${b}`);
}

 let routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome, unleashDog];
 
function exerciseDog(dogName,dogBreed)
{
 let str=[];
 for(let i=0; i<routine.length; i++)
 {
  str.push(routine[i](dogName,dogBreed)); 
 }
 return str;
}



