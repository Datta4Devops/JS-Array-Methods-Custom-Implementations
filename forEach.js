//The forEach() method calls a function for each element in an array.
let nameArray = ['My','name','is','Dattatray','Parmeshwar','Reve'];
let fullName = ''
console.log("Using forEach method");

function getFullName(word)
{
    fullName = fullName.concat(word+" ")
}

nameArray.forEach(getFullName);
console.log(fullName);

fullName = ''


console.log("Using custom implementation of forEach");
function customGetFullName(array)
{
    for (let i=0; i<array.length;i++)
    {
      fullName += array[i]
      fullName += ' ';
    }
}

customGetFullName(nameArray);
console.log(fullName);