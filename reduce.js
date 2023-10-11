//The reduce() method returns a single value: the function's accumulated result.

let numbers = [20,13,14,51,18,37,56];


console.log("Using reduce function")
function getEvenNoSum(total, currentNumber)
{
    if(currentNumber%2==0) total+=currentNumber;
    return total ;
}

console.log(numbers.reduce(getEvenNoSum,10));

console.log("Using custom implementation of reduce");

function customGetEvenNoSum(array, $initialvalue = 0)
{
    let result = $initialvalue;
    for (let i=0; i<array.length;i++)
    {
      if(array[i]%2==0)  result+=array[i];
    }
    return result;
}

console.log(customGetEvenNoSum(numbers,10));