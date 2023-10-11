const persons = [
    {
        firstname : "Datta",
        lastname : "Reve",
        age : 22
    },
    {
        firstname : "Rupa",
        lastname : "Banen",
        age : 18
    },
    {
        firstname : "Akash",
        lastname : "Reve",
        age : 19
    },
    {
        firstname : "Avi",
        lastname : "Reve",
        age : 17
    }
]

console.log("using filter method");     //The filter() method creates a new array filled with elements that pass a test provided by a function.
console.log(persons.filter((object) =>{
    return object.age >= 18;
}))

console.log("Using custom implementation of filter");

function eligibleToVote(array)
{
    let result = [];
    for (let i=0; i<array.length;i++)
    {
      // console.log(i);
      let object = array[i];
      if(object.age >= 18)  result.push(object);
    }
    return result;
}
function customFilter(myfunction, array ){
    let result = myfunction(array);
    return result;
  }
console.log(customFilter(eligibleToVote,persons));
