console.log("map function implementation");

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  console.log("Using map method");
  console.log(
    persons.map(function(object){   //map() creates a new array from calling a function for every array element.
      return [object.firstname, object.lastname].join(" ");
  })
  )
  
  
  console.log("Using custom implementation of map");

  function fullNamesArray(array)
  {
    let resultNames = [];
  for (let i=0; i<array.length;i++)
  {
    // console.log(i);
    let object = array[i];
    resultNames.push([object.firstname, object.lastname].join(" "));
  }
  return resultNames;
  }
  
  // console.log(persons[0])
console.log(fullNamesArray(persons));
