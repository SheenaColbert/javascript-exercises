const findTheOldest = function(people) {
let maxAge = -1
let maxAgeIndex
let year 
for(let i= 0; i < people.length; i ++ ){
    if(people[i].yearOfDeath  == undefined) {
        year = new Date('May 22, 2022').getFullYear()
    }else{
        year = people[i].yearOfDeath
    }
    let age = year - people[i].yearOfBirth;
    if(age > maxAge){
        maxAge = age
        maxAgeIndex = i
    }


}
return people[maxAgeIndex]
};

// Do not edit below this line
module.exports = findTheOldest;

//go through the array 
//find who the oldest is by checking birth and death year
//subtract death year from birth year to get age 
//find largest number and store it
//create a function to let us know if we found a larger number and then store it
//return the whole object

// storing means add it to the left side