//Arry
let animals = [
    "Lion",
    "Tiger",
    "Giraffe",
    "Elephant",
    "Monkey",
    "Lemur",
    "Rhinoceros"
];

let firstAnimal = animals[0];

const myWeirdArray = [
    "Text goes here",
    1,
    [0, 1, 2, 3],
    function myFunction() {
        console.log('Hello World')
    }
];

myWeirdArray[3]()

// console.log & console.table

console.log(animals);
console.table(animals);

console.log(typeof animals)

//objects
const animal = {
    name: "Lion",
    number: 3
};
console.log(animal.name)

const animalData = [
    {
        name: "Lion",
        number: 3,
        eats: ["zebra", "antelope", "buffalo", "hippopotamus"]
    },
    {
        name: "Tiger",
        number: 5,
        eats: ["moose", "deer", "buffalo"]
    },
    //...
    {
        name: "Lemur",
        number: 15,
        eats: ["fruit", "leaves", "insects"]
    },
    {
        name: "Rhinoceros",
        number: 2,
        eats: ["grass", "shoots", "leaves", "berries"]
    }
];
console.log(animalData);
console.table(animalData);
// JSON.stringify() - The JSON.stringify() method converts a JavaScript object or value to
// a JSON string.

let animalString = JSON.stringify(animalData)
console.log(animalString)
// The JSON.parse()method parses a JSON string into a JavaScript object. This can be necessary
// when receiving data from APIs and other sources.

let animalData1 = JSON.parse(animalString)
console.log(animalData1)
// Arrow and Anonymous functions


function double(num) {
    return num * 2;
}

const double1 = function (num) {
    return num * 2;
}

const double2 = (num) => {
    return num * 2;
}

const double3 = (num) => num * 2;



// Map, Filter, Reduce : Higher-order functions are functions that take other functions as arguments or return
// functions as their results.


//Map :
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1)
//filter :

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//reduce :

const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array2.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array2.reduce(reducer, 5));


