const findTheOldest = function(input) {
store = 0
console.log(input[store].name)
for(i=0; i<input.length; i++){
if (getAge(input[i])>getAge(input[store])){
    store = i
    console.log(input[store].name)
}
}
named = input[store].name
console.log("name is" +named)
return input[store]
};

function getAge(person){
if(person.yearOfDeath == undefined){
    return (2025-person.yearOfBirth)
}
return (person.yearOfDeath-person.yearOfBirth)
}

// Do not edit below this line
module.exports = findTheOldest;
